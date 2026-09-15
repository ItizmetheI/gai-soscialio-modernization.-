import { motion, useInView, useMotionValue, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';
import { ArrowRight, BarChart3, Fingerprint, Terminal, Maximize2 } from 'lucide-react';

export function DigitalWorld() {
  return (
    <section className="min-h-screen bg-stone-950 text-stone-50 py-32 px-6 relative overflow-hidden flex flex-col items-center noise-bg">
      
      {/* Dark Grid Overlay */}
      <div className="absolute inset-0 bg-grid-dark z-0 opacity-40 pointer-events-none" />
      
      {/* Abstract Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#8B5CF6]/10 blur-[150px] rounded-[100%] pointer-events-none mix-blend-screen" />

      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col items-center">
        
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-stone-800 pb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#8B5CF6] font-semibold tracking-[0.2em] uppercase text-xs block mb-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              Module 02: Analytics
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight leading-[1.1] text-stone-100 max-w-2xl">
              From fleeting views <br className="hidden md:block" />to compounded retention.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start md:items-end"
          >
            <p className="text-stone-400 max-w-xs text-left md:text-right text-balance font-light mb-6 text-sm">
              Our architecture transforms passive scrolling into active, measurable participation loops.
            </p>
            <MagneticButton intensity={0.3} className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 border border-stone-800 rounded-full hover:bg-stone-800 transition-colors text-stone-100">
              <span className="text-xs font-semibold uppercase tracking-widest">View API Docs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Dashboard Visualization */}
        <div className="w-full grid lg:grid-cols-3 gap-6">
          
          {/* Main Chart Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 bg-stone-900/40 border border-stone-800/60 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group flex flex-col"
          >
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-semibold text-stone-500 mb-2">Session Duration Multiplier</h3>
                <div className="flex items-end gap-3">
                  <div className="text-6xl font-display font-medium text-stone-100 leading-none">3.4x</div>
                  <div className="text-sm text-[#8B5CF6] font-medium mb-1">+124% vs Standard</div>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-center shadow-inner">
                <BarChart3 className="w-5 h-5 text-stone-400" />
              </div>
            </div>
            
            {/* Animated Chart SVG */}
            <div className="w-full h-48 relative mt-auto z-10">
              <AnimatedChart />
            </div>

            {/* Hover overlay code snippet */}
            <div className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center p-8">
              <div className="w-full h-full bg-stone-900 border border-stone-800 rounded-xl p-6 font-mono text-xs text-stone-400 overflow-hidden relative">
                <div className="absolute top-4 right-4"><Terminal className="w-4 h-4 text-stone-500" /></div>
                <div className="text-[#8B5CF6]">POST /api/v1/retention/metrics</div>
                <div className="mt-2 text-stone-300">{"{"}</div>
                <div className="ml-4 text-stone-500">"target_kw": "best_brand",</div>
                <div className="ml-4 text-stone-500">"backlinks_built": 412,</div>
                <div className="ml-4 text-stone-500">"ranking_factors": [</div>
                <div className="ml-8 text-stone-600">"DA_80+", "do_follow", "relevance"</div>
                <div className="ml-4 text-stone-500">]</div>
                <div className="text-stone-300">{"}"}</div>
                <div className="mt-4 text-green-500">200 OK - SERP Rank +12</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-6">
            
            <MetricCard 
              icon={<Fingerprint />}
              title="Audience Reach"
              value="89%"
              sub="Total cross-platform brand impressions"
              delay={0.2}
            />

            {/* Interactive Draggable Weight Controller */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 bg-stone-900/40 border border-[#8B5CF6]/20 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-3xl" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[#8B5CF6]">Content Velocity</h3>
                <Maximize2 className="w-4 h-4 text-[#8B5CF6]" />
              </div>

              <div className="relative z-10">
                <div className="text-3xl font-display font-medium text-stone-100 mb-6 flex items-end gap-2">
                  Post Frequency
                </div>
                
                {/* Draggable Slider */}
                <DraggableSlider />

                <div className="text-xs text-stone-500 font-medium mt-6">Drag to adjust content output</div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Live Stream Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mt-6 bg-stone-900/30 border border-stone-800/50 rounded-2xl p-4 backdrop-blur-md flex items-center justify-between overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-stone-400">WS_CONNECTED // LIVE_EVENTS</span>
          </div>
          <LiveTicker />
        </motion.div>

      </div>
    </section>
  );
}

function DraggableSlider() {
  const [value, setValue] = useState(75);
  const dragX = useMotionValue(0);
  const transformWidth = useTransform(dragX, [0, 200], [0, 100]);
  
  // Convert px drag to percentage roughly
  useEffect(() => {
    return dragX.onChange((v) => {
      const percentage = Math.max(0, Math.min(100, (v / 200) * 100));
      setValue(Math.round(percentage));
    });
  }, [dragX]);

  return (
    <div className="w-full relative py-4">
      <div className="w-[200px] h-1.5 bg-stone-800 rounded-full relative">
        <motion.div 
          style={{ width: `${value}%` }} 
          className="absolute top-0 left-0 h-full bg-[#8B5CF6] rounded-full" 
        />
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 200 }}
          dragElastic={0}
          dragMomentum={false}
          style={{ x: dragX }}
          className="absolute top-1/2 -mt-3 -ml-3 w-6 h-6 bg-stone-100 rounded-full shadow-lg border border-stone-300 flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
        >
          <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
        </motion.div>
      </div>
      <div className="absolute top-10 right-8 text-2xl font-mono text-stone-300">{value}%</div>
    </div>
  );
}

function LiveTicker() {
  const [events, setEvents] = useState<string[]>(["user_joined: 981", "dwell_time_updated", "interaction_logged"]);
  
  useEffect(() => {
    const actions = ["like_received", "scroll_paused", "profile_view", "habit_loop_triggered", "dwell_time_+2s"];
    const interval = setInterval(() => {
      const newAction = actions[Math.floor(Math.random() * actions.length)];
      setEvents(prev => [newAction, ...prev].slice(0, 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-6 text-xs font-mono text-stone-500 overflow-hidden w-2/3 justify-end mask-fade-left">
      {events.map((ev, i) => (
        <motion.div 
          key={ev + i} 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1 - (i * 0.3), x: 0 }}
          className="whitespace-nowrap"
        >
          {ev}
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="w-full h-full">
      <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible" preserveAspectRatio="none">
        
        {/* Grid lines */}
        <line x1="0" y1="150" x2="400" y2="150" stroke="#2A2A28" strokeWidth="1" />
        <line x1="0" y1="75" x2="400" y2="75" stroke="#2A2A28" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="0" y1="0" x2="400" y2="0" stroke="#2A2A28" strokeWidth="1" strokeDasharray="4 4" />

        {/* Standard Model Line */}
        <motion.path 
          d="M 0 130 C 100 120, 200 125, 400 110" 
          fill="none" 
          stroke="#40403C" 
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Socialio Magnetic Line */}
        <motion.path 
          d="M 0 130 C 50 110, 150 40, 250 30 S 350 10, 400 5" 
          fill="none" 
          stroke="#8B5CF6" 
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />

        {/* Gradient Fill under Magnetic Line */}
        <motion.path 
          d="M 0 130 C 50 110, 150 40, 250 30 S 350 10, 400 5 L 400 150 L 0 150 Z" 
          fill="url(#chart-gradient)" 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />

        <defs>
          <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MetricCard({ title, value, sub, delay, icon }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 rounded-3xl p-8 backdrop-blur-xl bg-stone-900/40 border border-stone-800/60 flex flex-col justify-between group hover:bg-stone-800/40 transition-colors"
    >
      <div className="flex justify-between items-start mb-8">
        <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-500">{title}</h3>
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-stone-950 border border-stone-800 text-stone-400 group-hover:text-[#8B5CF6] transition-colors">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-4xl font-display font-medium mb-2 text-stone-100">{value}</div>
        <div className="text-sm text-stone-500 font-light">{sub}</div>
      </div>
    </motion.div>
  );
}
