"use client";

import { Button, DialogBody, DialogFooter } from "@material-tailwind/react";

import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../ui/Modal";
import { toggleNewContactsModal } from "@/redux/slice/modalsSlice";
import DefaultButton from "../ui/buttons/DefaultButton";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const NewContactsModal = () => {
  const dispatch = useDispatch();

  const pushSign = useSelector((state: any) => state.push.pushSign);
  const open = useSelector((state: any) => state.modals.isNewContactsModalOpen);

  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    dispatch(toggleNewContactsModal());
  };

  const handleSendRequest = async () => {
    if (!address || !message) {
      toast.error("Address and message cannot be empty.");
      return;
    }

    await pushSign.chat.send(address, {
      type: "Text",
      content: message,
    });

    dispatch(toggleNewContactsModal());
    toast.success("Request sent successfully");

    setAddress("");
    setMessage("");
  };

  return (
    <Modal isVisible={open} onClose={handleOpen} title="Send Request to @">
      <DialogBody placeholder="">
        <p className="mb-5 -mt-7 text-sm max-w-[75%]">
          Write the Pubkey and a Connect message to send request.
        </p>

        <div className="grid gap-6">
          <Input
            label="Address"
            id="address"
            type="text"
            input={address}
            setInput={setAddress}
            placeholder="Enter the pubkey"
            required
          />

          <Textarea
            id="message"
            label="Message"
            input={message}
            setInput={setMessage}
            placeholder="Write a message"
            required
          />
        </div>
      </DialogBody>

      <DialogFooter placeholder="" className="space-x-2 justify-end">
        <Button
          placeholder=""
          color="red"
          variant="outlined"
          className="border-red-500 px-5 "
          onClick={() => {
            dispatch(toggleNewContactsModal());
            setAddress("");
            setMessage("");
          }}
        >
          Cancel
        </Button>

        <Button
          placeholder=""
          variant="filled"
          color="white"
          className="bg-gradient-push text-white px-5"
          onClick={handleSendRequest}
        >
          Send Request
        </Button>
      </DialogFooter>
    </Modal>
  );
};

export default NewContactsModal;
