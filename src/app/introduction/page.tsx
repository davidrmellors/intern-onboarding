"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function IntroductionPage() {
  const router = useRouter();

  const navigateToNextSection = () => {
    router.push("/initiation");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-8">
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white p-8 shadow-xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-blue-600">MO_FLO Overview</h2>
          <p className="mb-4 text-lg text-gray-700">
            MO_FLO is MOHARA's core project management process that governs how projects are delivered for customers
            and encompasses end-to-end project delivery with six sections:
          </p>
          <ul className="mb-4 list-disc pl-5 text-lg text-gray-700">
            <li>Initiation</li>
            <li>Planning</li>
            <li>Execution</li>
            <li>Monitoring & Control</li>
            <li>Closure</li>
            <li>Business Hygiene</li>
          </ul>
          <p className="mb-8 text-lg text-gray-700">
            It's important to note that the phases are not linear and most projects are iterative with clear cycles of
            'Plan, Execute, Review' within the Execution phase.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={navigateToNextSection}
            className="w-full rounded-xl bg-blue-600 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700"
          >
            Proceed to Initiation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
