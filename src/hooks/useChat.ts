import { useState, useEffect } from "react";
import { HISTORY_CONTEXT } from "~/data/datas";

const DEFAULT_SUGGESTIONS = [
  "Apa itu Teman Coding?",
  "Cara melakukan order",
  "Ada layanan apa saja?",
];

type ChatMessage = {
  from: "user" | "bot";
  text: string;
};

const useChat = () => {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const greetingMessage: ChatMessage = {
      from: "bot",
      text: "Halo! Aku Teman Coding Assistant. Ada yang bisa aku bantu?",
    };
    setMessages([greetingMessage]);
    setSuggestions(DEFAULT_SUGGESTIONS);
  }, []);

  const handleSend = async (message?: string) => {
    const userMessage = message || text.trim();
    if (!userMessage) return;

    const userChat: ChatMessage = { from: "user", text: userMessage };
    const updatedMessages = [...messages, userChat];
    setMessages(updatedMessages);
    setText("");
    setSuggestions([]);
    setIsLoading(true);

    try {
      const { reply, suggestedQuestions } = await getReplyFromLuminai(
        userMessage
      );
      const botChat: ChatMessage = { from: "bot", text: reply };
      setMessages([...updatedMessages, botChat]);
      setSuggestions(suggestedQuestions);
    } catch (err) {
      const botChat: ChatMessage = {
        from: "bot",
        text: "Maaf, terjadi kesalahan saat menghubungi server.",
      };
      setMessages([...updatedMessages, botChat]);
      setSuggestions(DEFAULT_SUGGESTIONS);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getReplyFromLuminai = async (
    msg: string
  ): Promise<{ reply: string; suggestedQuestions: string[] }> => {
    const res = await fetch("https://luminai.my.id/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        content: `${HISTORY_CONTEXT}\n\nUser Question: ${msg}`,
        user: "user-574249",
        cName: "luminai",
        cID: "luminai",
      }),
    });

    const data = await res.json();
    let reply = "Maaf, saya belum bisa menjawab pertanyaan itu.";
    let suggestedQuestions = DEFAULT_SUGGESTIONS;

    try {
      const parsed = JSON.parse(data.result);
      reply = parsed.result || reply;
      suggestedQuestions = parsed.suggestions || suggestedQuestions;
    } catch (err) {
      reply = data.result || reply;
      console.log(err);
    }

    return { reply, suggestedQuestions };
  };

  return {
    text,
    setText,
    messages,
    suggestions,
    handleSend,
    isLoading,
  };
};

export default useChat;
