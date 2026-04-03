'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingText]);

  const simulateStream = async (text: string) => {
    setStreamingText('');
    setLoading(true);

    for (let i = 0; i < text.length; i++) {
      await new Promise((r) => setTimeout(r, 20));
      setStreamingText((prev) => prev + text[i]);
    }

    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: text },
    ]);

    setStreamingText('');
    setLoading(false);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMessage },
    ]);

    setInput('');

    // simulate API response
    const fakeResponse =
      '...';

    simulateStream(fakeResponse);
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <h1 className="text-sm font-semibold">Nelson</h1>
        {loading && (
          <span className="text-xs text-white/40 animate-pulse">
            Typing...
          </span>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-white text-black'
                  : 'bg-white/10 border border-white/10'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Streaming bubble */}
        {loading && streamingText && (
          <div className="flex justify-start">
            <div className="max-w-[70%] px-4 py-3 rounded-2xl text-sm leading-relaxed bg-white/10 border border-white/10">
              {streamingText}
              <span className="inline-block w-1 h-4 ml-1 bg-white animate-pulse" />
            </div>
          </div>
        )}

        {/* Typing dots */}
        {loading && !streamingText && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl bg-white/10 border border-white/10 flex gap-1">
              {[0, 0.2, 0.4].map((d, i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/40"
                  style={{
                    animation: `bounce 1.2s infinite ${d}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-white/10 p-4 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm outline-none"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-white/90 transition"
        >
          Send
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
