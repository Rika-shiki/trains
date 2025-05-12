import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { saveChatMessage } from '../utils/supabase';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! I'm TRAInS assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');

    // Save to Supabase
    try {
      await saveChatMessage({
        message: newMessage,
        sender: 'user',
      });
    } catch (error) {
      console.error('Error saving message:', error);
    }

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for reaching out! Someone from our team will get back to you soon.",
        "That's a great question about our programs. We offer training in Full Stack, AI/ML, Cloud, and more.",
        "You can learn more about our revenue-sharing model in the Services section.",
        "Our team would be happy to discuss how TRAInS can help with your career goals.",
        "Would you like to schedule a call with one of our advisors?",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      
      // Save bot response to Supabase
      try {
        saveChatMessage({
          message: randomResponse,
          sender: 'bot',
        });
      } catch (error) {
        console.error('Error saving bot message:', error);
      }
    }, 1000);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center z-20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chatbot window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed z-30 ${
              isMinimized
                ? 'bottom-6 right-24 w-64 h-12'
                : 'bottom-6 right-6 w-80 sm:w-96 h-[70vh] max-h-[500px]'
            } bg-slate-800 rounded-lg shadow-xl overflow-hidden`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img 
                  src="https://i.ibb.co/wdR7h1L/trains-logo.png" 
                  alt="TRAInS Chat" 
                  className="h-6 w-auto"
                />
                <h3 className="text-white font-medium">TRAInS Assistant</h3>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/80 hover:text-white p-1"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-1"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat content */}
            {!isMinimized && (
              <>
                <div className="h-[calc(100%-110px)] overflow-y-auto p-4 bg-slate-900">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        className={`mb-4 flex ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`max-w-[85%] rounded-lg p-3 ${
                            message.sender === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-700 text-gray-200'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs text-right mt-1 opacity-70">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    <div ref={messagesEndRef} />
                  </AnimatePresence>
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="h-[62px] bg-slate-800 p-3 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-slate-700 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <motion.button
                      type="submit"
                      className="bg-blue-600 text-white p-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={!newMessage.trim()}
                    >
                      <Send size={18} />
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;