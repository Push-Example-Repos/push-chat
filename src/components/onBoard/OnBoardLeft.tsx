"use client";

import {
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

import Image from "next/image";

import WalletList from "./WalletList";

const OnBoardLeft = () => {
  return (
    <>
      <DialogHeader placeholder="" className="flex items-center gap-2 p-6">
        <Image src="/logo.svg" alt="Push Logo" width={28} height={28} />

        <p className="text-xl font-medium">Connect</p>
      </DialogHeader>

      <DialogBody placeholder="" className="my-5 px-5 py-2 font-grotesque ">
        <WalletList />
      </DialogBody>

      <DialogFooter
        placeholder=""
        className="justify-start border-t border-gray-700 font-normal text-pink-600 p-4"
      >
        Available Wallets (2)
      </DialogFooter>
    </>
  );
};

export default OnBoardLeft;
