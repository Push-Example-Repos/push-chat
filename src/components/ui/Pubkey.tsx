import { FC } from "react";

interface PubkeyProps {
  address: string;
  size?: string;
}

const Pubkey: FC<PubkeyProps> = ({ address, size = "text-base" }) => {
  const handlePubKeyClick = () => {
    navigator.clipboard.writeText(address);
  };

  return (
    <p className={`font-medium ${size}`} onClick={handlePubKeyClick}>
      {address.slice(0, 6)}...{address.slice(-4)}
    </p>
  );
};

export default Pubkey;
