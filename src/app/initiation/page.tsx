"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";
import { api as trpc } from "~/trpc/react";

export default function InitiationPage() {
  const router = useRouter();
  const { data: section, isLoading } = trpc.section.getSectionBySlug.useQuery({
    slug: "initiation",
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2"
        >
          <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-blue-600" />
          <p className="text-blue-600">Loading your section...</p>
        </motion.div>
      </div>
    );
  }

  if (!section) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
        <div className="flex items-center space-x-2 text-red-600">
          <AlertCircle className="h-5 w-5" />
          <p>Section not found</p>
        </div>
      </div>
    );
  }

  const navigateToNextSection = () => {
    router.push("/planning");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-8">
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white p-8 shadow-xl"
        >
          <div className="prose max-w-none mb-12">
            <div
              className="text-gray-600 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={navigateToNextSection}
            className="w-full rounded-xl bg-green-600 py-4 text-lg font-medium text-white transition-all hover:bg-green-700"
          >
            Go to Next Section
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
