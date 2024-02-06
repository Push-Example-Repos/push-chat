// Importing necessary components and hooks
import { FC } from "react";

// Importing the MessageInput component
import MessageInput from "./MessageInput";

// Defining the SendMessageContainer component
const SendMessageContainer: FC = () => {
  // Returning the JSX for the SendMessageContainer component
  return (
    // Wrapping the MessageInput component in a div with some styling
    <div className="flex z-10 items-center bg-gray-50 pl-5 border-t border-gray-200 py-1 rounded-bl-xl">
      <MessageInput />
    </div>
  );
};

// Exporting the SendMessageContainer component
export default SendMessageContainer;
