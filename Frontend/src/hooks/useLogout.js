import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

export const useLogout = function () {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = function () {
    setLoading(true);
    // remove user from local storage
    localStorage.setItem("chat-user", null);
    // set null to Auth Context
    setAuthUser(null);
  };
  return { loading, logout };
};
