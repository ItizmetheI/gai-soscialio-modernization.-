import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, TrendingUp, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  // Setup subtle scroll-triggered parallax
  const { scrollY } = useScroll();
  
  // Text moves down slightly as you scroll (slower than default scroll)
  const yText = useTransform(scrollY, [0, 800], [0, 120]);
  
  // Background phone moves up slightly
  const yPhone = useTransform(scrollY, [0, 800], [0, -40]);
  
  // Floating badges move up faster, creating depth
  const yBadgeFast = useTransform(scrollY, [0, 800], [0, -120]);
  const yBadgeMedium = useTransform(scrollY, [0, 800], [0, -80]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#Fcfcfc] flex items-center pt-24 pb-12">
      {/* Pristine, minimal background */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-violet-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="max-w-[85rem] mx-auto w-full px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Copy: Ultra-clean, high-end typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: yText }}
          className="flex flex-col items-start text-left z-20"
        >
          <div className="flex items-center gap-2 mb-8 px-4 py-2 bg-white rounded-full border border-stone-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-600">
              The Full-Stack Growth Agency
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-display font-medium tracking-tight text-balance leading-[1.05] text-stone-950 mb-6">
            We don't just post. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 italic pr-2">We engineer growth.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-500 max-w-lg text-balance font-light leading-relaxed mb-10">
            From scroll-stopping UGC to dominant SEO backlinks and end-to-end account management. We are the growth engine for modern brands.
          </p>

          <MagneticButton intensity={0.15} className="group relative px-8 py-4 bg-stone-950 text-white rounded-full font-medium tracking-wide shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all overflow-hidden flex items-center gap-3">
            <span className="relative z-10">Start Scaling</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
          </MagneticButton>
        </motion.div>

        {/* Right Visual: Clean, composed, parallax depth */}
        <div className="hidden lg:flex relative w-full h-[700px] items-center justify-center pointer-events-none">
          
          {/* Main UGC Phone Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yPhone }}
            className="relative w-[320px] h-[650px] bg-stone-950 rounded-[48px] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-stone-800 z-10"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-stone-950 rounded-b-[24px] z-30 flex justify-center items-center">
              <div className="w-16 h-1.5 rounded-full bg-stone-900" />
            </div>

            {/* Screen Content */}
            <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" 
                alt="UGC Creator" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Minimal Social UI */}
              <div className="absolute bottom-6 left-5 right-5 text-white z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full border border-white/40 overflow-hidden bg-stone-400">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm font-semibold shadow-black drop-shadow-md">@brand_partner</span>
                </div>
                <p className="text-xs text-white/90 line-clamp-2 leading-relaxed font-light">
                  This new skincare routine is absolutely incredible. The results speak for themselves ✨ #ugc #skincare
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 1: SEO & Backlinks (Fast Parallax) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yBadgeFast }}
            className="absolute top-[25%] -right-12 z-20 w-[240px] bg-white rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-stone-100"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-violet-600" />
              </div>
              <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">+412 Links</span>
            </div>
            <div className="text-sm font-semibold text-stone-900">SEO & Backlinks</div>
            <div className="text-xs text-stone-500 mt-1">High DR contextual links</div>
          </motion.div>

          {/* Floating Element 2: Account Management (Medium Parallax) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: yBadgeMedium }}
            className="absolute bottom-[20%] -left-16 z-20 w-[240px] bg-stone-950 text-white rounded-2xl p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-stone-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center">
                <LayoutGrid className="w-4 h-4 text-stone-300" />
              </div>
              <div className="text-sm font-semibold">Account Mgmt</div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-stone-900 border border-stone-800">
              <CheckCircle2 className="w-4 h-4 text-violet-500" />
              <span className="text-xs font-medium text-stone-300">Content Scheduled</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
