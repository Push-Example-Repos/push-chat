// Use client directive
"use client";

// Importing necessary hooks and components from react, next/image, react-hot-toast, react-redux, and local files
import Image from "next/image";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Importing the setMessages action from the pushSlice
import { setMessages } from "@/redux/slice/pushSlice";

// Importing the MessageWithDate component
import MessageWithDate from "./message/MessageWithDate";

// Defining the Message interface
interface Message {
  fromDID: string;
  timestamp: any;
  messageContent: string;
  messageType: string;
  chatId: string;
}

// Defining the Chat component
const Chat = () => {
  // Using the useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Defining a state for loading
  const [loading, setLoading] = useState(true);

  // Using the useSelector hook to get the pushSign, messages, and currentContact from the Redux store
  const pushSign = useSelector((state: any) => state.push.pushSign);
  const messageHistory = useSelector((state: any) => state.push.messages);
  const currentContact = useSelector((state: any) => state.push.currentContact);

  // Defining an asynchronous function to initialize the chat
  const initializeChat = async () => {
    try {
      // Fetching the chat history for the current contact
      const pastMessages: any = await pushSign.chat.history(
        currentContact.did.split(":")[1]
      );

      // Mapping over the past messages to create a new array of Message objects
      const filteredMessages: Message[] = pastMessages.map(
        ({
          fromDID,
          timestamp,
          messageContent,
          messageType,
          chatId,
        }: Message) => ({
          chatId,
          fromDID,
          timestamp,
          messageContent,
          messageType,
        })
      );

      // Dispatching the setMessages action with the reversed array of filtered messages
      dispatch(setMessages([...filteredMessages].reverse()));
      // Setting the loading state to false
      setLoading(false);
    } catch (err) {
      // Displaying an error toast message if there's an error
      toast.error("Error fetching chat history");
    }
  };

  // Using the useEffect hook to call the initializeChat function when the currentContact or pushSign changes
  useEffect(() => {
    if (currentContact && pushSign) {
      // Setting the loading state to true
      setLoading(true);
      // Calling the initializeChat function
      initializeChat();
    }
  }, [currentContact, pushSign]);

  // Returning the JSX for the Chat component
  return (
    // Wrapping the component in a div with some styling
    <div className="flex absolute top-0 left-0 overflow-y-auto w-full h-full flex-grow flex-1 flex-col-reverse hide-scroll px-3 pb-2">
      {loading ? (
        // Displaying a loading spinner if the loading state is true
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-fit mx-auto">
          <Image
            src="/assets/loading.svg"
            alt="Loading spinner"
            width={24}
            height={24}
            className="animate-spin opacity-60"
          />
        </div>
      ) : messageHistory.length === 0 ? (
        // Displaying a message if there are no messages in the messageHistory
        <div className="flex text-primary-white/60 py-2 px-6 bg-gray-100 rounded-lg mt-2 items-start">
          <p className="text-sm text-center flex mx-auto">
            Messages are end-to-end encrypted. Only users in this chat can view
            or listen to them.
          </p>
        </div>
      ) : (
        // Displaying the messages in the messageHistory
        <div className="flex flex-col gap-1 z-10">
          {messageHistory.map(
            (message: Message, index: number, arr: Message[]) => (
              <MessageWithDate
                key={index}
                index={index}
                message={message}
                nextMessage={arr[index + 1]}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

// Exporting the Chat component
export default Chat;
