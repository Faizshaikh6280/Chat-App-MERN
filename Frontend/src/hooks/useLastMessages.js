import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";

export const useLastMessages = function () {
  const [loading, setLoading] = useState();
  const [lastMessages, setLastmessages] = useState([]);
  const { messages } = useConversation();

  const getLastMessages = async function () {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/last-messages`);
      const data = await res.json();

      if (data.status === "success") {
        setLastmessages(data.lastMessages);
      } else {
        throw data;
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    function () {
      getLastMessages();
    },
    [messages]
  );

  return { loading, lastMessages };
};
