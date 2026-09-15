import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function DeviceSequence() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Increased mass for a heavier, more cinematic feel
  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 80, mass: 0.5 });

  // 1. Entrance (0 - 0.15)
  const phoneRotateX = useTransform(smoothProgress, [0, 0.15], [45, 0]);
  const phoneY = useTransform(smoothProgress, [0, 0.15], ["30vh", "0vh"]);
  
  // Glare effect mapping based on phone rotation
  const glareY = useTransform(phoneRotateX, [45, 0], ["100%", "-100%"]);

  // 2. Scrolling the Reels (0.25 - 0.55)
  const reelsY = useTransform(
    smoothProgress, 
    [0.15, 0.25, 0.35, 0.45, 0.55], 
    ["0%", "0%", "-33.33%", "-33.33%", "-66.66%"]
  );

  // 3. The Engulfing Zoom / Portal (0.65 - 0.95)
  // Exponential mapping: starts slow, accelerates massively into the camera
  const phoneScale = useTransform(smoothProgress, [0.65, 0.75, 0.85, 0.95], [1, 3, 20, 200]);
  const phoneBorderOpacity = useTransform(smoothProgress, [0.65, 0.75], [1, 0]);
  const phoneRadius = useTransform(smoothProgress, [0.65, 0.8], ["54px", "0px"]);
  const innerRadius = useTransform(smoothProgress, [0.65, 0.8], ["44px", "0px"]);
  
  // 4. "socialio" Text animation inside the phone
  const textOpacity = useTransform(smoothProgress, [0.75, 0.85], [1, 0]);
  const textScale = useTransform(smoothProgress, [0.75, 0.9], [1, 8]);
  const textBlur = useTransform(smoothProgress, [0.75, 0.85], ["blur(0px)", "blur(20px)"]);
  const textTracking = useTransform(smoothProgress, [0.75, 0.85], ["-0.05em", "0.2em"]); // Spreads apart as it vanishes

  // 5. Hard black fade to ensure the seam between this and DigitalWorld is invisible
  const bgOpacity = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="h-[600vh] relative bg-stone-50">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-[1200px]">
        
        {/* Absolute black backing to act as the seam hider */}
        <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 bg-stone-950 z-0 pointer-events-none" />

        {/* Phase Text */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0.05, 0.15, 0.6, 0.65], [0, 1, 1, 0]) }} 
          className="absolute top-12 max-w-2xl text-center z-0"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-4">Phase 1: Content Delivery</h2>
          <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-display text-stone-900 tracking-tight text-balance">Seamless, high-retention native content.</p>
        </motion.div>

        {/* The Device */}
        <motion.div 
          style={{ 
            rotateX: phoneRotateX, 
            y: phoneY, 
            scale: phoneScale,
            borderRadius: phoneRadius,
            borderColor: `rgba(28, 28, 26, ${phoneBorderOpacity})`,
            borderWidth: "1px",
            borderStyle: "solid"
          }}
          className="relative w-[320px] h-[680px] bg-stone-900 p-[10px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] z-10 origin-center will-change-transform"
        >
          {/* Inner Screen */}
          <motion.div 
            style={{ borderRadius: innerRadius }}
            className="relative w-full h-full bg-stone-100 overflow-hidden"
          >
            {/* Dynamic Glass Glare */}
            <motion.div 
              style={{ top: glareY }}
              className="absolute left-0 right-0 h-[150%] bg-gradient-to-b from-transparent via-white/10 to-transparent -rotate-12 pointer-events-none z-40 mix-blend-overlay"
            />

            {/* Dynamic Island */}
            <motion.div 
              style={{ opacity: useTransform(smoothProgress, [0.6, 0.65], [1, 0]) }}
              className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[32px] bg-stone-950 rounded-[20px] z-30 shadow-sm flex items-center justify-end px-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse opacity-80" />
            </motion.div>

            {/* Reels Track */}
            <motion.div style={{ y: reelsY }} className="w-full h-[300%] flex flex-col will-change-transform">
              
              {/* Reel 1 */}
              <div className="w-full h-1/3 bg-[#EAE7E0] relative flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30 mix-blend-multiply" />
                <div className="relative z-10 text-center">
                  <h3 className="text-5xl font-display font-medium text-stone-900 tracking-tighter mb-2">Stop</h3>
                  <p className="text-sm font-medium text-stone-500 uppercase tracking-widest">The Scroll</p>
                </div>
                <InteractiveOverlay dark />
              </div>

              {/* Reel 2 */}
              <div className="w-full h-1/3 bg-[#8B5CF6] relative flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30 mix-blend-multiply" />
                <div className="relative z-10 text-center">
                  <h3 className="text-5xl font-display font-medium text-stone-50 tracking-tighter mb-2">Engage</h3>
                  <p className="text-sm font-medium text-white/70 uppercase tracking-widest">The Mind</p>
                </div>
                <InteractiveOverlay />
              </div>

              {/* Reel 3 - The Gateway */}
              <div className="w-full h-1/3 bg-stone-950 relative flex items-center justify-center p-6 overflow-hidden">
                <motion.div 
                  style={{ opacity: textOpacity, scale: textScale, filter: textBlur, letterSpacing: textTracking }}
                  className="relative z-10 flex flex-col items-center justify-center origin-center"
                >
                  <h1 className="text-5xl font-display font-semibold text-stone-50 mix-blend-difference">
                    socialio
                  </h1>
                </motion.div>
                
                {/* Core ambient glow inside the device that fades away leaving pure black */}
                <motion.div 
                  style={{ opacity: textOpacity }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-10 h-10 shadow-[0_0_120px_60px_rgba(139,92,246,0.2)] rounded-full mix-blend-screen" />
                </motion.div>
              </div>

            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

function InteractiveOverlay({ dark }: { dark?: boolean }) {
  const color = dark ? "text-stone-900" : "text-stone-50";
  const [likes, setLikes] = useState(124);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <>
      <div className={`absolute right-4 bottom-24 flex flex-col gap-5 items-center ${color} z-20`}>
        <div className="flex flex-col items-center gap-1">
          <MagneticButton onClick={handleLike} intensity={0.4} className="p-2 hover:scale-110 transition-transform cursor-pointer">
            <Heart className="w-7 h-7" strokeWidth={1.5} fill={isLiked ? "currentColor" : "none"} />
          </MagneticButton>
          <span className="text-[10px] font-medium">{likes}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <MagneticButton intensity={0.4} className="p-2 hover:scale-110 transition-transform cursor-pointer">
            <MessageCircle className="w-7 h-7" strokeWidth={1.5} />
          </MagneticButton>
          <span className="text-[10px] font-medium">42</span>
        </div>
        <MagneticButton intensity={0.4} className="p-2 hover:scale-110 transition-transform cursor-pointer mt-2">
          <Share2 className="w-7 h-7" strokeWidth={1.5} />
        </MagneticButton>
        <MagneticButton intensity={0.4} className="p-2 hover:scale-110 transition-transform cursor-pointer">
          <Bookmark className="w-7 h-7" strokeWidth={1.5} />
        </MagneticButton>
      </div>
      
      <div className="absolute left-6 bottom-12 right-20 z-20">
        <div className={`w-full h-[1px] bg-current opacity-20 mb-4`} />
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full border border-current opacity-40 flex items-center justify-center p-1 cursor-pointer hover:opacity-100 transition-opacity`}>
             <div className="w-full h-full rounded-full bg-current opacity-60" />
          </div>
          <div className="flex flex-col gap-1">
            <div className={`h-2 rounded-full bg-current opacity-40 w-24`} />
            <div className={`h-1.5 rounded-full bg-current opacity-20 w-16`} />
          </div>
        </div>
      </div>
    </>
  );
}
