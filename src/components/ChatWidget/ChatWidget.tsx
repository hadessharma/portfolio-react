import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { FiX, FiSend } from "react-icons/fi";
import { LuBot } from "react-icons/lu";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial Greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now().toString(),
          text: "Hi, I'm Deep's Virtual Assistant. How can I help you today?",
          sender: "bot",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const suggestedQuestions = [
    "What is Deep's tech stack?",
    "Can you tell me about his recent projects?",
    "What is his experience with AWS?",
    "How can I contact him?"
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = async (e?: React.FormEvent, textOverride?: string) => {
    e?.preventDefault();
    const textToSend = textOverride !== undefined ? textOverride : inputText;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    if (textOverride === undefined) {
      setInputText("");
    }
    setIsLoading(true);

    const botMessageId = (Date.now() + 1).toString();
    
    // Add an empty bot message that we'll fill with the stream
    setMessages((prev) => [
      ...prev,
      { id: botMessageId, text: "", sender: "bot" },
    ]);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000/chat";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to the assistant.");
      }

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        setIsLoading(false);
        
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId
              ? { ...msg, text: msg.text + chunk }
              : msg
          )
        );
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? { ...msg, text: "Sorry, I am currently unavailable. Please try again later." }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[450px] md:w-[500px] h-[550px] max-h-[80vh] flex flex-col bg-paper-surface border border-paper-edge rounded-2xl shadow-paper-soft overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-paper-accent text-white">
            <div>
              <h3 className="font-semibold text-lg">Virtual Assistant</h3>
              <p className="text-xs opacity-90">Deep's AI Helper</p>
            </div>
            <button
              onClick={handleToggle}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 themed-scrollbar">
            {messages.map((msg) => {
              if (msg.sender === "bot" && !msg.text && isLoading) return null;
              
              return (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                      msg.sender === "user"
                        ? "bg-paper-accent text-white rounded-tr-sm"
                        : "bg-paper-layer text-paper-ink border border-paper-edge rounded-tl-sm"
                    }`}
                  >
                    {msg.sender === "bot" ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-2 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-600 whitespace-pre-wrap">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">{msg.text}</div>
                    )}
                  </div>
                </div>
              );
            })}
            
            {!isLoading && (
              <div className="flex flex-wrap gap-2 mt-2">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInputText("");
                      handleSend(undefined, q);
                    }}
                    className="text-xs bg-paper-surface border border-paper-accent/30 text-paper-accent px-3 py-1.5 rounded-full hover:bg-paper-accent hover:text-white transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-paper-layer border border-paper-edge rounded-2xl rounded-tl-sm p-4 flex gap-1 items-center">
                  <div className="w-2 h-2 rounded-full bg-paper-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-paper-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-paper-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-paper-edge bg-paper-surface">
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full bg-paper-base border border-paper-edge text-paper-ink focus:outline-none focus:border-paper-accent focus:ring-1 focus:ring-paper-accent/50 transition-all text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-2.5 rounded-full bg-paper-accent text-white disabled:opacity-50 hover:opacity-90 transition-opacity flex-shrink-0"
              >
                <FiSend size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className={`p-3 pr-5 rounded-2xl shadow-paper bg-paper-accent text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-3 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
      >
        <div className="bg-white/20 p-2 rounded-xl">
          <LuBot size={24} />
        </div>
        <div className="flex flex-col items-start text-left">
          <span className="font-semibold text-sm leading-tight">Deep's AI Assistant</span>
          <span className="text-xs text-white/90 mt-0.5">Ask about Deep!</span>
        </div>
      </button>
    </div>
  );
};

export default ChatWidget;
