import ChatContainer from "@/components/layout/ChatContainer";
import ContactsTab from "@/components/layout/contacts/ContactsTab";
import NewContactsModal from "@/components/modals/NewContactsModal";

const ChatPage = () => {
  return (
    <>
      <NewContactsModal />

      <div className="flex flex-1 flex-grow bg-white/80 rounded-l-xl h-screen gap-3 overflow-hidden">
        <ContactsTab />
        <ChatContainer />
      </div>
    </>
  );
};

export default ChatPage;
