import ContactsTab from "@/components/layout/chats/contacts/ContactsTab";
import NewContactsModal from "@/components/modals/NewContactsModal";

const ChatPage = () => {
  return (
    <div className="flex flex-1 flex-grow bg-white/80 rounded-l-xl">
      <NewContactsModal />
      <ContactsTab />
    </div>
  );
};

export default ChatPage;
