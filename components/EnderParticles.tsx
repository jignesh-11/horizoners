'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const PARTICLE_COUNT = 120;

const Particle = ({ mouseX, mouseY }: { mouseX: any; mouseY: any }) => {
  const [config, setConfig] = useState<{
    size: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
    color: string;
    shadow: string;
    velocity: { x: number; y: number };
  } | null>(null);

  useEffect(() => {
    const colorOptions = [
      { bg: 'bg-[#8b5cf6]', shadow: 'shadow-[#8b5cf6]' }, // End Purple from Icon
      { bg: 'bg-[#0ea5e9]', shadow: 'shadow-[#0ea5e9]' }, // Sky Blue from Icon
      { bg: 'bg-[#fbbf24]', shadow: 'shadow-[#fbbf24]' }, // Sunset Amber from Icon
      { bg: 'bg-[#f59e0b]', shadow: 'shadow-[#f59e0b]' }, // Darker Amber
    ];
    
    const selected = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    
    setConfig({
      size: Math.random() * 6 + 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
      color: selected.bg,
      shadow: selected.shadow,
      velocity: {
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15,
      }
    });
  }, []);

  if (!config) return null;

  return (
    <motion.div
      initial={{ 
        x: `${config.x}vw`, 
        y: `${config.y}vh`, 
        opacity: 0,
        scale: 0 
      }}
      animate={{ 
        x: [
          `${config.x}vw`, 
          `${config.x + config.velocity.x * 100}vw`, 
          `${config.x}vw`
        ],
        y: [
          `${config.y}vh`, 
          `${config.y + config.velocity.y * 100}vh`, 
          `${config.y}vh`
        ],
        opacity: [0, 0.8, 0.8, 0],
        scale: [0, 1.2, 1.2, 0],
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        delay: config.delay,
        ease: "linear",
      }}
      style={{
        width: config.size,
        height: config.size,
        left: 0,
        top: 0,
      }}
      className={`absolute ${config.color} rounded-sm pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.4)] ${config.shadow} shadow-[0_0_15px_3px_currentColor]`}
    />
  );
};

export default function EnderParticles() {
  const [particles, setParticles] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setParticles(Array.from({ length: PARTICLE_COUNT }, (_, i) => i));

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#09061a]" />
      
      {/* Ambient Lighting - Sunset Theme */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-end/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-nether/20 rounded-full blur-[140px]" />
        <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-sky/20 rounded-full blur-[140px]" />
      </div>

      {/* Particle Field */}
      {particles.map((i) => (
        <Particle key={i} mouseX={mouseX} mouseY={mouseY} />
      ))}

      {/* Stronger Interactive mouse glow */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none border border-white/5"
      />
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-64 h-64 bg-end/10 rounded-full blur-[80px] pointer-events-none"
      />
    </div>
  );
}
