"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Cpu, Globe, Terminal, Camera, Headphones, ArrowUpRight, Sparkles, Cat, Mail } from "lucide-react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // تتبع حركة الماوس بنعومة فائقة (Smooth Mouse Springs)
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // محاكاة تحميل الموقع (Preloader)
    setTimeout(() => setIsLoaded(true), 2500);

    const handleMouseMove = (e: MouseEvent) => {
      // تعديل إحداثيات الماوس
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // تأثيرات تعتمد على الماوس (Parallax, Masking)
  const backgroundMask = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.4), transparent 80%)`
  );

  return (
    <main className="min-h-screen bg-[#020202] text-[#e0e0e0] font-sans overflow-x-hidden selection:bg-purple-500/30 relative">

      {/* 1. PRELOADER & WOW INTRO (الدخلة السينمائية) */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center flex-col gap-4"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full"/>
            <p className="text-xs font-mono tracking-[0.5em] text-gray-600 uppercase">MOHAMED HAMDY • 100% PERFORMANCE</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {/* 2. HEADER/NAVBAR */}
        <nav className="flex justify-between items-center p-8 opacity-80 backdrop-blur-md sticky top-0 z-30 border-b border-white/5 bg-[#020202]/50">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="font-black tracking-tighter text-3xl uppercase text-white cursor-pointer">MH.</motion.div>
          <div className="flex gap-4 text-xs font-mono tracking-widest uppercase">
            <span>Sidi Bishr, Alexandria</span>
            <span className="hidden md:inline text-purple-400">• Available for AI Projects</span>
          </div>
        </nav>

        {/* 3. HERO AREA WITH MOUSE SPOTLIGHT (تأثير الكشاف المبهر) */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative group" ref={containerRef}>
          {/* خلفية كشاف النور اللي بيمشي ورا الماوس */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            style={{ background: backgroundMask }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 2.8, ease: [0.19, 1, 0.22, 1] }}
            className="text-center z-10 relative"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/5 rounded-full bg-white/5 backdrop-blur-xl text-purple-400 text-[10px] mb-8 tracking-[0.3em] uppercase font-bold shadow-xl">
              <Sparkles size={12} className="animate-spin-slow" />
              AI Engineer & QA Expert • CCIT Student @ AASTMT
            </div>

            {/* اسمك العملاق الشفاف اللي النور بيكشفه */}
            <h1 className="text-[12vw] md:text-[15vw] leading-[0.8] font-black tracking-tighter uppercase relative z-10 flex flex-col backdrop-blur-[2px]">
              <span className="text-white group-hover:text-purple-400 transition-colors duration-500">MOHAMED</span>
              <span className="ml-auto text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white italic">HAMDY</span>
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ delay: 3.5 }} className="max-w-xl text-gray-500 text-lg md:text-xl mx-auto mt-12 leading-relaxed font-light tracking-wide">
              Crafting <strong className="text-white font-normal">High-Performance AI</strong> & <strong className="text-white font-normal">Automated QA Cycles</strong>. 19 Y/O Software Pioneer.
            </motion.p>
          </motion.div>
        </section>

        {/* 4. The Interactive Bento Grid (توزيع الداتا الاحترافي) */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[repeat(6,1fr)] gap-5 auto-rows-[160px]">

            {/* AetherCode AI - Glass Card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              className="md:col-span-8 md:row-span-2 p-10 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-xl flex flex-col justify-end group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-700 group-hover:rotate-12">
                <Cpu size={180} />
              </div>
              <Cpu className="text-purple-400 mb-6" size={48} />
              <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">AetherCode AI</h3>
              <p className="text-gray-300 text-lg max-w-md font-light leading-relaxed">
                Exploring Image Synthesis Frontier. <span className="text-purple-400 font-medium">LoRA</span> & <span className="text-purple-400 font-medium">Flux</span> optimization.
              </p>
            </motion.div>

            {/* SilentAlgo - Visual Branding */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="md:col-span-4 md:row-span-2 p-8 rounded-3xl bg-[#ff0033]/5 border border-[#ff0033]/20 backdrop-blur-md flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <Headphones size={60} className="text-[#ff0033] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-black tracking-tighter italic uppercase text-[#ff0033]">SilentAlgo</h3>
              <p className="text-gray-400 text-sm mt-2">Content Branding & Silent Gameplay (Mokali)</p>
            </motion.div>

            {/* QA Expert - Status Card */}
            <motion.div
              className="md:col-span-4 md:row-span-1 p-8 rounded-2xl bg-green-500/5 border border-green-500/10 flex items-center gap-6 group"
            >
              <div className="relative">
                <Terminal className="text-green-500 group-hover:animate-pulse" size={40} />
                <div className="absolute inset-0 bg-green-500/20 blur-2xl group-hover:bg-green-500/40 transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">QA EXPERT</h3>
                <p className="text-gray-500 text-[10px] font-mono mt-1 uppercase tracking-widest">uTest // Hive Micro // Mindrift</p>
              </div>
            </motion.div>

            {/* Streetlore Card */}
            <motion.div
              className="md:col-span-4 md:row-span-1 p-8 rounded-2xl bg-blue-600/5 border border-blue-600/10 flex items-center gap-6"
            >
              <Globe className="text-blue-500" size={32} />
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">Streetlore</h3>
                <p className="text-gray-500 text-[10px] mt-1 font-light italic leading-relaxed">Historical exploration app blending heritage with technology.</p>
              </div>
            </motion.div>

            {/* Digital Stock Card */}
            <motion.div
              className="md:col-span-4 md:row-span-1 p-8 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex items-center gap-6"
            >
              <Camera className="text-orange-500" size={32} />
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400">STOCK ASSETS</h3>
                <p className="text-gray-500 text-[10px] mt-1 font-mono uppercase tracking-widest">Adobe Stock // Shutterstock // 123RF</p>
              </div>
            </motion.div>

            {/* Final Call to Action - Big White Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-12 p-8 rounded-3xl bg-white text-black flex items-center justify-between gap-8 mt-4"
            >
              <div>
                <h3 className="text-3xl font-black leading-none uppercase">BUILDING THE FUTURE?</h3>
                <p className="text-gray-600 mt-2 font-medium">Available for AI Freelancing & Automated Software Testing.</p>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/silentalgo" className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                  {/* Inline SVG GitHub */}
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="#" className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                  <Mail />
                </a>
                <a href="#" className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-all uppercase">
                  Resume
                </a>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 5. Footer */}
        <footer className="text-center pb-12 opacity-30 hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
          <div className="h-px w-20 bg-white/50 mb-4" />
          <p className="text-[10px] tracking-[0.5em] font-bold">COLLEGE OF COMPUTING • CCIT • AASTMT</p>
          <p className="text-[10px] tracking-[0.2em] opacity-50 uppercase flex items-center gap-1">Expected 2028 • Bakos, Alex <Cat size={10}/></p>
        </footer>
      </div>
    </main>
  );
}