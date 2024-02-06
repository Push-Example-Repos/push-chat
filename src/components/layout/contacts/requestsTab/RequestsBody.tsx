// This directive is used to specify the client-side execution context
"use client";

// Importing the Requests component
import Requests from "./Requests";

// Defining the RequestsBody component
const RequestsBody = () => {
  // Rendering the component
  return (
    // A div container with various CSS classes for styling
    <div className="px-2 h-full flex flex-col flex-grow overflow-hidden relative gap-3">
      {/* A heading for the section */}
      <h2 className="text-2xl font-bold text-black">Requests</h2>

      {/* A section that will contain the Requests component */}
      <section className="overflow-y-auto hide-scroll w-full h-full">
        {/* The Requests component is rendered here */}
        <Requests />
      </section>
    </div>
  );
};

// Exporting the RequestsBody component as the default export of this module
export default RequestsBody;
