'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  from: string;
  to?: string;
  content: string;
}

interface User {
  id: string;
  username: string;
  token?: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [isConnected, setIsConnected] = useState(false);
  const [sending, setSending] = useState(false);

  const socketRef = useRef<WebSocket | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

 
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/me',{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
        );
        if (!res.ok) return;

        const data = await res.json();
        setUser(data);

        const ws = new WebSocket(`ws://localhost:4000?token=${localStorage.getItem('token')}`);
        socketRef.current = ws;

        ws.onopen = () => {
          console.log('WS connected');
          setIsConnected(true);
        };

        ws.onmessage = (event) => {
          const msg = JSON.parse(event.data);

          setMessages((prev) => [...prev, msg]);
        };

        ws.onclose = () => {
          console.log('WS disconnected');
          setIsConnected(false);
        };
      } catch (err) {
        console.log('Init error', err);
      }
    };

    init();

    return () => {
      socketRef.current?.close();
    };
  }, []);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/users');
        if (!res.ok) return;

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.log('Users fetch error');
      }
    };

    fetchUsers();
  }, []);


  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

 
  useEffect(() => {
    setMessages([]);
  }, [selectedUser]);


  const handleSend = () => {
    if (!input.trim()) return;

    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
      console.log('Socket not ready');
      return;
    }

    if (!selectedUser || !user) return;

    setSending(true);

    const msg = {
      type: 'message',
      to: selectedUser.id,
      content: input,
    };

    socketRef.current.send(JSON.stringify(msg));
    setMessages((prev) => [
      ...prev,
      { from: user.id, to: selectedUser.id, content: input },
    ]);

    setInput('');
    setSending(false);
  };

  const getInitial = (name?: string) =>
    name ? name.charAt(0).toUpperCase() : '?';

  const filteredMessages = messages.filter(
    (msg) =>
      selectedUser &&
      user &&
      ((msg.from === user.id && msg.to === selectedUser.id) ||
        (msg.from === selectedUser.id && msg.to === user.id))
  );

  return (
    <div className="h-screen bg-black text-white flex font-sans">

      {/* LEFT: USERS */}
      <div className="w-1/4 border-r border-white/10 p-4 space-y-2">
        {users.map((u) => (
          <div
            key={u.id}
            onClick={() => setSelectedUser(u)}
            className="flex items-center gap-3 p-2 cursor-pointer hover:bg-white/10 rounded"
          >
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-semibold">
              {getInitial(u.username)}
            </div>
            <span>{u.username}</span>
          </div>
        ))}
      </div>

     
      <div className="flex-1 flex flex-col">
        {selectedUser ? (
          <>
    
            <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-semibold">
                  {getInitial(selectedUser.username)}
                </div>
                <div>
                  <h1 className="text-sm font-semibold">
                    {selectedUser.username}
                  </h1>
                  <span className="text-xs text-white/40">
                    {isConnected ? 'Online' : 'Connecting...'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              {filteredMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === user?.id
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm ${
                      msg.from === user?.id
                        ? 'bg-white text-black'
                        : 'bg-white/10'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-white/10 p-4 flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />

              <button
                onClick={handleSend}
                disabled={!isConnected || sending}
                className="bg-white text-black px-4 py-2 rounded-full text-sm disabled:opacity-40"
              >
                {sending ? 'Sending...' : 'Send'}
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-white/40">
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
}