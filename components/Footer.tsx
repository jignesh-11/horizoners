export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-zinc-950">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-pixel text-lg mb-2">HORIZONERS</h3>
            <p className="text-zinc-500 text-sm">
              Not an official Minecraft product. Not approved by or associated with Mojang.
            </p>
          </div>
          
          <div className="flex gap-8 text-zinc-400 text-sm font-medium">
            <a href="#" className="hover:text-grass transition-colors">RULES</a>
            <a href="#" className="hover:text-grass transition-colors">STORE</a>
            <a href="#" className="hover:text-grass transition-colors">WIKI</a>
            <a href="#" className="hover:text-grass transition-colors">STAFF</a>
          </div>
          
          <div className="text-zinc-500 text-xs text-center md:text-right">
            © 2026 HORIZONERS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
