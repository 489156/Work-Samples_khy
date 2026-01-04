import { motion } from "motion/react";
import { CoreCompetency } from "../data/portfolio-data";

interface HeroSectionProps {
  positioning: string;
  competencies: CoreCompetency[];
}

export function HeroSection({ positioning, competencies }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col justify-between p-6 md:p-12 lg:p-16 xl:p-24">
      {/* Top Positioning Statement */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 text-cyan-400 tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase"
          >
            Senior Consultant
          </motion.div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
            {positioning}
          </h1>
        </div>
      </motion.div>

      {/* Core Competencies */}
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-6 md:mb-8 text-cyan-400 tracking-wider md:tracking-widest text-xs uppercase"
        >
          Core Competencies
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {competencies.map((competency, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="border-l-2 border-cyan-500 pl-4 md:pl-6 hover:border-cyan-400 transition-all duration-300">
                <h3 className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {competency.title}
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  {competency.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}