'use client';

import { motion } from 'framer-motion';
import { Shield, Coins, Users, Zap, Trophy, Globe } from 'lucide-react';

const features = [
  {
    title: 'A True Home Base',
    description: 'More than just a server—it\'s a home. Experience survival the way it was meant to be, in a grief-free environment where every player is a friend.',
    icon: Shield,
    color: 'text-grass',
    glow: 'bg-grass/20',
  },
  {
    title: 'Player-Run Economy',
    description: 'Forget admin shops. Our economy is 100% player-driven. Trade resources, set up your own shop at spawn, and build wealth with your neighbors.',
    icon: Coins,
    color: 'text-sky',
    glow: 'bg-sky/20',
  },
  {
    title: 'Everyone is Welcome',
    description: 'Whether you\'re on PC, Console, or Mobile, you\'re part of the crew. Seamless crossplay ensures no friend is left behind in the Horizoners world.',
    icon: Globe,
    color: 'text-nether',
    glow: 'bg-nether/20',
  },
  {
    title: 'Collaborative Projects',
    description: 'From building a massive shared spawn town to creating server-wide lore, we focus on projects that bring our small community together.',
    icon: Trophy,
    color: 'text-end',
    glow: 'bg-end/20',
  },
  {
    title: 'Pure Vanilla+',
    description: 'No lag, no bloat. Experience high-performance gameplay with just the right amount of enhancements to keep your builds safe and your journey smooth.',
    icon: Zap,
    color: 'text-grass',
    glow: 'bg-grass/20',
  },
  {
    title: 'Your Voice Matters',
    description: 'With a small, dedicated player base, every suggestion counts. Help us decide on new features, plugins, and world events via our Discord.',
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
            A CLOSE-KNIT SURVIVAL JOURNEY
          </h2>
          <div className="w-24 h-1 bg-grass mx-auto mb-6" />
          <p className="text-zinc-400 max-w-xl mx-auto font-sans leading-relaxed text-sm md:text-base px-4">
            Horizoners isn't just a server—it's a community of friends. Discover why our players choose us for their ultimate small-scale Minecraft Bedrock journey.
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
