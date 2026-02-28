import React from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Button from "../../components/button/Button";
import LightPillar from "../../components/animations/LightPillar";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/auth/useAuth";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/dashboard";

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const userData = {
        email: data.email.toLowerCase(),
        password: data.password,
      };
      await toast.promise(
        axios.post(`${import.meta.env.VITE_API_URL}/api/login`, userData),
        {
          loading: "Authenticating...",
          success: (res) => {
            const { token, ...rest } = res.data;
            login(rest, token);
            navigate(from, { replace: true });

            //welcome message after login message
            setTimeout(() => {
              toast.success(`Welcome back, ${rest?.email.split("@")[0]}!`, {
                description: "Glad to see you again.",
                icon: "👋",
              });
            }, 500);

            return "Logged in successfully!";
          },
          error: (err) => {
            return (
              err.response?.data?.message ||
              "Login failed. Please check your credentials."
            );
          },
        },
      );
    } catch (error) {
      toast.warning(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-6 selection:bg-[#006442] selection:text-white bg-[#FAFBFC]">
      {/* High-Motion Background Animation */}
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

      {/* Transparent Login Form */}
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
          className="w-full"
          onSubmit={handleSubmit(handleLogin)}
          autoComplete="off"
        >
          {/* Email Input - Dark Green Theme */}
          <div className="space-y-1 text-left">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-full bg-white/40 border border-gray-100 rounded-2xl p-4 pl-14 text-sm focus:outline-none focus:ring-1 focus:ring-[#006442] shadow-sm text-gray-600 placeholder:text-gray-400"
              />
            </div>
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input - Dark Green Theme */}
          <div className="space-y-1 text-left my-6">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-5 text-gray-400 z-10" size={18} />
              <input
                type="password"
                autoComplete="off"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                className="w-full bg-white/40 border border-gray-100 rounded-2xl p-4 pl-14 text-sm focus:outline-none focus:ring-1 focus:ring-[#006442] shadow-sm text-gray-600 placeholder:text-gray-400"
              />
            </div>
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          {/* Button */}

          <Button
            text="Login"
            type="submit"
            variant="primary"
            className="h-13 lg:h-13 font-black text-lg mt-10 mx-auto w-full rounded-2xl"
            icon={ArrowRight}
          />
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
