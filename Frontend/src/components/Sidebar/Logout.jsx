import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../hooks/useLogout.js";
function Logout() {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto text-2xl text-slate-100 cursor-pointer">
      <button disabled={loading} onClick={logout}>
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <BiLogOut />
        )}
      </button>
    </div>
  );
}

export default Logout;
