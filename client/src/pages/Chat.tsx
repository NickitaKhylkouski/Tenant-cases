import React, { useState } from 'react';
import { Link } from 'wouter';
import { MessageSquare, Send, ArrowLeft } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="w-full max-w-4xl mx-auto p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cases
          </Link>
          <h1 className="text-2xl font-bold text-center flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            Legal GPT Chat
          </h1>
          <div className="w-24"></div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-lg flex flex-col">
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>Ask me anything about landlord-tenant law in the Bay Area!</p>
                <p className="text-sm mt-2">I can help with rent control, evictions, repairs, and more.</p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-blue-50 ml-12'
                      : 'bg-gray-50 mr-12'
                  }`}
                >
                  <p className="text-sm font-semibold mb-1">
                    {msg.role === 'user' ? 'You' : 'Legal GPT'}
                  </p>
                  <p className="text-gray-800">{msg.content}</p>
                </div>
              ))
            )}
            {isLoading && (
              <div className="bg-gray-50 p-4 rounded-lg mr-12">
                <p className="text-sm font-semibold mb-1">Legal GPT</p>
                <p className="text-gray-800">Thinking...</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about landlord-tenant law..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
