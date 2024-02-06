// Use client directive
"use client";

// Importing necessary components and hooks
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

// Defining the ChatHeader component
const ChatHeader = () => {
  // Using the useSelector hook to get the currentContact from the Redux store
  const currentContact = useSelector((state: any) => state.push.currentContact);

  return (
    // Wrapping the component in a div with some styling
    <div className="flex justify-between items-center w-full py-2 px-5 border-b border-primary-white relative z-10 bg-gray-50 rounded-tl-xl">
      <div className="flex gap-3">
        <div className="w-11 h-11 aspect-square rounded-full overflow-hidden">
          {/* Displaying the profile picture of the currentContact */}
          <Image
            src={currentContact.profilePicture}
            width={44}
            height={44}
            alt="Profile"
          />
        </div>

        <div className="flex flex-col justify-center flex-1">
          {/* Displaying the did of the currentContact */}
          <h3 className="text-xl font-bold text-black w-fit text-ellipsis ">
            {currentContact?.did.split(":")[1]}
          </h3>

          <div className="text-xs flex items-center">
            {/* Creating a button that copies the did to the clipboard when */}
            clicked
            <button
              className={`flex flex-start text-gray-600 text-[12px] hover:cursor-pointer`}
              onClick={() => {
                navigator.clipboard.writeText(
                  currentContact?.did.split(":")[1]
                );

                // Displaying a success toast message
                toast.success("Copied to clipboard");
              }}
            >
              Click to Copy
              {/* Adding an icon to the button */}
              <DocumentDuplicateIcon className="w-3 h-3 mt-px ml-1 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the ChatHeader component
export default ChatHeader;
