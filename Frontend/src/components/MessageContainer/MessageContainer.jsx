import Header from "./Header";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";

function MessageContainer() {
  const { selectedConversation } = useConversation();
  return (
    <div className="flex flex-col overflow-auto sm:h-[500px] md:h-[600px]  rounded-tr-lg rounded-br-lg md:min-w-[450px] overflow-y-auto md:min-w-[500px]">
      <Header />
      <Messages />
      <MessageInput key={selectedConversation._id} />
    </div>
  );
}

export default MessageContainer;
