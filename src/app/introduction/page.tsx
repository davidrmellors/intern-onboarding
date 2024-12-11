"use client";

import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function IntroductionPage() {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const sections = [
    "Initiation",
    "Planning",
    "Execution",
    "Monitoring & Control",
    "Closure",
    "Business Hygiene",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-8">
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="rounded-2xl bg-white p-8 shadow-xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex items-center justify-center mb-6"
          >
            <Sparkles className="text-blue-500 w-8 h-8 mr-2" />
            <h2 className="text-3xl font-bold text-blue-600">MO_FLO Overview</h2>
            <Sparkles className="text-blue-500 w-8 h-8 ml-2" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-4 text-lg text-gray-700"
          >
            MO_FLO is MOHARA&apos;s core project management process that governs how projects are delivered for customers
            and encompasses end-to-end project delivery with six sections:
          </motion.p>

          <motion.ul className="mb-4 space-y-3">
            {sections.map((section, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className="flex items-center space-x-3 p-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: hoveredItem === index ? "#EEF2FF" : "transparent",
                }}
              >
                <motion.div
                  animate={{
                    scale: hoveredItem === index ? 1.2 : 1,
                    rotate: hoveredItem === index ? 360 : 0,
                  }}
                >
                  <CheckCircle2 className="text-blue-500 w-6 h-6" />
                </motion.div>
                <span className="text-lg text-gray-700">{section}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={itemVariants}
            className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100"
          >
            <p className="text-lg text-gray-700">
              ✨ Pro tip: The phases are not linear! Most projects are iterative with clear cycles of
              &apos;Plan, Execute, Review&apos; within the Execution phase.
            </p>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/initiation")}
            className="w-full rounded-xl bg-blue-600 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700 flex items-center justify-center space-x-2"
          >
            <span>Proceed to Initiation</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}