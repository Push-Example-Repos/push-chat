import Image from "next/image";
import React, { FC, useEffect } from "react";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";

import ConnectSignBtn from "./ConnectSignBtn";
import { SignWalletBtn } from "../ui/buttons/OnBoardButtons";

interface State {
  modals: {
    activeWallet: string;
  };
}

const SelectedWallet: FC = () => {
  const activeWallet = useSelector((state: State) => state.modals.activeWallet);

  const { isConnected } = useAccount();

  const [client, setClient] = React.useState<boolean>(false);

  const name = activeWallet === "MetaMask" ? "metamask" : "coinbase";
  const bg = activeWallet === "MetaMask" ? "bg-[#ffe6ce]" : "bg-[#0052FF]";

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    client && (
      <div className="flex flex-col items-center space-y-8">
        {isConnected ? (
          <>
            <div
              className={`prevent-select overflow-hidden rounded-lg bg-pink-100 p-3`}
            >
              <Image
                src={`/logo.svg`}
                alt={"Push Protocol Logo"}
                width={48}
                height={48}
              />
            </div>

            <div className="text-center">
              <p className="text-lg font-medium">Enable Push Profile</p>
              <p className="text-gray-700">
                Please Sign to Enable Push Profile and continue.
              </p>
            </div>

            <SignWalletBtn />
          </>
        ) : activeWallet ? (
          <>
            <div
              className={`prevent-select overflow-hidden rounded-lg p-3 ${bg}`}
            >
              <Image
                src={`/assets/wallets/${name}.svg`}
                alt={activeWallet + " Logo"}
                width={48}
                height={48}
              />
            </div>

            <ConnectSignBtn name={activeWallet} />
          </>
        ) : (
          <>
            <div
              className={`prevent-select overflow-hidden rounded-lg bg-pink-100 p-3`}
            >
              <Image
                src={`/logo.svg`}
                alt={"Push Protocol Logo"}
                width={48}
                height={48}
              />
            </div>

            <div className="text-center">
              <p className="text-lg font-medium">
                Welcome to the Push Protocol Guide.
              </p>
              <p className="text-gray-700">
                Please select a wallet to connect.
              </p>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default SelectedWallet;
