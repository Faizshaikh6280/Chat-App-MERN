import { useState } from "react";
import useConversation from "../zustand/useConversation";

export const useSendMessage = function () {
  const [loading, setLoading] = useState();
  const {
    messages,
    setMessages,
    selectedConversation,
    lastMessages,
    setLastmessages,
  } = useConversation();
  const sendMessage = async function (message) {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.status === "success") {
        setMessages([...messages, data.newMessage]);
      } else {
        throw data;
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};
