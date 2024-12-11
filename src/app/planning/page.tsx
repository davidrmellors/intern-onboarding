'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, Clipboard, Activity, BookOpen, Shield, Layout, Layers } from "lucide-react"; // For icons
import { useRouter } from "next/navigation";

export default function PlanningPage() {
  const [openSteps, setOpenSteps] = useState<number[]>([]);

  const toggleStep = (index: number) => {
    if (openSteps.includes(index)) {
      setOpenSteps(openSteps.filter((step) => step !== index));
    } else {
      setOpenSteps([...openSteps, index]);
    }
  };

  const router = useRouter();

  const navigateToNextSection = () => {
    router.push("/execution");
  };

  const navigateToPreviousSection = () => {
    router.push("/initiation");
  }

  const steps = [
    { title: "Priorities", content: "Establish project priorities and understand risks.", icon: <Lightbulb className="text-yellow-500 w-6 h-6" /> },
    { title: "Features", content: "Define features and communicate their value.", icon: <Clipboard className="text-blue-500 w-6 h-6" /> },
    { title: "Wireframing", content: "Create wireframes and user flows to map out the project.", icon: <Layout className="text-green-500 w-6 h-6" /> },
    { title: "User Stories", content: "Write user stories in accessible language to align with client understanding.", icon: <BookOpen className="text-purple-500 w-6 h-6" /> },
    { title: "Project Plan", content: "Develop a plan with milestones and align engineering and design.", icon: <Activity className="text-pink-500 w-6 h-6" /> },
    { title: "Risk Identification", content: "Document internal and external risks.", icon: <Shield className="text-red-500 w-6 h-6" /> },
    { title: "Technical Architecture", content: "Plan architecture, domains, database design, and CI/CD pipelines.", icon: <Layers className="text-teal-500 w-6 h-6" /> },
    { title: "Testing", content: "Define the testing approach based on requirements.", icon: <CheckCircle className="text-green-500 w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6 sm:p-12">
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-white p-8 shadow-2xl"
        >
          <h2 className="text-5xl font-extrabold text-purple-800 mb-6 font-serif">
            Planning
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif">
            Project planning refers to everything you do to set up your project
            for success. It defines objectives, clarifies scope, and organizes
            the steps to achieve success.
          </p>
          <h3 className="text-3xl font-bold text-purple-700 mb-4 font-serif">
            Key Steps:
          </h3>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border rounded-md p-4 bg-gradient-to-r from-indigo-50 to-white shadow hover:shadow-lg transition-all cursor-pointer"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center space-x-4">
                  {step.icon}
                  <h4 className="text-xl font-semibold text-gray-900 flex-grow">
                    {step.title}
                  </h4>
                  <span className="text-gray-500">
                    {openSteps.includes(index) ? "-" : "+"}
                  </span>
                </div>
                {openSteps.includes(index) && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-gray-600 mt-4"
                  >
                    {step.content}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 w-full rounded-md bg-green-600 py-4 text-lg font-medium text-white shadow-lg hover:bg-green-700 transition-all"
            onClick={navigateToPreviousSection}
          >
            Go to Previous Section
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 w-full rounded-md bg-purple-600 py-4 text-lg font-medium text-white shadow-lg hover:bg-purple-700 transition-all"
            onClick={navigateToNextSection}
          >
            Go to Next Section
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
