// Importing the LockClosedIcon from the Heroicons library
import { LockClosedIcon } from "@heroicons/react/24/solid";

// Importing the Image component from the Next.js library
import Image from "next/image";

// Defining the ChatBackground component
const ChatBackground = () => {
  return (
    // The main div that contains all the elements of the ChatBackground component
    <div className="flex flex-col flex-grow flex-1 bg-white rounded-l-xl justify-between border border-gray-300">
      {/* A div that contains the logo and the text */}
      <div className="flex flex-col justify-between items-center w-full h-full py-6 font-uni">
        {/* A section that contains the logo and the text */}
        <section className="flex justify-center h-full items-center flex-col">
          {/* The logo image */}
          <Image src="/logo.svg" alt="logo" width={100} height={100} />

          {/* The text that appears below the logo */}
          <p className="text-primary-white/60 max-w-xs text-center mt-5">
            Send and receive messages anytime to your contacts
          </p>
        </section>

        {/* A paragraph that contains the lock icon and the text "End to end encrypted */}
        <p className="flex text-sm gap-1 items-center">
          {/* The lock icon */}
          <LockClosedIcon className="w-4 h-4" />
          End to end encrypted
        </p>
      </div>
    </div>
  );
};

// Exporting the ChatBackground component as the default export of this module
export default ChatBackground;
