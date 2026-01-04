import { motion } from "motion/react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onNavigate: (page: number) => void;
}

export function Navigation({ currentPage, totalPages, onNavigate }: NavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4"
    >
      {/* Up Button */}
      <button
        onClick={() => onNavigate(currentPage - 1)}
        disabled={currentPage === 0}
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentPage === 0
            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
            : "bg-slate-950 text-cyan-400 hover:bg-cyan-500 hover:text-white shadow-lg hover:shadow-2xl active:scale-95"
        }`}
        aria-label="Previous page"
      >
        <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Page Indicators */}
      <div className="flex flex-col gap-2 items-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentPage
                ? "w-2.5 h-7 md:w-3 md:h-8 bg-cyan-500"
                : "w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-300 hover:bg-slate-400 active:scale-125"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Down Button */}
      <button
        onClick={() => onNavigate(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentPage === totalPages - 1
            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
            : "bg-slate-950 text-cyan-400 hover:bg-cyan-500 hover:text-white shadow-lg hover:shadow-2xl active:scale-95"
        }`}
        aria-label="Next page"
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Page Counter */}
      <div className="text-center text-xs mt-1 md:mt-2">
        <div className="text-slate-950">{currentPage + 1}</div>
        <div className="text-slate-400 text-[10px] md:text-xs">/ {totalPages}</div>
      </div>
    </motion.div>
  );
}