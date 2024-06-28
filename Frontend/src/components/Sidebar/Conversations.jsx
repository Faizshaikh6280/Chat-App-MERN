import useGetConversation from "../../hooks/useGetConversation.js";
import Conversation from "./Conversation";
import { useLastMessages } from "../../hooks/useLastMessages.js";
import useConversation from "../../zustand/useConversation.js";

const emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "🤣",
  "😂",
  "🙂",
  "🙃",
  "😉",
  "😊",
  "😇",
  "🥰",
  "😍",
  "🤩",
  "😘",
  "😗",
  "😚",
  "😙",
  "😋",
  "😛",
  "😜",
  "🤪",
  "😝",
  "🤑",
  "🤗",
  "🤭",
  "🤫",
  "🤔",
  "🤐",
  "🤨",
  "😐",
  "😑",
  "😶",
  "😏",
  "😒",
  "🙄",
  "😬",
  "🤥",
  "😌",
  "😔",
  "😪",
  "🤤",
  "😴",
  "😷",
  "🤒",
  "🤕",
  "🤢",
  "🤮",
];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

function Conversations() {
  const { loading, conversations } = useGetConversation();
  const { lastMessages } = useLastMessages();

  return (
    <div>
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <>
          {conversations.map((conversation, indx, arr) => (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastIndx={indx === arr.length - 1}
              lastMessage={lastMessages.length > 0 && lastMessages[indx]}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Conversations;
