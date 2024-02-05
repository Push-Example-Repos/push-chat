"use client";

import { useAccount } from "wagmi";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useEthersSigner } from "@/wagmi/EthersSigner";

import usePush from "@/hooks/usePush";

import ChatBox from "./chatBox/ChatBox";
import ChatBackground from "./ChatBackground";

const ChatContainer = () => {
  const signer = useEthersSigner();
  const { isConnected } = useAccount();

  const { initializePush } = usePush();

  const pushSign = useSelector((state: any) => state.push.pushSign);
  const currentContact = useSelector((state: any) => state.push.currentContact);

  useEffect(() => {
    if (isConnected && signer && !pushSign) {
      initializePush();
    }
  }, [isConnected, signer, pushSign, initializePush]);

  return (
    <div className="flex w-9/12 flex-grow my-2 bg-white rounded-l-xl">
      {Object.keys(currentContact).length === 0 ? (
        <ChatBackground />
      ) : (
        <ChatBox />
      )}
    </div>
  );
};

export default ChatContainer;
