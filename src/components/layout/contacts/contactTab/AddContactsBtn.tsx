// This directive is used to specify the client-side execution context
"use client";

// Importing necessary components, hooks, and icons
import { FC } from "react";
import { Button } from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/outline";

// Importing Redux hooks and actions
import { useDispatch } from "react-redux";
import { toggleNewContactsModal } from "@/redux/slice/modalsSlice";

// Defining the AddContactsBtn component
const AddContactsBtn: FC = () => {
  // Using the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Rendering the component
  return (
    <Button
      placeholder=""
      className="p-2.5 rounded-full bg-bubble-gum/20 hover:bg-bubble-gum/40 hover:scale-105"
      // When the button is clicked, it dispatches the toggleNewContactsModal action
      onClick={() => dispatch(toggleNewContactsModal())}
    >
      <UserPlusIcon className="h-4 w-4 text-black" />
    </Button>
  );
};

// Exporting the AddContactsBtn component as the default export of this module
export default AddContactsBtn;
