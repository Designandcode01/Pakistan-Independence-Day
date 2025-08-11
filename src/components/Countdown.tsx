"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const targetDate = new Date("2025-08-14T00:00:00").getTime();

  // Only run countdown after hydration to avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, targetDate]);

  if (!mounted) {
    return (
      <div className="text-white text-2xl text-center mt-4 p-15">
        Preparing countdown…
      </div>
    );
  }

  const totalSeconds = Math.max(Math.floor(timeLeft / 1000), 0);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex flex-col justify-center items-center text-white text-2xl text-center mt-4 p-5 font-bold">
      {totalSeconds > 0 ? (
        <span className="flex justify-center gap-2">
          <AnimatedNumber value={days} />d
          <AnimatedNumber value={hours} />h
          <AnimatedNumber value={minutes} />m
          <AnimatedNumber value={seconds} />s
          <span className="ml-2 px-3.5"> Pakistan Independence Day! 🇵🇰</span>
        </span>
      ) : (
        <span>🎉 Happy Independence Day! 🎉</span>
      )}
    </div>
  );
}

// Animated number with Framer Motion
function AnimatedNumber({ value }: { value: number }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="inline-block w-10 text-center"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
    </AnimatePresence>
  );
}
