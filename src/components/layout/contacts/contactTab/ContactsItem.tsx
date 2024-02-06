// This directive is used to specify the client-side execution context
"use client";

// Importing necessary components and hooks
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

// Importing the action to set the current contact
import { setCurrentContact } from "@/redux/slice/pushSlice";

// Defining the props for the ContactsItem component
interface IContactsItem {
  chat: any;
}

// Defining the ContactsItem component
const ContactsItem: FC<IContactsItem> = ({ chat }) => {
  // Using the useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Using the useSelector hook to get the pushSign from the state
  const pushSign = useSelector((state: any) => state.push.pushSign);

  // Defining the handleClick function that dispatches the action to set the current contact
  const handleClick = () => {
    dispatch(setCurrentContact(chat));
  };

  // If pushSign or chat doesn't exist, the component doesn't render anything
  if (!pushSign || !chat) return;

  // Extracting the public key from the chat's DID
  const pubKey = chat.did.split(":")[1];

  // Rendering the component
  return (
    <li
      className="flex justify-between items-center border-b borde-gray-200 px-2 hover:bg-gray-50 cursor-pointer rounded-lg"
      onClick={handleClick}
    >
      {/* Render the profile picture. */}
      <div className="flex items-center my-2">
        <div className="w-10 h-10 bg-red-200 rounded-full mr-3 overflow-hidden">
          <Image
            src={chat.profilePicture}
            alt="profile picture"
            width={40}
            height={40}
          />
        </div>

        {/* Render Contact Address and Last message.  */}
        <div>
          <h3 className="text-base font-bold text-black">
            {pubKey.slice(0, 8)}...
            {pubKey.slice(-4)}
          </h3>

          <p className="text-xs font-medium w-24 overflow-hidden whitespace-nowrap text-ellipsis">
            {chat.msg.content}
          </p>
        </div>
      </div>

      <ChevronRightIcon className="h-5 w-5 text-black" />
    </li>
  );
};

// Exporting the ContactsItem component
export default ContactsItem;
