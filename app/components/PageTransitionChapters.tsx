"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransitionChapters({
  children,
  transitionKey,
}: {
  children: React.ReactNode;
  transitionKey: number;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={transitionKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
