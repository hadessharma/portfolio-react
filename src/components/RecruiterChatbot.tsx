import React, { useMemo, useState } from "react";
import {
  RecruiterRole,
  recruiterRoleFaqs,
  recruiterRoles,
  type RecruiterQaItem,
} from "./data/recruiterQaData";

type Sender = "bot" | "user";

interface ChatMessage {
  id: number;
  sender: Sender;
  text: string;
}

const tokenize = (value: string): string[] =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1);

const scoreMatch = (query: string, item: RecruiterQaItem): number => {
  const queryTokens = new Set(tokenize(query));
  const corpus = `${item.question} ${item.answer} ${item.keywords.join(" ")}`.toLowerCase();

  let score = 0;
  item.keywords.forEach((keyword) => {
    if (corpus.includes(keyword.toLowerCase()) && query.toLowerCase().includes(keyword.toLowerCase())) {
      score += 4;
    }
  });

  queryTokens.forEach((token) => {
    if (corpus.includes(token)) score += 1;
  });

  return score;
};

const getBestAnswer = (query: string, role: RecruiterRole): string => {
  const roleFaq = recruiterRoleFaqs[role].faqs;
  const generalFaq = recruiterRoleFaqs.general.faqs;
  const candidates = [...roleFaq, ...generalFaq];

  let bestScore = 0;
  let bestItem: RecruiterQaItem | null = null;

  candidates.forEach((item) => {
    const score = scoreMatch(query, item);
    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  });

  if (!bestItem || bestScore < 2) {
    return `I do not have a precise answer for that yet. Try asking about ${recruiterRoleFaqs[role].label.toLowerCase()} experience, projects, skills, or education.`;
  }

  return bestItem.answer;
};

const RecruiterChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<RecruiterRole>("general");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "bot",
      text: recruiterRoleFaqs.general.intro,
    },
  ]);

  const suggestedQuestions = useMemo(
    () => recruiterRoleFaqs[selectedRole].faqs.slice(0, 3).map((item) => item.question),
    [selectedRole],
  );

  const pushBotMessage = (text: string) => {
    setMessages((prev) => [...prev, { id: prev.length + 1, sender: "bot", text }]);
  };

  const handleRoleChange = (role: RecruiterRole) => {
    setSelectedRole(role);
    pushBotMessage(`Switched to ${recruiterRoleFaqs[role].label} mode. ${recruiterRoleFaqs[role].intro}`);
  };

  const handleAsk = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { id: prev.length + 1, sender: "user", text: trimmed }]);
    const answer = getBestAnswer(trimmed, selectedRole);
    pushBotMessage(answer);
    setInput("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[60] rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-cyan-500"
      >
        {isOpen ? "Close Chat" : "Ask Recruiter Bot"}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[60] h-[70vh] w-[92vw] max-w-md overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl md:right-6">
          <div className="border-b border-gray-700 bg-gray-800/80 px-4 py-3">
            <h3 className="text-sm font-semibold text-gray-100">Recruiter Q&A Assistant</h3>
            <p className="mt-1 text-xs text-gray-400">
              Role-aware answers using curated profile content.
            </p>
          </div>

          <div className="border-b border-gray-700 px-3 py-3">
            <label htmlFor="recruiter-role" className="mb-2 block text-xs text-gray-400">
              Recruiter focus
            </label>
            <select
              id="recruiter-role"
              value={selectedRole}
              onChange={(e) => handleRoleChange(e.target.value as RecruiterRole)}
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-gray-100 outline-none focus:border-cyan-500"
            >
              {recruiterRoles.map((role) => (
                <option key={role} value={role}>
                  {recruiterRoleFaqs[role].label}
                </option>
              ))}
            </select>
          </div>

          <div className="h-[45vh] space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[90%] rounded-xl px-3 py-2 text-sm ${
                  message.sender === "user"
                    ? "ml-auto bg-cyan-600/90 text-white"
                    : "bg-gray-800 text-gray-200"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 px-3 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => handleAsk(question)}
                  className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
                >
                  {question}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAsk(input);
                }}
                placeholder="Ask about projects, skills, role fit..."
                className="flex-1 rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-gray-100 outline-none focus:border-cyan-500"
              />
              <button
                type="button"
                onClick={() => handleAsk(input)}
                className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-cyan-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecruiterChatbot;
