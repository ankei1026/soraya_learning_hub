"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
    // Add your authentication logic here
  };

  return (
    <div className="relative min-h-screen bg-[#fafaf5] font-mono overflow-hidden">
      {/* Brutalist Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_29px,#00000010_29px,#00000010_30px)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_29px,#00000010_29px,#00000010_30px)]" />
      </div>

      {/* Animated Cursor Follower */}
      <motion.div
        className="fixed w-10 h-10 border-2 border-rose-500 pointer-events-none z-50 hidden md:block mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 150,
          damping: 12,
        }}
      />

      {/* Back to Home Button */}
      <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        href="/"
        className="fixed top-6 left-6 z-20 flex items-center gap-2 bg-black text-white px-4 py-2 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
      >
        ← BACK
      </motion.a>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ rotate: -2, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-black text-white px-4 py-1 mb-4"
            >
              <h2 className="text-sm font-bold tracking-widest uppercase">Welcome Back to</h2>
            </motion.div>
            
            <motion.h1
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-black text-black mb-2 uppercase tracking-tighter"
            >
              Soraya
            </motion.h1>
            
            <motion.div
              initial={{ rotate: 2, scale: 0.95 }}
              animate={{ rotate: -1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-rose-500 text-white px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <h1 className="text-2xl font-bold">Learning Hub</h1>
            </motion.div>
          </div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-black uppercase mb-2 text-black">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-black bg-white font-mono focus:outline-none focus:bg-yellow-100 transition-colors"
                    placeholder="student@soraya.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-black uppercase mb-2 text-black">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-12 py-3 border-2 border-black bg-white font-mono focus:outline-none focus:bg-yellow-100 transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500 hover:text-black" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500 hover:text-black" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 border-2 border-black cursor-pointer"
                  />
                  <span className="text-sm font-mono font-bold uppercase">
                    Remember me
                  </span>
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm font-black uppercase text-rose-600 hover:text-rose-800 underline decoration-2 transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-black text-white py-3 font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#f43f5e] hover:shadow-[2px_2px_0px_0px_#f43f5e] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
              >
                Login
                <ArrowRight className="h-5 w-5" />
              </motion.button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-black"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 font-black">OR</span>
                </div>
              </div>

              {/* Demo Credentials Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                onClick={() => {
                  setEmail("demo@soraya.com");
                  setPassword("demo123");
                }}
                className="w-full bg-yellow-300 text-black py-3 font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Use Demo Credentials
              </motion.button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm font-mono">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="font-black uppercase text-rose-600 hover:text-rose-800 underline decoration-2 transition-colors"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex gap-2 flex-wrap justify-center">
              {["Parent Login", "Teacher Login", "Student Login", "Admin Login"].map(
                (role) => (
                  <span
                    key={role}
                    className="text-xs border border-black px-2 py-1 bg-white hover:bg-black hover:text-white transition-colors cursor-pointer"
                  >
                    {role}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Brutalist Elements */}
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed bottom-8 left-8 w-20 h-20 border-4 border-black bg-white hidden lg:flex items-center justify-center text-2xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        SLH
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="fixed top-32 right-8 w-16 h-16 border-2 border-black bg-yellow-300 hidden lg:flex items-center justify-center text-xl font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
      >
        !
      </motion.div>
    </div>
  );
}