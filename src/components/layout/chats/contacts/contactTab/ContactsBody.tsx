"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import AddContactsBtn from "./AddContactsBtn";
import Contacts from "./Contacts";
import { Button } from "@material-tailwind/react";

const ContactsBody = () => {
  return (
    <div className="space-y-3 h-full">
      <div className="flex items-center rounded-full bg-gray-100 border border-bubble-gum">
        <div className="flex justify-center items-center rounded-full px-3 py-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-primary-white" />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-base ml-3 w-full text-primary-white"
          />
        </div>
      </div>

      <div className="px-2 py-1 flex flex-col overflow-hidden relative">
        <div className="flex items-center justify-between w-full mb-3">
          <h2 className="text-2xl font-bold text-black">Contacts</h2>
          <AddContactsBtn />
        </div>

        <div className="overflow-y-auto mb-20 hide-scroll">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default ContactsBody;
