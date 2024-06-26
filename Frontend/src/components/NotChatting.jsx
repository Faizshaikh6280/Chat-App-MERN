import React from "react";
import { BsChatDotsFill } from "react-icons/bs";
function NotChatting() {
  return (
    <div className="md:min-w-[450px] text-slate-50 flex items-center justify-center text-center flex-col gap-4">
      <p className="text-2xl font-medium">
        Welcom Faiz Alam 👋 <br />
        Select a chat to start messaging
      </p>
      <div className="text-4xl">
        <BsChatDotsFill />
      </div>
    </div>
  );
}

export default NotChatting;
