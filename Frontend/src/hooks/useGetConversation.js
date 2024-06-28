import { useEffect, useState } from "react";

function useGetConversation() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const getUsers = async function () {
    // call to api
    setLoading(true);
    try {
      const res = await fetch(`/api/users`);
      const data = await res.json();
      // update in local storage
      if (data.status === "success") {
        setConversations(data.users);
      } else {
        // it's an error
        throw data;
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { loading, conversations };
}

export default useGetConversation;
