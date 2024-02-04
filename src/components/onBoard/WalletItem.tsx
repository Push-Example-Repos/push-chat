import Image from "next/image";
import React, { FC, use, useEffect } from "react";
import { useAccount } from "wagmi";
import { useDispatch } from "react-redux";

import { setActiveWallet } from "@/redux/slice/modalsSlice";

interface WalletItemProps {
  bg: string;
  src: string;
  name: string;
}

const WalletItem: FC<WalletItemProps> = ({ bg, src, name }) => {
  const dispatch = useDispatch();
  const { isConnected } = useAccount();

  const [client, setClient] = React.useState<boolean>(false);

  const handleClick = () => {
    if (isConnected) return;
    dispatch(setActiveWallet(name));
  };

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    client && (
      <li
        className={`prevent-select flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-200 transition-colors`}
        style={{
          opacity: isConnected ? 0.5 : 1,
          cursor: isConnected ? "default" : "pointer",
        }}
        onClick={handleClick}
      >
        <div className={`overflow-hidden rounded-lg p-3 ${bg}`}>
          <Image
            src={`/assets/wallets/${src}`}
            alt={name + " Logo"}
            width={32}
            height={32}
          />
        </div>

        <p className="font-medium text-gray-900">{name}</p>
      </li>
    )
  );
};

export default WalletItem;
