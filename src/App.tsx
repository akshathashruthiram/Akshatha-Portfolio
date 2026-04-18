/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  ArrowRight, 
  Instagram, 
  Globe, 
  Mail,
  ArrowDown,
  Smile,
  Heart,
  Sparkles,
  Palette,
  Pencil,
  Sun,
  Linkedin,
  Camera,
  X,
  Folder
} from 'lucide-react';

// --- Gallery Component ---

const AIGallery = ({ onClose }: { onClose: () => void }) => {
  const aiImages: string[] = [
    "https://raw.githubusercontent.com/akshathashruthiram/Akshatha-Portfolio/a1cc784e2a6f6d66b5ce9304d4b8f9cad85cb33d/Taste_the_Summer_Trend_version_1.png",
    "https://raw.githubusercontent.com/akshathashruthiram/Akshatha-Portfolio/a1cc784e2a6f6d66b5ce9304d4b8f9cad85cb33d/The_Morning_Prep_version_1.png",
    "https://raw.githubusercontent.com/akshathashruthiram/Akshatha-Portfolio/a1cc784e2a6f6d66b5ce9304d4b8f9cad85cb33d/The_Perfect_Tint_version_1.png",
    "https://raw.githubusercontent.com/akshathashruthiram/Akshatha-Portfolio/a1cc784e2a6f6d66b5ce9304d4b8f9cad85cb33d/Global_Glow_version_1.png",
    "https://raw.githubusercontent.com/akshathashruthiram/Akshatha-Portfolio/a1cc784e2a6f6d66b5ce9304d4b8f9cad85cb33d/The_Glazed_Finish_version_1.png",
    "https://raw.githubusercontent.com/akshathashruthiram/Akshatha-Portfolio/a1cc784e2a6f6d66b5ce9304d4b8f9cad85cb33d/pomelli-image%20(2).png",
    "https://raw.githubusercontent.com/akshathashruthiram/Akshatha-Portfolio//a1cc784e2a6f6d66b5ce9304d4b8f9cad85cb33d/pomelli-image.png",
    "https://raw.githubusercontent.com/akshathashruthiram/Akshatha-Portfolio/a1cc784e2a6f6d66b5ce9304d4b8f9cad85cb33d/pomelli-image%20(1).png",
    "https://raw.githubusercontent.com/akshathashruthiram/Akshatha-Portfolio/a1cc784e2a6f6d66b5ce9304d4b8f9cad85cb33d/pomelli-image%20(3).png",
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black text-white overflow-y-auto"
    >
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/20 px-6 py-8 flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-4xl md:text-6xl font-pixel distorted-text uppercase leading-none">AI CONTENT</h2>
          <p className="text-xs font-pixel opacity-50 uppercase tracking-widest">A creative exploration of AI-generated aesthetics</p>
        </div>
        <button 
          onClick={onClose}
          className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto p-6 md:p-12">
        {/* --- Folder Section: Brand Campaign --- */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row gap-8 items-end mb-16 border-b border-white/10 pb-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3 text-brand-blue">
                <Folder size={20} />
                <span className="font-pixel text-xs uppercase tracking-[0.2em]">PROJECT FOLDER</span>
              </div>
              <h3 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">
                Brand <br className="hidden md:block" /> campaign
              </h3>
            </div>
            <div className="max-w-md text-right">
              <p className="opacity-50 text-base md:text-lg leading-relaxed lowercase italic">
                A conceptual visual study focusing on high-fashion minimalism and product-centric storytelling through the lens of generative tools.
              </p>
            </div>
          </div>

          {aiImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiImages.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative aspect-[3/4] overflow-hidden border border-white/10 brutal-border bg-[#111]"
                >
                  <img 
                    src={src} 
                    alt={`AI Content ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-10">
                     <div className="bg-black/80 backdrop-blur-sm border border-white/20 px-2 py-1 text-[8px] font-pixel opacity-0 group-hover:opacity-100 transition-opacity">
                        CAMPAIGN_01 // ASSET_{idx + 1}
                     </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] font-pixel leading-tight uppercase opacity-60">Creative Articulation</p>
                    <p className="text-sm font-bold uppercase">Product Editorial Styling</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-40 flex flex-col items-center justify-center border border-dashed border-white/20 brutal-border bg-[#050505] text-center space-y-6">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center opacity-40">
                <Folder size={32} />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-pixel uppercase tracking-widest opacity-60">Folder Empty</h4>
                <p className="text-xs font-pixel uppercase tracking-widest opacity-30 italic">Curating experimental assets... Please check back soon.</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="py-24 border-t border-white/10 flex flex-col items-center gap-8">
          <div className="flex gap-4 items-center opacity-30 text-[10px] font-pixel mb-4">
             <div className="w-12 h-[1px] bg-white"></div>
             <span>END OF FOLDER</span>
             <div className="w-12 h-[1px] bg-white"></div>
          </div>
          <button 
            onClick={onClose}
            className="px-16 py-5 bg-white text-black font-bold uppercase tracking-[0.3em] hover:bg-brand-blue hover:text-white transition-all duration-300 sticker-shadow hover:-translate-y-2"
          >
            Back to Home
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- Helper Components ---

const Badge = ({ text, color = "bg-brand-yellow" }: { text: string, color?: string, key?: React.Key }) => (
  <div className={`${color} px-2 py-0.5 text-[10px] sm:text-xs font-bold border border-black tracking-widest uppercase inline-block`}>
    {text}
  </div>
);

const SocialIcon = ({ Icon, label, href }: { Icon: any, label: string, href: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative flex items-center justify-center">
      <motion.a
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.2 }}
        className="cursor-pointer hover:text-brand-pink transition-colors p-1"
      >
        <Icon size={12} />
      </motion.a>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 0, x: '-50%' }}
          animate={{ opacity: 1, y: -25, x: '-50%' }}
          className="absolute left-1/2 bg-black text-white text-[6px] font-pixel px-2 py-1 uppercase tracking-widest whitespace-nowrap pointer-events-none z-50 border border-white/20"
        >
          {label}
        </motion.div>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  if (!isMounted) return <div className="bg-[#f8f9fa] h-screen" />;

  return (
    <div className={`min-h-screen selection:bg-brand-blue selection:text-black bg-[#f8f9fa] ${activeCategory ? 'overflow-hidden' : ''}`}>
      
      {activeCategory === '02' && <AIGallery onClose={() => setActiveCategory(null)} />}
      {/* --- HERO SECTION (Minimal) --- */}
      <section className="relative h-screen flex items-center justify-center bg-[#f8f9fa] border-b-2 border-black overflow-hidden">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={{
             visible: { transition: { staggerChildren: 0.1 } }
           }}
           className="text-6xl sm:text-[11vw] lg:text-[16vw] font-pixel distorted-text uppercase tracking-tighter text-center relative z-10 max-w-full px-4 flex flex-nowrap whitespace-nowrap justify-center leading-none overflow-visible"
         >
           {"PORTFOLIO".split("").map((char, i) => (
             <motion.span
               key={i}
               variants={{
                 hidden: { y: 80, opacity: 0, scale: 1.2 },
                 visible: { y: 0, opacity: 1, scale: 1 }
               }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               whileHover={{ 
                 y: -30, 
                 scale: 1.1,
                 color: i % 2 === 0 ? "#fbcfe8" : "#93c5fd", // Pastel Pink and Blue
                 transition: { duration: 0.2, ease: "easeOut" } 
               }}
               className="inline-block cursor-default select-none"
             >
               {char}
             </motion.span>
           ))}
         </motion.div>
      </section>

      {/* --- MARQUEE (Pastel & Refined) --- */}
      <div className="bg-brand-pink border-b-2 border-black py-3 overflow-hidden flex whitespace-nowrap z-30 relative">
        <div className="animate-marquee flex gap-16 items-center">
          {Array(8).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-sm font-pixel uppercase tracking-widest">
                AI CONTENT • DIGITAL CREATION • GENERATIVE ART • VISUAL FUTURES
                
              </span>
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* --- ABOUT SECTION (Vertical 50/50 Split - Top/Bottom) --- */}
      <section id="about" className="relative border-b-2 border-black">
        <div className="flex flex-col min-h-screen">
          
          {/* Top Half: Bio Content */}
          <div className="h-1/2 min-h-[50vh] bg-black text-white p-10 md:p-20 lg:p-24 flex flex-col justify-center items-center text-center border-b-2 border-black">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl space-y-10"
            >
              <h2 className="text-5xl md:text-7xl lg:text-[6vw] font-pixel distorted-text uppercase leading-none">
                ABOUT
              </h2>
              
              <div className="space-y-6">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                  Akshatha Shruthi Ram
                </h3>
                <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto">
                  I'm a designer from Trivandrum, Kerala. 
                </p>
                <p className="text-base md:text-lg opacity-60 max-w-3xl mx-auto leading-relaxed">
                  With a deep passion for art, I've spent years exploring various mediums and techniques to develop my unique style. This portfolio showcases a selection of my favorite pieces that were created using AI, each one a reflection of my creative journey. I focus on building visuals that are both playful and structured.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Half: Portrait Visual */}
          <div className="h-1/2 min-h-[50vh] bg-white flex items-center justify-center p-10 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
               <div className="h-full w-full grid grid-cols-12 grid-rows-6">
                  {Array(72).fill(0).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-black"></div>
                  ))}
               </div>
            </div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full aspect-square max-w-[450px] relative sticker-shadow z-10 transition-transform duration-700 hover:scale-105"
              style={{ 
                maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' /%3E%3C/svg%3E")`,
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' /%3E%3C/svg%3E")`,
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                maskSize: 'contain',
                WebkitMaskSize: 'contain'
              }}
            >
              <img 
                src="https://raw.githubusercontent.com/akshathashruthiram/Akshatha-Portfolio/a1cc784e2a6f6d66b5ce9304d4b8f9cad85cb33d/IMG-20250131-WA0106.jpg" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>



      {/* --- CATEGORIES SECTION --- */}
      <section id="categories" className="bg-white border-b-2 border-black relative overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Header Panel */}
          <div className="w-full lg:w-1/3 p-10 md:p-16 lg:p-24 bg-black text-white flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-black">
             <h2 className="text-5xl md:text-7xl lg:text-[5vw] font-pixel distorted-text uppercase leading-none mb-8">
               CATEGORIES
             </h2>
             <p className="opacity-60 text-lg leading-relaxed max-w-sm">
               A breakdown of my creative expertise spanning across AI designs.
             </p>
          </div>

          {/* Grid Panel */}
          <div className="w-full lg:w-2/3 grid grid-cols-1">
            {[
              { id: '01', title: 'AI content', desc: 'Creative vision, branding & Concepts', color: 'bg-brand-yellow' }
            ].map((cat, idx) => (
              <motion.div 
                key={cat.id}
                onClick={() => {
                  setActiveCategory('02');
                }}
                whileHover={{ backgroundColor: 'rgb(0,0,0)', color: 'rgb(255,255,255)' }}
                className={`p-12 border-b-2 last:border-b-0 border-black flex flex-col justify-between min-h-[400px] cursor-pointer group transition-colors duration-300`}
              >
                <div className="flex justify-between items-start">
                   <span className="font-pixel text-xs opacity-40 group-hover:opacity-100">{cat.id}</span>
                   <div className="w-8 h-8 rounded-full border border-black group-hover:border-white p-2">
                      <div className={`w-full h-full rounded-full ${cat.color} group-hover:bg-white`}></div>
                   </div>
                </div>
                <div className="space-y-2">
                   <h4 className="text-3xl font-bold uppercase tracking-tighter">{cat.title}</h4>
                   <p className="opacity-50 group-hover:opacity-70 text-sm tracking-widest uppercase">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (#04) --- */}
      <footer id="contact" className="bg-brand-blue/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 -translate-x-1/2">
           <Smile size={400} />
        </div>
        <div className="max-w-7xl mx-auto py-24 sm:py-32 px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/2 relative">
              <h2 className="text-5xl md:text-8xl font-pixel distorted-text mb-12 uppercase leading-none">
                SAY HI!
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                   <p className="text-xl md:text-2xl font-bold uppercase tracking-widest leading-tight">
                     Let's bring your vision to life.
                   </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full relative">
              <div className="bg-white brutal-border p-10 relative">
                <p className="text-base md:text-lg font-pixel mb-8 uppercase leading-tight">
                  Available for freelance projects <br />
                  and artistic collaborations.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between border-b border-black/10 py-2">
                    <span className="font-pixel text-[10px] opacity-40">EMAIL</span>
                    <span className="font-bold cursor-pointer hover:underline">akshatha.shruthiram@gmail.com</span>
                  </div>
                  <div className="flex justify-between border-b border-black/10 py-2">
                    <span className="font-pixel text-[10px] opacity-40">LOCATION</span>
                    <span className="font-bold">TRIVANDRUM, KERALA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-4 px-6 flex justify-between items-center text-[8px] font-pixel border-t-2 border-black">
          <span>AKSHATHA SHRUTHI RAM © 2026</span>
          <div className="flex gap-4">
            <SocialIcon Icon={Instagram} label="Instagram" href="https://instagram.com/layoverd" />
            <SocialIcon Icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/akshatha-shruthi-ram-b56865359/" />
          </div>
          <span>STAY CREATIVE :)</span>
        </div>
      </footer>
    </div>
  );
}
