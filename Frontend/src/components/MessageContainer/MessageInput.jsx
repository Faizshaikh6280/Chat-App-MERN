import { FaPaperPlane } from "react-icons/fa6";
function MessageInput() {
  return (
    <div className="p-4">
      <label className="input outline-none border-none focus:outline-none focus:border-none flex items-center gap-2 cursor-pointer">
        <input type="text" className="grow" placeholder="Send Message" />
        <FaPaperPlane />
      </label>
    </div>
  );
}

export default MessageInput;
