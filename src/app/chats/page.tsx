// Importing the ChatContainer component from the layout directory
import ChatContainer from "@/components/layout/ChatContainer";

// Importing the ContactsTab component from the contacts directory within layout
import ContactsTab from "@/components/layout/contacts/ContactsTab";

// Importing the NewContactsModal component from the modals directory
import NewContactsModal from "@/components/modals/NewContactsModal";

// Defining the ChatPage component
const ChatPage = () => {
  return (
    // Using a React Fragment to group the components
    <>
      {/* Rendering the NewContactsModal component */}
      <NewContactsModal />
      {/* Creating a div to contain the ContactsTab and ChatContainer components */}
      {/* The div has several CSS classes applied for styling */}
      <div className="flex flex-1 flex-grow bg-white/80 rounded-l-xl h-screen gap-3 overflow-hidden">
        {/* Rendering the ContactsTab component */}
        <ContactsTab />
        {/* Rendering the ChatContainer component */}
        <ChatContainer />
      </div>
    </>
  );
};

// Exporting the ChatPage component as the default export of this module
export default ChatPage;
