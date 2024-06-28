import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import toast from "react-hot-toast";

export const useGetMessages = function () {
  const [loading, setLoading] = useState();
  const { messages, setMessages, selectedConversation } = useConversation();
  const getMessages = async function () {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/${selectedConversation._id}`);
      const data = await res.json();

      if (data.status === "success") {
        setMessages(data.messages);
      } else {
        throw data;
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessages();
  }, [selectedConversation]);

  return { loading, messages };
};
