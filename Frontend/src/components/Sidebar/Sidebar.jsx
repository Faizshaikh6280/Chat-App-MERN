import React from "react";
import Search from "./Search";
import Conversations from "./Conversations";
import Logout from "./Logout";
function Sidebar() {
  return (
    <div className="flex flex-col p-4 overflow-auto sm:h-[450px] md:h-[550px] border-r-[2px] border-slate-400 border-opacity-40 rounded-tl-lg rounded-bl-lg shrink-0">
      <Search />
      <div className="divider bg-slate-500 h-[1px] opacity-30"></div>
      <Conversations />
      {/* Logout */}
      <Logout />
    </div>
  );
}

export default Sidebar;
