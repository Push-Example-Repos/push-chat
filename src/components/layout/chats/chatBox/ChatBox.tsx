import Chat from "./Chat";
import ChatHeader from "./ChatHeader";
import SendMessageContainer from "./message/SendMessageContainer";

const ChatBox = () => {
  return (
    <div className="flex flex-col flex-grow flex-1 bg-white rounded-l-xl justify-between border border-gray-300">
      <ChatHeader />

      <div className="overflow-y-auto hide-scroll relative flex-grow">
        <Chat />
      </div>

      <SendMessageContainer />
    </div>
  );
};

export default ChatBox;
