// Use client directive
"use client";

// Importing necessary components and hooks
import { Button, DialogBody, DialogFooter } from "@material-tailwind/react";

import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

// Importing the Modal component and the toggleNewContactsModal action
import Modal from "../ui/Modal";
import { toggleNewContactsModal } from "@/redux/slice/modalsSlice";
import DefaultButton from "../ui/buttons/DefaultButton";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

// Defining the NewContactsModal component
const NewContactsModal = () => {
  // Using the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Using the useSelector hook to get the pushSign and the open state from the Redux store
  const pushSign = useSelector((state: any) => state.push.pushSign);
  const open = useSelector((state: any) => state.modals.isNewContactsModalOpen);

  // Defining the address and message states
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  // Defining the handleOpen function that toggles the new contacts modal
  const handleOpen = () => {
    dispatch(toggleNewContactsModal());
  };

  // Defining the handleSendRequest function that sends a request
  const handleSendRequest = async () => {
    // Returning early if address or message is falsy
    if (!address || !message) {
      toast.error("Address and message cannot be empty.");
      return;
    }

    // Returning early if the account is the same as the address
    if (pushSign.account === address) {
      toast.error("You cannot send request to yourself");
      return;
    }

    // Sending the request
    await pushSign.chat.send(address, {
      type: "Text",
      content: message,
    });

    // Toggling the new contacts modal and displaying a success toast
    dispatch(toggleNewContactsModal());
    toast.success("Request sent successfully");

    // Clearing the address and message
    setAddress("");
    setMessage("");
  };

  // Returning the JSX for the NewContactsModal component
  return (
    // Displaying the Modal component
    <Modal isVisible={open} onClose={handleOpen} title="Send Request to @">
      <DialogBody placeholder="">
        {/* Displaying the instructions */}
        <p className="mb-5 -mt-7 text-sm max-w-[75%]">
          Write the Pubkey and a Connect message to send request.
        </p>

        {/* Defining the input fields */}
        <div className="grid gap-6">
          {/* Input field for the address */}
          <Input
            label="Address"
            id="address"
            type="text"
            input={address}
            setInput={setAddress}
            placeholder="Enter the pubkey"
            required
          />

          {/* Textarea for the message */}
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

      {/* Defining the footer of the dialog */}
      <DialogFooter placeholder="" className="space-x-2 justify-end">
        {/* Cancel button that closes the modal and clears the address and message */}
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

        {/* Send Request button that calls the handleSendRequest function */}
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

// Exporting the NewContactsModal component
export default NewContactsModal;
