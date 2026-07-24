import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Send, X, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const suggestions = [
  'What courses does SRIT offer?',
  'How do I apply for admission?',
  'What is the placement rate?',
  'Tell me about hostel facilities',
];

const responses: Record<string, string> = {
  courses: 'SRIT offers B.Tech in CSE, ECE, EEE, Mechanical, and Civil Engineering, plus M.Tech and MBA programs. All are AICTE-approved and affiliated to JNTU Anantapur.',
  admission: 'You can apply online through our Admissions page. Admissions are based on EAMCET/ECET ranks for B.Tech and GATE/PGECET for M.Tech. Management quota seats are also available.',
  placement: 'SRIT has a 92% placement rate. Top recruiters include TCS, Infosys, Wipro, Amazon, and Microsoft. The highest package for 2025 was ₹24 LPA.',
  hostel: 'Yes! Separate hostels for boys and girls with WiFi, mess, gym, and 24/7 security. Hostel allocation is based on availability and distance.',
  fee: 'The fee structure varies by program and category. Government seats follow JNTU norms. Detailed fee information is available on the Admissions page.',
  scholarship: 'Merit-based, need-based, and government scholarships are available. Special scholarships exist for girl students and economically weaker sections.',
  default: 'I can help you with admissions, courses, placements, hostel, fees, scholarships, and more. What would you like to know about SRIT?',
};

function getResponse(input: string): string {
  const q = input.toLowerCase();
  if (q.includes('course') || q.includes('program') || q.includes('branch')) return responses.courses;
  if (q.includes('admission') || q.includes('apply') || q.includes('join')) return responses.admission;
  if (q.includes('placement') || q.includes('job') || q.includes('career')) return responses.placement;
  if (q.includes('hostel') || q.includes('stay') || q.includes('accommodation')) return responses.hostel;
  if (q.includes('fee') || q.includes('cost') || q.includes('price')) return responses.fee;
  if (q.includes('scholar') || q.includes('financial')) return responses.scholarship;
  return responses.default;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! I am SRIT Assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: getResponse(text) }]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center shadow-orange-lg pulse-orange transition-transform hover:scale-110"
        aria-label="AI Chatbot"
      >
        {open ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[500px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-neutral-800 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="font-semibold text-sm">SRIT Assistant</div>
              <div className="text-xs text-white/80 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400" /> Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 text-sm ${msg.role === 'user' ? 'chatbot-msg-user' : 'chatbot-msg-bot'}`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Suggestions */}
            {messages.length <= 2 && (
              <div className="pt-2 space-y-2">
                <div className="text-xs text-gray-400 px-1">Quick questions:</div>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full text-left text-xs px-3 py-2 rounded-lg bg-orange-50 dark:bg-neutral-800 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-neutral-700 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 dark:border-neutral-800 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send(input)}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 text-sm rounded-xl bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={() => send(input)}
              className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition shrink-0"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
