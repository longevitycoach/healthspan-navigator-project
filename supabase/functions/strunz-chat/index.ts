import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

    // Call Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are Dr. Ulrich Strunz's AI assistant with access to his comprehensive knowledge base on orthomolecular medicine, nutrition, and health optimization. Dr. Strunz is a renowned German physician and author who specializes in:

- Orthomolecular medicine and optimal nutrition
- Vitamin and mineral supplementation protocols
- Anti-aging and longevity strategies
- Sports medicine and performance optimization
- Stress management and hormonal balance
- Evidence-based preventive medicine

Answer this question based on Dr. Strunz's research, philosophy, and recommendations. Be specific about supplements, dosages, and protocols when relevant. Always emphasize the importance of lab testing and individualized approaches. Keep responses informative but concise.

Question: ${question}`
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