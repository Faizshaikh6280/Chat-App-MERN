import React from "react";

function Message() {
  const messageDirection = "end";
  return (
    <div className="p-2 w-full">
      <div className={`chat chat-${messageDirection} w-full`}>
        <div className="chat-image avatar">
          <div className="w-8 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble h-6">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
}

export default Message;
