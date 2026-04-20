'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Camera, Share2, PlayCircle, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Community() {
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [onlineCount, setOnlineCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchDiscordStats = async () => {
      try {
        // Fetching from the Invite API for total member count and presence
        const response = await fetch(`https://discord.com/api/v10/invites/SzQUva9j?with_counts=true`);
        const data = await response.json();
        
        if (data.approximate_member_count !== undefined) {
          setMemberCount(data.approximate_member_count);
        }
        if (data.approximate_presence_count !== undefined) {
          setOnlineCount(data.approximate_presence_count);
        }
      } catch (error) {
        console.error('Failed to fetch Discord stats:', error);
      }
    };

    fetchDiscordStats();
    const interval = setInterval(fetchDiscordStats, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="community" className="py-24 px-4 overflow-hidden relative">
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-3xl border-2 border-white/10 bg-end/5"
        >
          {/* HIGHLY VISIBLE LIVE STATS */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
            {memberCount !== null && (
              <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 border-2 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <Users className="w-5 h-5 text-sky" />
                <span className="text-white font-pixel text-sm">{memberCount} MEMBERS</span>
              </div>
            )}
            
            {onlineCount !== null && (
              <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-green-500/10 border-2 border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                </span>
                <span className="text-green-400 font-pixel text-sm uppercase">{onlineCount} ONLINE NOW</span>
              </div>
            )}
          </div>

          <h2 className="text-3xl md:text-5xl font-pixel text-white mb-8 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            JOIN THE COMMUNITY
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            Connect with our growing community, get the latest updates, and participate in exclusive giveaways on our official Discord server.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a
              href="https://discord.gg/SzQUva9j"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-10 py-5 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold rounded-xl transition-all shadow-[0_10px_40px_rgba(88,101,242,0.3)] text-xl"
            >
              <MessageSquare className="w-8 h-8" />
              JOIN DISCORD
            </motion.a>
          </div>

          <div className="flex justify-center gap-8">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors" aria-label="Instagram">
              <Camera className="w-7 h-7" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors" aria-label="Twitter">
              <Share2 className="w-7 h-7" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors" aria-label="Youtube">
              <PlayCircle className="w-7 h-7" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-end/10 rounded-full blur-[150px] pointer-events-none -z-10" />
    </section>
  );
}
