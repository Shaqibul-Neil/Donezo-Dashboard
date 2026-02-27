import { motion, AnimatePresence } from "framer-motion";

export const DropdownContainer = ({ isOpen, icon: Icon, title, subTitle }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute top-14 right-0 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 p-6 text-center"
      >
        <div className="w-12 h-12 bg-[#F1F8F1] rounded-full flex items-center justify-center mx-auto mb-3">
          {Icon && <Icon size={24} className="text-[#006442] opacity-40" />}
        </div>
        <p className="text-sm font-bold text-gray-800">{title}</p>
        <p className="text-xs text-gray-400 mt-1">{subTitle}</p>
      </motion.div>
    )}
  </AnimatePresence>
);
