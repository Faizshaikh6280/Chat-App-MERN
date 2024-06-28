import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";

import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = function ({ children }) {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { authUser } = useAuthContext();

  useEffect(
    function () {
      if (authUser) {
        const socket = io("http://localhost:5000", {
          query: {
            userId: authUser._id,
          },
        });
        setSocket(socket);

        // socket.on() is used to listen events, can be used on both clients and server side.
        socket.on("getOnlineUsers", (users) => {
          setOnlineUsers(users);
        });
        // console.log(`From client at ${new Date()}`);
        return () => socket.close();
      } else {
        if (socket) {
          socket.close();
          setSocket(null);
        }
      }
    },
    [authUser]
  );

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export function useSocketContext() {
  const context = useContext(SocketContext);

  if (!context) throw new Error("Socket Context is used outside of Provier");

  return context;
}
