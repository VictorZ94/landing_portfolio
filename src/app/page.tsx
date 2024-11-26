import CoverParticules from "@/components/cover-particules";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-conver bg-cover">
        <p><CoverParticules /></p>
        <Introduction></Introduction>
      </div>
    </main>
  );
}
