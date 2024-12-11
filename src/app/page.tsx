"use client";

import Link from "next/link";
import { motion, stagger } from "framer-motion";
import { BookOpen, Trophy, Rocket } from "lucide-react";

export default function HomePage() {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const bubbleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const words = "Welcome to the MO_FLO Bite-Size Course".split(" ");

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8 flex flex-col items-center justify-center font-sans">
      <div className="text-center max-w-4xl">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className={`text-5xl font-extrabold ${
                word === "MO_FLO" ? "text-purple-600" : "text-indigo-800"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          variants={bubbleVariants}
          initial="hidden"
          animate="visible"
          className="bg-indigo-100 rounded-2xl p-6 mb-6 transform origin-bottom-left"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Get ready to master the MO_FLO project management process in a fun and
            interactive way. From Initiation to Closure, you'll learn the ins and
            outs of every phase.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
        >
          {[
            {
              Icon: BookOpen,
              title: "Learn",
              description:
                "Explore each phase with bite-sized lessons, interactive exercises, and engaging visuals.",
            },
            {
              Icon: Trophy,
              title: "Achieve",
              description:
                "Take quizzes and earn perfect scores to unlock the next sections and track your progress.",
            },
            {
              Icon: Rocket,
              title: "Excel",
              description:
                "Use your new skills to manage projects effectively and make a lasting impact.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={bubbleVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: [-1, 1],
                transition: { rotate: { repeat: Infinity, repeatType: "reverse" } }
              }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transform origin-bottom"
            >
              <item.Icon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Link href="/introduction">
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)"
              }}
              className="rounded-full bg-indigo-600 text-white py-3 px-8 text-lg font-medium shadow-md hover:bg-indigo-700 transition"
            >
              Start the Course →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}