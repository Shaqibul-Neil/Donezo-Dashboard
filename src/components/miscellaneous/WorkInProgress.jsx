import { motion } from "framer-motion";
import { Construction, Hammer, Wrench } from "lucide-react";
import { Link } from "react-router";

const WorkInProgress = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative  text-center max-w-lg"
      >
        {/* Icon Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
          className="relative mx-auto mb-8 w-28 h-28"
        >
          {/* Animated Ring */}
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-green-400/20 to-emerald-500/20 animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-linear-to-br from-green-50 to-emerald-50 border border-green-100" />

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Construction
              size={40}
              className="text-[#008F5D]"
              strokeWidth={1.5}
            />
          </div>

          {/* Orbiting Icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded-xl shadow-lg shadow-slate-100 border border-slate-50">
              <Hammer size={14} className="text-[#008F5D]" />
            </div>
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded-xl shadow-lg shadow-slate-100 border border-slate-50">
              <Wrench size={14} className="text-gray-600" />
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <span className="inline-block text-[0.65rem] font-black uppercase tracking-[0.25em] text-[#008F5D] bg-[#FAFBFC] px-4 py-2 rounded-full">
            Coming Soon
          </span>

          <h1 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight">
            We're Building
            <br />
            <span className="text-[#008F5D]">Something Great</span>
          </h1>

          <p className="text-gray-600 font-medium text-sm leading-relaxed max-w-sm mx-auto">
            This feature is currently under construction. We're crafting
            something clean, fast, and genuinely useful for you.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 space-y-3"
        >
          {/* Progress Bar */}
          <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-linear-to-r from-[#008F5D] to-emerald-400 rounded-full"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#008F5D] animate-pulse" />
            <span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-widest">
              Development in progress
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/dashboard"
            className="flex items-center gap-2 h-10 lg:h-12 rounded-full font-bold text-[14px] transition-all duration-500 active:scale-95 shadow-sm cursor-pointer justify-center hover:-translate-y-1 bg-[#0D442A]"
          >
            Back to Dashboard
          </Link>
        </motion.div>

        {/* Bottom Decorative Text */}
        {/* Bottom Decorative Element (Consistent with Donezo branding) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center gap-2 justify-center"
        >
          <span className="h-px w-4 bg-[#008F5D]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#008F5D]">
            Donezo
          </span>
          <span className="h-px w-4 bg-[#008F5D]" />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default WorkInProgress;
