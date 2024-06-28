import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user"))
  );

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = function () {
  const context = useContext(AuthContext);
  if (!context) throw Error("Auth context is used outside of provider");
  return context;
};
