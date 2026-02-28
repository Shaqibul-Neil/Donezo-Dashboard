import React from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "../button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-6 bg-[#FAFBFC] selection:bg-[#006442] selection:text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-96 flex flex-col items-center text-center z-20"
      >
        <div className="mb-14">
          <motion.h1
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.6em", opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-7xl md:text-8xl font-black text-[#002B1B] uppercase mb-3 leading-none ml-[0.6em]"
            aria-label="404 Error"
          >
            404
          </motion.h1>
          <p className="text-[#002B1B]/40 text-[10px] font-black uppercase tracking-[0.8em] ml-[0.8em]">
            Page Not Found
          </p>
        </div>

        <div className="space-y-6 w-full max-w-72">
          <p className="text-gray-500 text-sm font-medium leading-relaxed">
            The page you're looking for was moved, removed, or never existed in
            the Donezo universe.
          </p>

          <Button
            text="Return Home"
            variant="primary"
            icon={Home}
            className="w-full rounded-2xl h-13 font-black text-lg"
            onClick={() => navigate("/dashboard")}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
