import React from "react";
import Header from "./Header";
import Message from "./Message";
import MessageInput from "./MessageInput";

function MessageContainer() {
  return (
    <div className="flex flex-col overflow-auto sm:h-[450px] md:h-[550px] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-tr-lg rounded-br-lg min-w-[550px] overflow-y-auto">
      <Header />
      <Message />
      <MessageInput />
    </div>
  );
}

export default MessageContainer;
