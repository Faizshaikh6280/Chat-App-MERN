import React from "react";
import useConversation from "../../zustand/useConversation.js";

function Header() {
  const status = "online";
  const { selectedConversation } = useConversation();

  return (
    <div className="p-3 flex gap-2 items-center bg-slate-500 ">
      <div className={`avatar ${status} w-8`}>
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
