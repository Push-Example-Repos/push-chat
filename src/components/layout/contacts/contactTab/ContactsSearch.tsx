// This directive is used to specify the client-side execution context
"use client";

// Importing necessary components and hooks
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

// Defining the props for the ContactsSearch component
interface IContactsSearch {
  value: string;
  onSearch: (value: string) => void;
}

// Defining the ContactsSearch component
const ContactsSearch: FC<IContactsSearch> = ({ value, onSearch }) => {
  // Rendering the component
  return (
    <div className="flex items-center rounded-full bg-gray-100 border border-bubble-gum">
      <div className="flex justify-center items-center rounded-full px-3 py-2">
        <MagnifyingGlassIcon className="h-5 w-5 text-primary-white" />

        <input
          type="text"
          value={value}
          placeholder="Search"
          // When the input value changes, it calls the onSearch function with the new value
          onChange={(e) => onSearch(e.target.value)}
          className="bg-transparent outline-none text-base ml-3 w-full text-primary-white"
        />
      </div>
    </div>
  );
};

// Exporting the ContactsSearch component as the default export of this module
export default ContactsSearch;
