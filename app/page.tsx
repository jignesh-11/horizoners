import EnderParticles from '@/components/EnderParticles';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
// import Gallery from '@/components/Gallery';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Dynamic Background */}
      <EnderParticles />

      {/* Page Content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        {/* <Gallery /> */}
        <Community />
        <Footer />
      </div>

      {/* Navigation Overlay (Optional but nice) */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-4 pointer-events-none">
        <div className="container max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-pixel text-white text-xl pointer-events-auto cursor-default">
            H
          </div>
          <div className="hidden md:flex items-center gap-8 glass px-6 py-2.5 rounded-full pointer-events-auto">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors text-xs font-pixel">FEATURES</a>
            {/* <a href="#gallery" className="text-zinc-400 hover:text-white transition-colors text-xs font-pixel">GALLERY</a> */}
            <a href="#community" className="text-zinc-400 hover:text-white transition-colors text-xs font-pixel">COMMUNITY</a>
          </div>
          <div className="opacity-0 pointer-events-none">H</div>
        </div>
      </nav>
    </main>
  );
}
