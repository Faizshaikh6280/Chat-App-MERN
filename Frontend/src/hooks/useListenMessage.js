import { useEffect } from "react";
import { useSocketContext } from "../contexts/SocketContext";
import useConversation from "../zustand/useConversation.js";
import notificicationSound from "../assets/sounds/notification.mp3";

function useListenMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(
    function () {
      socket?.on("newMessage", (newMessage) => {
        newMessage.shouldShake = true;
        const sound = new Audio(notificicationSound);
        sound.play();
        setMessages([...messages, newMessage]);
      });

      return () => socket?.off("newMessge");
    },
    [socket, messages, setMessages]
  );
}

export default useListenMessage;
