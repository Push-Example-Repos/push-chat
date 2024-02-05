import NewContactsModal from "@/components/modals/NewContactsModal";
import ContactsTab from "@/components/layout/chats/contacts/ContactsTab";
import ChatContainer from "@/components/layout/chats/ChatContainer";

const ChatPage = () => {
  return (
    <>
      <NewContactsModal />

      <div className="flex flex-1 flex-grow bg-white/80 rounded-l-xl gap-3 overflow-hidden">
        <ContactsTab />
        <ChatContainer />
      </div>
    </>
  );
};

export default ChatPage;
