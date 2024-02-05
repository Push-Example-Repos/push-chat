"use client";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ChatHeader = () => {
  const currentContact = useSelector((state: any) => state.push.currentContact);

  return (
    <div className="flex justify-between items-center w-full py-2 px-5 border-b border-primary-white relative z-10 bg-gray-50 rounded-tl-xl">
      <div className="flex gap-3">
        <div className="w-11 h-11 aspect-square rounded-full overflow-hidden">
          <Image
            src={currentContact.profilePicture}
            width={44}
            height={44}
            alt="Profile"
          />
        </div>

        <div className="flex flex-col justify-center flex-1">
          <h3 className="text-xl font-bold text-black w-fit text-ellipsis ">
            {currentContact?.did.split(":")[1]}
          </h3>

          <div className="text-xs flex items-center">
            <button
              className={`flex flex-start text-gray-600 text-[12px] hover:cursor-pointer`}
              onClick={() => {
                navigator.clipboard.writeText(
                  currentContact?.did.split(":")[1]
                );

                toast.success("Copied to clipboard");
              }}
            >
              Click to Copy
              <DocumentDuplicateIcon className="w-3 h-3 mt-px ml-1 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
