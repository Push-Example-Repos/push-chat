"use client";

import { useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";

import Contacts from "./Contacts";
import AddContactsBtn from "./AddContactsBtn";
import ContactsSearch from "./ContactsSearch";

const ContactsBody = () => {
  const [searchValue, setSearchValue] = useState("");

  const recentContact = useSelector((state: any) => state.push.recentContact);

  const filteredContacts = recentContact.filter((contact: any) =>
    contact.did.split(":")[1].toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className="flex flex-col space-y-3 h-full">
      <ContactsSearch value={searchValue} onSearch={handleSearch} />

      <div className="px-2 py-1 flex flex-col overflow-hidden relative h-full">
        <div className="flex items-center justify-between w-full mb-3">
          <h2 className="text-2xl font-bold text-black">Contacts</h2>
          <AddContactsBtn />
        </div>

        <div className="overflow-y-auto hide-scroll flex flex-1 flex-grow">
          <Contacts contacts={filteredContacts} />
        </div>
      </div>
    </div>
  );
};

export default ContactsBody;
