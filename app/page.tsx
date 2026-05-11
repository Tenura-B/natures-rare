
import HeroSection from "./components/home/herosection";
import AboutSection from "./components/home/aboutsection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
