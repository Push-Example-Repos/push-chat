// Importing the OnBoard component from the onBoard directory
import OnBoard from "@/components/onBoard/OnBoard";

// Importing the GithubCorner component from the ui directory
import GithubCorner from "@/components/ui/GithubCorner";

// The Home component is defined here
export default function Home() {
  return (
    // The main HTML element is returned by the Home component
    // The className property is used to apply several CSS classes
    <main className="h-screen flex items-center bg-gradient-linear relative">
      {/* The OnBoard component is rendered here */}
      <OnBoard />
      {/* The GithubCorner component is rendered here */}
      <GithubCorner />
    </main>
  );
}
