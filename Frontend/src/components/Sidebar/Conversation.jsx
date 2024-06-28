import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { truncateString } from "../../utils/string.js";
import { useSocketContext } from "../../contexts/SocketContext.jsx";

function Conversation({ conversation, emoji, lastIndx, lastMessage }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const status = "online";
  const { onlineUsers } = useSocketContext();
  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <div
      className={`flex gap-2 items-center p-2 ${
        !lastIndx && " border-b-[1px] border-slate-500 border-opacity-45"
      }  hover:bg-sky-500 transition ${isSelected && "bg-sky-500"} select-none`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className={`avatar ${isOnline ? "online" : ""} w-12`}>
        <div className="w-12 rounded-full">
          <img src={conversation.profilePic} />
        </div>
      </div>
      <div>
        <p className="text-slate-100">{conversation.fullname}</p>
      </div>
      <div className="ml-auto text-sm text-slate-50">
        <p>
          {lastMessage[1] && <span>You: </span>}{" "}
          {(lastMessage[0] && truncateString(lastMessage[0], 12)) || emoji}
        </p>
      </div>
    </div>
  );
}

export default Conversation;
