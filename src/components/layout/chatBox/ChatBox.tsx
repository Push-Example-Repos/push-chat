// Importing necessary components
import Chat from "./Chat";
import ChatHeader from "./ChatHeader";
import SendMessageContainer from "./message/SendMessageContainer";

// Defining the ChatBox component
const ChatBox = () => {
  return (
    // Wrapping the component in a div with some styling
    <div className="flex flex-col flex-grow flex-1 bg-white rounded-l-xl justify-between border border-gray-300">
      {/* Including the ChatHeader component */}
      <ChatHeader />

      {/* Including the Chat component inside a div with some styling */}
      <div className="overflow-y-auto hide-scroll relative flex-grow">
        <Chat />
      </div>

      {/* Including the SendMessageContainer component */}
      <SendMessageContainer />
    </div>
  );
};

// Exporting the ChatBox component
export default ChatBox;
