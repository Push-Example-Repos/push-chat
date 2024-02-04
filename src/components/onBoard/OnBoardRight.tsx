"use client";

import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

import SelectedWallet from "./SelectedWallet";

const OnBoardRight = () => {
  return (
    <>
      <DialogHeader placeholder="" className="flex items-center p-6">
        <h3 className="ml-6 w-full text-center text-xl font-bold">Sign In</h3>

        <div className="hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
          <XMarkIcon className="h-6 w-6" />
        </div>
      </DialogHeader>

      <DialogBody placeholder="" className="border-white p-4 font-grotesque">
        <SelectedWallet />
      </DialogBody>

      <DialogFooter placeholder="" className="justify-center">
        <p className="w-4/5 text-center text-sm font-normal text-gray-500">
          By connecting, you agree to the{" "}
          <Link
            href="https://push.org/tos"
            target="_blank"
            rel="noreferrer"
            className="underline text-pink-600"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="https://push.org/privacy"
            target="_blank"
            rel="noreferrer"
            className="underline text-pink-600"
          >
            {" "}
            Privacy Policy
          </Link>
        </p>
      </DialogFooter>
    </>
  );
};

export default OnBoardRight;
