import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../contexts/SocketContext.jsx";

function Header() {
  const status = "online";
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(selectedConversation._id);

  return (
    <div className="p-3 flex gap-2 items-center bg-slate-500 ">
      <div className={`avatar ${isOnline && "online"} w-8`}>
        <div className="w-24 rounded-full">
          <img src={selectedConversation.profilePic} />
        </div>
      </div>
      <p className="text-sm text-slate-200 font-semibold">
        {selectedConversation.fullname}
      </p>
    </div>
  );
}

export default Header;
