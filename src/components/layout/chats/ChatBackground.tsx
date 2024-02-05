import { LockClosedIcon } from "@heroicons/react/24/solid";

import Image from "next/image";

const ChatBackground = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full py-6 font-uni">
      <section className="flex justify-center h-full items-center flex-col">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />

        <p className="text-primary-white/60 max-w-xs text-center mt-5">
          Send and receive messages anytime to your contacts
        </p>
      </section>

      <p className="flex text-sm gap-1 items-center">
        <LockClosedIcon className="w-4 h-4" />
        End to end encrypted
      </p>
    </div>
  );
};

export default ChatBackground;
