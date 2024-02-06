// This directive is used to specify the client-side execution context
"use client";

// Importing components from the Material Tailwind library and the useState hook from React
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { useState } from "react";

// Importing child components
import ContactsBody from "./contactTab/ContactsBody";
import RequestsBody from "./requestsTab/RequestsBody";

// Defining the ContactsTab component
const ContactsTab = () => {
  // Using the useState hook to manage the active tab state
  const [activeTab, setActiveTab] = useState("contacts");

  // Defining the data for the tabs
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

  // Rendering the component
  return (
    <Tabs value={activeTab} className="flex-grow flex flex-col mx-2 w-3/12">
      <TabsHeader
        placeholder=""
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className: "border-b-2 border-black shadow-none rounded-none",
        }}
      >
        {/* Mapping over the data array to render the tabs */}
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
        {/* Mapping over the data array to render the tab panels */}
        {data.map(({ value, body }) => (
          <TabPanel key={value} value={value} className="px-0 h-full">
            {body}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

// Exporting the ContactsTab component as the default export of this module
export default ContactsTab;
