import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, MessageCircle, User, Bot, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const MAX_DEMO_REQUESTS = 3;

const StrunzChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I have access to Dr. Ulrich Strunz\'s comprehensive knowledge base on orthomolecular medicine, nutrition, and health optimization. Ask me anything about supplements, nutrition protocols, or health strategies from his extensive research.\n\n⚠️ This is a demo version limited to 3 requests. Please provide your Gemini API key below for unlimited access.',
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Check if we've exceeded demo requests and no API key provided
    if (requestCount >= MAX_DEMO_REQUESTS && !apiKey.trim()) {
      toast({
        title: "Demo Limit Reached",
        description: "Please provide your Gemini API key to continue using the chat.",
        variant: "destructive",
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let response;
      
      if (apiKey.trim()) {
        // Use Gemini API with user's key
        response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are Dr. Ulrich Strunz's AI assistant with access to his comprehensive knowledge base on orthomolecular medicine, nutrition, and health optimization. Answer this question based on Dr. Strunz's research and recommendations: ${input.trim()}`
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
      } else {
        // Demo mode - use fallback responses
        const demoResponses = [
          "Based on Dr. Strunz's research, orthomolecular medicine focuses on providing optimal molecular nutrition. For general health, he often recommends ensuring adequate levels of key nutrients like vitamin D3, omega-3 fatty acids, magnesium, and B vitamins.",
          "Dr. Strunz emphasizes the importance of personalized nutrition based on individual lab values. He advocates for measuring and optimizing nutrient levels rather than following one-size-fits-all recommendations.",
          "According to Dr. Strunz's approach, inflammation is at the root of many chronic diseases. He recommends anti-inflammatory protocols including omega-3 supplementation, curcumin, and a nutrient-dense, low-inflammatory diet."
        ];
        
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: demoResponses[requestCount % demoResponses.length] + "\n\n⚠️ Demo response. For detailed answers from Dr. Strunz's knowledge base, please provide your Gemini API key.",
          role: 'assistant',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        setRequestCount(prev => prev + 1);
        setIsLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, but I could not generate a response at this time.';
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: content,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setRequestCount(prev => prev + 1);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get response. Please check your API key and try again.",
        variant: "destructive",
      });
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I apologize, but I\'m having trouble connecting right now. Please check your API key and try again.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      setShowApiInput(false);
      toast({
        title: "API Key Set",
        description: "You now have unlimited access to the Dr. Strunz knowledge base.",
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Card className="w-full h-[500px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <MessageCircle size={20} className="text-emerald-600" />
          Dr. Strunz Knowledge Assistant
          {requestCount >= MAX_DEMO_REQUESTS && !apiKey.trim() && (
            <AlertCircle size={16} className="text-amber-500" />
          )}
        </CardTitle>
        {!apiKey.trim() && (
          <div className="text-xs text-slate-500">
            Demo: {requestCount}/{MAX_DEMO_REQUESTS} requests used
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4 pt-0">
        {showApiInput && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-800 mb-2">
              <strong>Optional:</strong> Provide your Gemini API key for unlimited access
            </div>
            <div className="flex gap-2">
              <Input
                type="password"
                placeholder="Enter your Gemini API key..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="flex-1 text-xs"
              />
              <Button 
                onClick={handleApiKeySubmit}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Set Key
              </Button>
            </div>
            <div className="text-xs text-blue-600 mt-1">
              Get your free API key at{' '}
              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-blue-800"
              >
                Google AI Studio
              </a>
            </div>
          </div>
        )}
        <ScrollArea ref={scrollAreaRef} className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-emerald-600 text-white'
                  }`}
                >
                  {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="bg-slate-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="flex gap-2 mt-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about Dr. Strunz's health recommendations..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button 
            onClick={sendMessage} 
            disabled={!input.trim() || isLoading || (requestCount >= MAX_DEMO_REQUESTS && !apiKey.trim())}
            size="icon"
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Send size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrunzChatWidget;