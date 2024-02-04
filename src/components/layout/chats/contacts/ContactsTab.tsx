"use client";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";

import ContactsBody from "./contactTab/ContactsBody";
import RequestsBody from "./requestsTab/RequestsBody";

const ContactsTab = () => {
  const [activeTab, setActiveTab] = useState("contacts");
  const data = [
    {
      label: "Contacts",
      value: "contacts",
      body: <ContactsBody />,
    },
    {
      label: "Requests",
      value: "requests",
      body: <RequestsBody />,
    },
  ];

  return (
    <Tabs value={activeTab} className="flex-grow flex flex-col mx-2">
      <TabsHeader
        placeholder=""
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className: "border-b-2 border-black shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            placeholder=""
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`py-3 transition-all ${
              activeTab === value
                ? " border-b-2 border-bubble-gum shadow-none rounded-none"
                : "text-gray-400"
            }`}
          >
            <span
              className={`text-xl py-3 transition-all ${
                activeTab === value
                  ? "gradient-text bg-gradient-push font-semibold"
                  : "text-gray-500"
              }`}
            >
              {label}
            </span>
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody placeholder="" className="flex-grow">
        {data.map(({ value, body }) => (
          <TabPanel key={value} value={value} className="px-0 h-full">
            {body}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default ContactsTab;
