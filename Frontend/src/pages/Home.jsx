import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MessageContainer from "../components/MessageContainer/MessageContainer";
import NotChatting from "../components/NotChatting";

const Home = () => {
  const isChating = true;
  return (
    <div className="flex  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      {isChating ? <MessageContainer /> : <NotChatting />}
    </div>
  );
};

export default Home;
