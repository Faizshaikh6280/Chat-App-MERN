import React from "react";
import Search from "./Search";
import Conversations from "./Conversations";
import Logout from "./Logout";
function Sidebar() {
  return (
    <div className="flex flex-col p-4 overflow-auto sm:h-[450px] md:h-[550px] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-r-[2px] border-slate-400 border-opacity-40 rounded-tl-lg rounded-bl-lg">
      <Search />
      <div className="divider bg-slate-500 h-[1px] opacity-30"></div>
      <Conversations />
      {/* Logout */}
      <Logout />
    </div>
  );
}

export default Sidebar;
