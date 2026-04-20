import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import InteractiveQuiz from "@/components/sections/InteractiveQuiz";
import Method from "@/components/sections/Method";
import Pricing from "@/components/sections/Pricing";
import WallOfLove from "@/components/sections/WallOfLove";
import Founder from "@/components/sections/Founder";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <div className="py-20">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Descubra sua <span className="text-brand-main">Vulnerabilidade Digital</span></h2>
          <p className="text-gray-400">Responda 3 perguntas e receba um diagnóstico imediato da sua operação.</p>
        </div>
        <InteractiveQuiz />
      </div>
      <Method />
      <WallOfLove />
      <Pricing />
      <Founder />
      <FAQ />
      <Footer />
    </main>
  );
}
