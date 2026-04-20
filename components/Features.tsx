'use client';

import { motion } from 'framer-motion';
import { Shield, Coins, Users, Zap, Trophy, Globe } from 'lucide-react';

const features = [
  {
    title: 'Survival Multiplayer',
    description: 'Classic survival with a twist. Land claims, player warps, and a grief-free environment.',
    icon: Shield,
    color: 'text-grass',
    glow: 'bg-grass/20',
  },
  {
    title: 'Economy System',
    description: 'Robust player-driven economy with shops, trading, and unique currency mechanics.',
    icon: Coins,
    color: 'text-sky',
    glow: 'bg-sky/20',
  },
  {
    title: 'Crossplay Friendly',
    description: 'Play with your friends on PC, Console, or Mobile. Seamless Bedrock support.',
    icon: Globe,
    color: 'text-nether',
    glow: 'bg-nether/20',
  },
  {
    title: 'Custom Events',
    description: 'Weekly events, seasonal boss fights, and community-driven build competitions.',
    icon: Trophy,
    color: 'text-end',
    glow: 'bg-end/20',
  },
  {
    title: 'Performance Plus',
    description: 'Zero lag experience with high-end dedicated hardware and optimized server software.',
    icon: Zap,
    color: 'text-grass',
    glow: 'bg-grass/20',
  },
  {
    title: 'Thriving Community',
    description: 'Join thousands of active players and a dedicated staff team available 24/7.',
    icon: Users,
    color: 'text-sky',
    glow: 'bg-sky/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-black/40">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-pixel text-white mb-4">
            SERVER FEATURES
          </h2>
          <div className="w-24 h-1 bg-grass mx-auto mb-6" />
          <p className="text-zinc-400 max-w-xl mx-auto">
            Everything you need for the perfect Minecraft experience. Crafted with care for our community.
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
              className="group relative p-8 glass glass-hover rounded-xl overflow-hidden"
            >
              {/* Feature Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full ${feature.glow} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className={`inline-flex p-3 rounded-lg bg-white/5 ${feature.color} mb-6`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                {feature.title}
              </h3>
              
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
