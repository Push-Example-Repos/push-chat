import { FC } from "react";

import MessageInput from "./MessageInput";

const SendMessageContainer: FC = () => {
  return (
    <div className="flex z-10 items-center bg-gray-50 pl-5 border-t border-gray-200 py-1 rounded-bl-xl">
      <MessageInput />
    </div>
  );
};

export default SendMessageContainer;
