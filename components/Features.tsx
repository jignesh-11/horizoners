'use client';

import { motion } from 'framer-motion';
import { Shield, Coins, Users, Zap, Trophy, Globe } from 'lucide-react';

const features = [
  {
    title: 'Horizoners Survival SMP',
    description: 'The ultimate survival experience. Land claims, player warps, and a grief-free environment tailored for our Horizoners Minecraft server community.',
    icon: Shield,
    color: 'text-grass',
    glow: 'bg-grass/20',
  },
  {
    title: 'Player Economy System',
    description: 'A robust, player-driven economy with specialized shops, trading, and unique currency mechanics only on the Horizoners survival server.',
    icon: Coins,
    color: 'text-sky',
    glow: 'bg-sky/20',
  },
  {
    title: 'Minecraft Crossplay Friendly',
    description: 'Play with your friends on PC, Console, or Mobile. Seamless Bedrock support ensures everyone can join the Horizoners SMP community.',
    icon: Globe,
    color: 'text-nether',
    glow: 'bg-nether/20',
  },
  {
    title: 'Weekly Custom Events',
    description: 'From seasonal boss fights to building competitions, Horizoners features weekly events that keep our Minecraft survival world exciting.',
    icon: Trophy,
    color: 'text-end',
    glow: 'bg-end/20',
  },
  {
    title: 'High-Performance SMP',
    description: 'Experience zero lag with our high-end dedicated hardware. The Horizoners Bedrock server is optimized for the best gameplay.',
    icon: Zap,
    color: 'text-grass',
    glow: 'bg-grass/20',
  },
  {
    title: 'Active Minecraft Community',
    description: 'Join a thriving group of players and a dedicated staff team. Horizoners is a community-first survival multiplayer experience.',
    icon: Users,
    color: 'text-sky',
    glow: 'bg-sky/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-black/40">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 md:text-center md:mb-16">
          <h2 className="text-2xl md:text-5xl font-pixel text-white mb-4 px-2">
            HORIZONERS MINECRAFT SERVER FEATURES
          </h2>
          <div className="w-24 h-1 bg-grass mx-auto mb-6" />
          <p className="text-zinc-400 max-w-xl mx-auto font-sans leading-relaxed text-sm md:text-base px-4">
            Horizoners is a premier survival multiplayer experience. Discover why our players choose Horizoners for their ultimate Minecraft Bedrock journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-6 md:p-8 glass glass-hover rounded-xl overflow-hidden"
            >
              {/* Feature Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full ${feature.glow} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className={`inline-flex p-3 rounded-lg bg-white/5 ${feature.color} mb-6`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                {feature.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed font-sans">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
