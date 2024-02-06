// This directive is used to specify the client-side execution context
"use client";

// Importing necessary components, hooks, and icons
import { Button } from "@material-tailwind/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { FC } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

import { updateRecentRequest } from "@/redux/slice/pushSlice";

// Defining the props for the RequestsItem component
interface RequestsItemProps {
  request: any;
}

// Defining the RequestsItem component
const RequestsItem: FC<RequestsItemProps> = ({ request }) => {
  // Using Redux hooks for dispatching actions and accessing state
  const dispatch = useDispatch();
  const pubKey = request.did.split(":")[1];
  const pushSign = useSelector((state: any) => state.push.pushSign);

  // Function to handle accepting a request
  const handleAcceptRequest = async () => {
    await pushSign.chat.accept(pubKey);
    dispatch(updateRecentRequest(request.did));
    toast.success("Request accepted");
  };

  // Function to handle rejecting a request
  const handleRejectRequest = async () => {
    await pushSign.chat.reject(pubKey);
    dispatch(updateRecentRequest(request.did));
    toast.success("Request rejected");
  };

  // Rendering the component
  return (
    <div className="flex justify-between border-b borde-gray-200 px-2 py-3 hover:bg-gray-50">
      {/* Image and address of the requestor */}
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
          <Image
            src={request.profilePicture}
            width={40}
            height={40}
            alt="Profile"
          />
        </div>

        <div>
          <h3 className="text-base font-bold text-black">
            {pubKey.slice(0, 8)}...{pubKey.slice(-4)}
          </h3>

          <p className="text-xs">{request.msg}</p>
        </div>
      </div>

      {/* Send Request and Cancel Request buttons */}
      <div className="flex items-center">
        <Button
          placeholder=""
          className="bg-transparent border-2 border-green-500/20 p-1.5 rounded-full text-primary-blue mr-2 shadow-none hover:shadow-sm"
          onClick={handleAcceptRequest}
        >
          <CheckIcon className="h-4 w-4 text-green-500" />
        </Button>

        <Button
          placeholder=""
          className="border-2 border-red-500/20 bg-red-500/20 rounded-full text-primary-blue p-1.5 shadow-none hover:shadow-sm"
          onClick={handleRejectRequest}
        >
          <XMarkIcon className="h-4 w-4 text-red-500" />
        </Button>
      </div>
    </div>
  );
};

// Exporting the RequestsItem component as the default export of this module
export default RequestsItem;
