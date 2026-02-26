import React from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Button from "../../components/button/Button";
import LightPillar from "../../components/animations/LightPillar";

const Login = () => {
  const handleLogin = (e) => e.preventDefault();

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-6 selection:bg-[#006442] selection:text-white bg-[#FAFBFC]">
      {/* 1. High-Motion Background Animation - Optimized for White Screen */}
      <div className="absolute inset-0 z-10">
        <LightPillar
          topColor="#006442"
          bottomColor="#74C29B"
          intensity={0.6} // Slightly lower intensity for white background elegance
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="multiply"
          quality="high"
        />
        {/* Transparent layering for depth */}
      </div>

      {/* 2. Ultra-Minimalist Transparent Login Form - Dark Green Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-85 flex flex-col items-center justify-center text-center z-20"
      >
        <div className="mb-14">
          <motion.h1
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.6em", opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black text-[#002B1B] uppercase mb-3 leading-none ml-[0.6em]"
          >
            DONEZO
          </motion.h1>
          <p className="text-[#002B1B]/40 text-[10px] font-black uppercase tracking-[0.8em] ml-[0.8em]">
            Authentication
          </p>
        </div>

        <form
          className="w-full space-y-10"
          onSubmit={handleLogin}
          autoComplete="off"
        >
          {/* Email Input - Dark Green Theme */}
          <div className="relative group border-b-2 border-[#002B1B]/10 focus-within:border-[#002B1B] transition-all duration-500">
            <Mail
              className="absolute left-0 top-1/2 -translate-y-1/2 text-[#002B1B]/20 group-focus-within:text-[#006442] transition-colors"
              size={14}
            />
            <input
              type="email"
              placeholder="EMAIL"
              autoComplete="off"
              className="w-full bg-transparent border-none py-3 pl-8 pr-2 text-[12px] font-bold text-[#002B1B] focus:outline-none placeholder:text-[#002B1B]/40 tracking-[0.2em] transition-all"
            />
          </div>

          {/* Password Input - Dark Green Theme */}
          <div className="relative group border-b-2 border-[#002B1B]/10 focus-within:border-[#002B1B] transition-all duration-500">
            <Lock
              className="absolute left-0 top-1/2 -translate-y-1/2 text-[#002B1B]/20 group-focus-within:text-[#006442] transition-colors"
              size={14}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full bg-transparent border-none py-3 pl-8 pr-2 text-[12px] font-bold text-[#002B1B] focus:outline-none placeholder:text-[#002B1B]/10 uppercase tracking-[0.2em]"
            />
          </div>

          {/* Secondary Variant Button */}
          <div className="pt-8 w-full">
            <Button
              text="Login"
              variant="secondary"
              className="w-full h-12 rounded-full font-black hover:bg-[#002B1B] hover:text-white transition-all duration-500 border-2 border-[#002B1B]/20 text-lg"
              icon={ArrowRight}
            />
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
