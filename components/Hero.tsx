'use client';

import { motion } from 'framer-motion';
import { Copy, Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const IP = '170.23.61.130';
  const PORT = '26017';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${IP}:${PORT}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="container relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-nether glass rounded-full border border-nether/20">
            BEDROCK EDITION 1.21+
          </span>
          <h1 className="text-5xl md:text-8xl font-pixel text-white mb-6 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            HORIZONERS
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            Explore. Survive. Build Your Legacy.
            <span className="block mt-2 opacity-80 text-sky">
              The ultimate sunset survival experience.
            </span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            <motion.button
              onClick={copyToClipboard}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-8 py-4 bg-nether text-zinc-950 font-bold text-lg rounded-sm flex items-center justify-center gap-2 shadow-[0_4px_0_rgb(180,83,9)] active:translate-y-1 active:shadow-none transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  COPIED!
                </>
              ) : (
                <>
                  JOIN NOW
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </motion.button>

            <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-2 p-1 glass rounded-sm">
              <div className="flex items-center gap-2 px-3 py-3">
                <span className="font-mono text-zinc-400 text-xs uppercase tracking-tighter">IP:</span>
                <code className="font-mono text-white text-sm">{IP}</code>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/10" />
              <div className="flex items-center gap-2 px-3 py-3">
                <span className="font-mono text-zinc-400 text-xs uppercase tracking-tighter">PORT:</span>
                <code className="font-mono text-white text-sm">{PORT}</code>
              </div>
              <button
                onClick={copyToClipboard}
                className="p-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-sm ml-auto"
                aria-label="Copy IP and Port"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-grass" />
                ) : (
                  <Copy className="w-5 h-5 text-zinc-400" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient blur based on Icon colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-end/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nether/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky/5 rounded-full blur-[100px] pointer-events-none -z-10" />
    </section>
  );
}
