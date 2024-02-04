import React, { FC } from "react";

import WalletItem from "./WalletItem";

interface Wallet {
  name: string;
  bg: string;
  src: string;
}

const WalletList: FC = () => {
  const wallets: Wallet[] = [
    {
      name: "MetaMask",
      bg: "bg-[#ffe6ce]",
      src: "metamask.svg",
    },
    {
      name: "Coinbase Wallet",
      bg: "bg-[#0052FF]",
      src: "coinbase.svg",
    },
  ];

  return (
    <ul className="space-y-1">
      {wallets.map((wallet, i) => (
        <WalletItem
          key={i}
          name={wallet.name}
          bg={wallet.bg}
          src={wallet.src}
        />
      ))}
    </ul>
  );
};

export default WalletList;
