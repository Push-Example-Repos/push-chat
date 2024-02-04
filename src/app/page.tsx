import OnBoard from "@/components/onBoard/OnBoard";
import GithubCorner from "@/components/ui/GithubCorner";

export default function Home() {
  return (
    <main className="h-screen flex items-center bg-gradient-linear relative">
      <OnBoard />

      <GithubCorner />
    </main>
  );
}
