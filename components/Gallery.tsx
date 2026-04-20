'use client';

import { motion } from 'framer-motion';

const images = [
  { url: 'https://images.unsplash.com/photo-1615915468538-0fbd857888ca?auto=format&fit=crop&q=80&w=800', title: 'Epic Spawn Location' },
  { url: 'https://images.unsplash.com/photo-1635334701292-6f296c0d0c3d?auto=format&fit=crop&q=80&w=800', title: 'Community Builds' },
  { url: 'https://images.unsplash.com/photo-1607988334618-25ca12920384?auto=format&fit=crop&q=80&w=800', title: 'Night Life' },
  { url: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800', title: 'Nether Adventures' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-pixel text-white mb-4">
              PREVIEW
            </h2>
            <div className="w-24 h-1 bg-sky mb-6" />
            <p className="text-zinc-400">
              A glimpse into the vast world of Horizoners. Every block tells a story.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 overflow-hidden rounded-xl glass border-2 border-white/5"
            >
              <motion.img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-pixel text-sm">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
