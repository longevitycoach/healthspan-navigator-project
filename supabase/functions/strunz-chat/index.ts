import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-auth-token',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Max-Age': '86400',
  'Access-Control-Allow-Credentials': 'true',
};

// Updated MCP Client for v0.5.2+ with OAuth 2.1 support
class MCPClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async queryKnowledge(question: string): Promise<string> {
    try {
      console.log('Querying MCP server v0.5.2+ with question:', question);
      console.log('MCP server URL:', this.baseUrl);
      
      // Try the new v0.5.2+ API endpoints
      // First, try the simplified health check approach
      const healthResponse = await fetch(`${this.baseUrl.replace('/sse', '')}/health`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Supabase-Edge-Function/1.0',
        }
      });

      console.log('Health check status:', healthResponse.status);
      
      if (healthResponse.ok) {
        // Server is healthy, try the query endpoint
        return await this.queryNewAPI(question);
      } else {
        console.log('Health check failed, trying SSE approach');
        return await this.queryKnowledgeSSE(question);
      }
    } catch (error) {
      console.error('Error in queryKnowledge:', error);
      // Fallback to SSE approach
      return await this.queryKnowledgeSSE(question);
    }
  }

  async queryNewAPI(question: string): Promise<string> {
    try {
      // Use the new v0.5.2+ query endpoint
      const queryUrl = `${this.baseUrl.replace('/sse', '')}/query`;
      
      const requestBody = {
        question: question,
        max_results: 5,
        include_sources: true
      };
      
      console.log('Querying new API:', queryUrl);
      console.log('Request body:', JSON.stringify(requestBody));
      
      const response = await fetch(queryUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Supabase-Edge-Function/1.0',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('New API response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('New API error response:', errorText);
        throw new Error(`New API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('New API response data:', data);
      
      // Extract answer from the new API format
      if (data.answer) {
        return data.answer;
      } else if (data.results && data.results.length > 0) {
        return data.results.map((r: any) => r.content || r.text).join(' ');
      } else if (data.response) {
        return data.response;
      }
      
      return 'No response from knowledge base';
    } catch (error) {
      console.error('New API query failed:', error);
      throw error;
    }
  }

  async queryKnowledgeSSE(question: string): Promise<string> {
    try {
      console.log('Trying SSE approach for MCP server v0.5.2+');
      
      // Try POST to SSE endpoint with new format
      const requestBody = {
        question: question,
        stream: true,
        max_results: 5
      };
      
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'User-Agent': 'Supabase-Edge-Function/1.0',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('SSE POST response status:', response.status);
      console.log('SSE POST response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('SSE POST error:', errorText);
        throw new Error(`SSE POST failed: ${response.status} - ${errorText}`);
      }

      const text = await response.text();
      console.log('SSE response text:', text);
      
      // Parse SSE format for v0.5.2+
      const lines = text.split('\n');
      let result = '';
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.substring(6).trim();
          if (data === '[DONE]' || data === '') continue;
          
          try {
            const parsed = JSON.parse(data);
            if (parsed.content) {
              result += parsed.content;
            } else if (parsed.answer) {
              result += parsed.answer;
            } else if (parsed.text) {
              result += parsed.text;
            } else if (typeof parsed === 'string') {
              result += parsed;
            }
          } catch (parseError) {
            console.log('Could not parse SSE data as JSON, treating as text:', data);
            result += data;
          }
        }
      }
      
      return result || 'No content received from SSE stream';
    } catch (error) {
      console.error('SSE query failed:', error);
      throw new Error(`MCP server connection failed: ${error.message}`);
    }
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not set');
    }

    const { question } = await req.json();
    
    if (!question || typeof question !== 'string') {
      throw new Error('Question is required and must be a string');
    }

    console.log('Processing question:', question);

    // Initialize MCP client
    const mcpClient = new MCPClient('https://strunz.up.railway.app/sse');
    
    // Query the Strunz knowledge base via MCP
    let knowledgeBase = '';
    try {
      knowledgeBase = await mcpClient.queryKnowledge(question);
      console.log('Knowledge base response received');
    } catch (mcpError) {
      console.log('MCP query failed, proceeding with Gemini only:', mcpError);
      knowledgeBase = 'Knowledge base temporarily unavailable';
    }

    // Enhance the prompt with knowledge base context
    const enhancedPrompt = `You are Dr. Ulrich Strunz's AI assistant with access to his comprehensive knowledge base on orthomolecular medicine, nutrition, and health optimization.

Dr. Strunz Knowledge Base Context:
${knowledgeBase}

Based on the above knowledge base context and Dr. Strunz's expertise in orthomolecular medicine, answer the following question. If the knowledge base provides specific information, incorporate it into your response. If not, rely on Dr. Strunz's general principles of:

- Orthomolecular medicine and optimal nutrition
- Vitamin and mineral supplementation protocols  
- Anti-aging and longevity strategies
- Sports medicine and performance optimization
- Stress management and hormonal balance
- Evidence-based preventive medicine

Be specific about supplements, dosages, and protocols when relevant. Always emphasize the importance of lab testing and individualized approaches.

Question: ${question}`;

    // Call Gemini API with enhanced context
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: enhancedPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    if (!response.ok) {
      console.error('Gemini API error:', response.status, response.statusText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Gemini API response received');
    
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, but I could not generate a response at this time.';
    
    return new Response(JSON.stringify({ 
      answer: content,
      knowledge_source: knowledgeBase !== 'Knowledge base temporarily unavailable' ? 'MCP + Gemini' : 'Gemini only',
      success: true 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in strunz-chat function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});