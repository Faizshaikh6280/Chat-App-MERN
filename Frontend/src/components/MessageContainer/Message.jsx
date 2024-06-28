import { useAuthContext } from "../../contexts/AuthContext";
import { extractTime } from "../../utils/date-and-time.js";
import useConversation from "../../zustand/useConversation.js";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassname = fromMe ? "chat-end" : "chat-start";
  const profileSrc = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;

  return (
    <div className={`chat ${chatClassname}`}>
      <div className="chat-image avatar">
        <div className="w-8 rounded-full">
          <img alt={`${authUser.fullname} profile picture`} src={profileSrc} />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50">
          {extractTime(message.createdAt)}
        </time>
      </div>
      <div
        className={`chat-bubble ${
          fromMe ? "bg-sky-500 text-slate-100" : ""
        } max-w-[450px]`}
      >
        {message.message}
      </div>
      {/* <div className="chat-footer opacity-50">Delivered</div> */}
    </div>
  );
}

export default Message;
/*
 <div className={`chat chat-${messageDirection}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div
        className={`chat-bubble ${
          messageDirection === "end" ? "bg-sky-500 text-slate-100" : ""
        } max-w-[450px]`}
      >
        You were the Chosen One!
      </div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>  
 */
