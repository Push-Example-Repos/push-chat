"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { FC } from "react";

interface IContactsSearch {
  value: string;
  onSearch: (value: string) => void;
}

const ContactsSearch: FC<IContactsSearch> = ({ value, onSearch }) => {
  return (
    <div className="flex items-center rounded-full bg-gray-100 border border-bubble-gum">
      <div className="flex justify-center items-center rounded-full px-3 py-2">
        <MagnifyingGlassIcon className="h-5 w-5 text-primary-white" />

        <input
          type="text"
          value={value}
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
          className="bg-transparent outline-none text-base ml-3 w-full text-primary-white"
        />
      </div>
    </div>
  );
};

export default ContactsSearch;
