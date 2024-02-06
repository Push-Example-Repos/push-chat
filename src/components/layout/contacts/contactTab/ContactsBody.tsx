// This directive is used to specify the client-side execution context
"use client";

// Importing necessary hooks and components
import { useState } from "react";
import { useSelector } from "react-redux";

import Contacts from "./Contacts";
import AddContactsBtn from "./AddContactsBtn";
import ContactsSearch from "./ContactsSearch";

// Defining the ContactsBody component
const ContactsBody = () => {
  // Using the useState hook to manage the search value
  const [searchValue, setSearchValue] = useState("");

  // Using the useSelector hook to access the recentContact state from the Redux store
  const recentContact = useSelector((state: any) => state.push.recentContact);

  // Filtering the contacts based on the search value
  const filteredContacts = recentContact.filter((contact: any) =>
    contact.did.split(":")[1].toLowerCase().includes(searchValue.toLowerCase())
  );

  // Function to handle search input changes
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  // Rendering the component
  return (
    <div className="flex flex-col space-y-3 h-full">
      <ContactsSearch value={searchValue} onSearch={handleSearch} />

      <div className="px-2 py-1 flex flex-col overflow-hidden relative h-full">
        {/* This div contains the header of the contacts tab. It includes the title and the add contacts button */}
        <div className="flex items-center justify-between w-full mb-3">
          <h2 className="text-2xl font-bold text-black">Contacts</h2>
          <AddContactsBtn />
        </div>

        {/* Render all chats from Push */}
        <div className="overflow-y-auto hide-scroll flex flex-1 flex-grow">
          <Contacts contacts={filteredContacts} />
        </div>
      </div>
    </div>
  );
};

// Exporting the ContactsBody component as the default export of this module
export default ContactsBody;
