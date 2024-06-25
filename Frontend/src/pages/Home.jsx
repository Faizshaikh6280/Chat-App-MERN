import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MessageContainer from "../components/MessageContainer/MessageContainer";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
