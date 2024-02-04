"use client";

import { FC } from "react";
import { Button } from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/outline";

import { useDispatch } from "react-redux";

import { toggleNewContactsModal } from "@/redux/slice/modalsSlice";

const AddContactsBtn: FC = () => {
  const dispatch = useDispatch();

  return (
    <Button
      placeholder=""
      className="p-2.5 rounded-full bg-bubble-gum/20 hover:bg-bubble-gum/40 hover:scale-105"
      onClick={() => dispatch(toggleNewContactsModal())}
    >
      <UserPlusIcon className="h-4 w-4 text-black" />
    </Button>
  );
};

export default AddContactsBtn;
