import React from "react";

function Conversation({ isOpen }) {
  const status = "online";
  return (
    <div
      className={`flex gap-2 items-center p-2 border-b-[1px] border-slate-500 border-opacity-30 ${
        isOpen ? "bg-sky-500" : ""
      }`}
    >
      <div className={`avatar ${status} w-12`}>
        <div className="w-12 rounded-full">
          <img src="https://avatar.iran.liara.run/public/" />
        </div>
      </div>
      <div>
        <p className="text-slate-100">Faiz Alam</p>
      </div>
      <div className="ml-auto text-2xl">❤️</div>
    </div>
  );
}

export default Conversation;
