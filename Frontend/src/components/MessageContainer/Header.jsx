import React from "react";

function Header() {
  return (
    <div className="p-3 flex gap-2 items-center bg-slate-500 ">
      <div className="w-8 rounded-full">
        <img src="https://avatar.iran.liara.run/public/" />
      </div>
      <p className="text-sm text-slate-100">Mohd Awais</p>
    </div>
  );
}

export default Header;
