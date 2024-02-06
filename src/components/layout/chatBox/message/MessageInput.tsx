// Use client directive
"use client";

// Importing necessary components and hooks
import {
  ArrowPathIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState, MouseEvent, KeyboardEvent } from "react";

// Defining the MessageInput component
const MessageInput = () => {
  // Using the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Defining the message and disabled states
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  // Using the useSelector hook to get the pushSign and currentContact from the Redux store
  const pushSign = useSelector((state: any) => state.push.pushSign);
  const currentContact = useSelector((state: any) => state.push.currentContact);

  // Defining the sendMessage function
  const sendMessage = async (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLTextAreaElement>
  ) => {
    // Preventing the default event behavior
    e.preventDefault();

    // Returning early if disabled is true or if pushSign or message is falsy
    if (disabled || !pushSign || !message.trim()) return;

    try {
      // Disabling the input
      setDisabled(true);

      // Sending the message
      await pushSign.chat.send(currentContact.did.split(":")[1], {
        content: message,
        type: "Text",
      });

      // Clearing the input and enabling it
      setMessage("");
      setDisabled(false);
    } catch (err) {
      // Displaying an error toast if an error occurs
      toast.error("Error sending message");
    }
  };

  // Defining a ref for the textarea
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Using the useEffect hook to adjust the height of the textarea based on the message
  useEffect(() => {
    if (textareaRef.current && textareaRef.current.scrollHeight < 224) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  // Returning the JSX for the MessageInput component
  return (
    <>
      {/* Wrapping the form in a fragment */}
      <form className="w-full flex justify-between items-center pr-2 gap-2 bg-gray-50">
        {/* Displaying the ChatBubbleLeftIcon */}
        <ChatBubbleLeftIcon className="w-5 h-5" />

        {/* Defining the textarea for the message input */}
        <textarea
          ref={textareaRef}
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={disabled}
          rows={1}
          className="bg-transparent flex-1 pl-1 text-black focus:outline-none text-primary-white placeholder:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
          style={{ resize: "none", overflow: "hidden" }}
          onKeyDown={(e) => {
            // Sending the message when the Enter key is pressed without the Shift key
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage(e);
            }
          }}
        />

        {/* Defining the submit button for the form */}
        <Button
          placeholder=""
          type="submit"
          className={`bg-gradient-push h-fit rounded-lg p-2`}
          onClick={sendMessage}
          disabled={disabled}
        >
          {/* Displaying the ArrowPathIcon if disabled is true, otherwise displaying the PaperAirplaneIcon */}
          {disabled ? (
            <ArrowPathIcon className="h-4 w-4 text-white animate-spin" />
          ) : (
            <PaperAirplaneIcon className="h-5 w-5 text-white pl-px" />
          )}
        </Button>
      </form>
    </>
  );
};

// Exporting the MessageInput component
export default MessageInput;
