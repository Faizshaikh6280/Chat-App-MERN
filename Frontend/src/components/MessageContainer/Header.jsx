import React from "react";

function Header() {
  const status = "online";
  return (
    <div className="p-3 flex gap-2 items-center bg-slate-500 ">
      <div className={`avatar ${status} w-8`}>
        <div className="w-24 rounded-full">
          <img src="https://avatar.iran.liara.run/public/" />
        </div>
      </div>
      <p className="text-sm text-slate-200 font-bold">Mohd Awais</p>
    </div>
  );
}

export default Header;
