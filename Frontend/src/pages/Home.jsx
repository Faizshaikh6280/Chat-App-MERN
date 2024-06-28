import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MessageContainer from "../components/MessageContainer/MessageContainer";
import NotChatting from "../components/NotChatting";
import useConversation from "../zustand/useConversation.js";

const Home = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className="flex  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      {selectedConversation ? <MessageContainer /> : <NotChatting />}
    </div>
  );
};

export default Home;
