"use client";

import Requests from "./Requests";

const RequestsBody = () => {
  return (
    <div className="px-2 h-full flex flex-col flex-grow overflow-hidden relative gap-3">
      <h2 className="text-2xl font-bold text-black">Requests</h2>

      <section className="overflow-y-auto hide-scroll w-full h-full">
        <Requests />
      </section>
    </div>
  );
};

export default RequestsBody;
