import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { useSendMessage } from "../../hooks/useSendMessage";
import toast from "react-hot-toast";
function MessageInput() {
  const [message, setMessage] = useState();
  const { loading, sendMessage } = useSendMessage();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!message) return;
      await sendMessage(message);
      setMessage("");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="px-4 mt-2">
      <form onSubmit={handleSubmit}>
        <label className="input outline-none border-none focus:outline-none focus:border-none flex items-center gap-2 cursor-pointer mt-auto">
          <input
            type="text"
            className="grow"
            placeholder="Send Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <FaPaperPlane />
            )}
          </button>
        </label>
      </form>
    </div>
  );
}

export default MessageInput;
