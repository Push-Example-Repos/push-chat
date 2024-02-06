"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { FC } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentContact } from "@/redux/slice/pushSlice";

interface IContactsItem {
  chat: any;
}

const ContactsItem: FC<IContactsItem> = ({ chat }) => {
  const dispatch = useDispatch();

  const pushSign = useSelector((state: any) => state.push.pushSign);

  const handleClick = () => {
    dispatch(setCurrentContact(chat));
  };

  if (!pushSign || !chat) return;

  const pubKey = chat.did.split(":")[1];

  return (
    <li
      className="flex justify-between items-center border-b borde-gray-200 px-2 hover:bg-gray-50 cursor-pointer rounded-lg"
      onClick={handleClick}
    >
      <div className="flex items-center my-2">
        <div className="w-10 h-10 bg-red-200 rounded-full mr-3 overflow-hidden">
          <Image
            src={chat.profilePicture}
            alt="profile picture"
            width={40}
            height={40}
          />
        </div>

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

export default ContactsItem;
