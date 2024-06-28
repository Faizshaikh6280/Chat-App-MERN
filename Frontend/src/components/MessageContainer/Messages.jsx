import { useEffect, useRef } from "react";
import { useGetMessages } from "../../hooks/useGetMessages.js";
import ChatLoadingSkeleton from "../Skeletons/ChatLoadingSkeleton.jsx";
import Message from "./Message";
import useConversation from "../../zustand/useConversation.js";
import useListenMessage from "../../hooks/useListenMessage.js";

function Messages() {
  const { loading, messages } = useGetMessages();
  const lastMesgRef = useRef();
  useListenMessage();
  useEffect(() => {
    setTimeout(() => {
      lastMesgRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 0);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && (
        <>
          <ChatLoadingSkeleton />
          <ChatLoadingSkeleton />
          <ChatLoadingSkeleton />
          <ChatLoadingSkeleton />
          <ChatLoadingSkeleton />
          <ChatLoadingSkeleton />
        </>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((msg, indx) => (
          <div key={indx} ref={lastMesgRef}>
            {" "}
            <Message message={msg} />
          </div>
        ))}

      {!loading && messages.length <= 0 && (
        <p className="text-center py-4 text-lg font-medium text-slate-200">
          Start the conversation by sending message😃
        </p>
      )}
    </div>
  );
}

export default Messages;
