"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function InitiationPage() {
  const router = useRouter();

  const navigateToNextSection = () => {
    router.push("/planning");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6 sm:p-12">
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-white p-8 shadow-2xl"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 font-serif">
            Initiation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif">
            Project initiation is the first phase of a project’s life cycle, and
            it's crucial for anchoring the project's expectations and defining
            its purpose.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
            Key Steps:
          </h3>
          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed font-serif">
            <li>
              <span className="font-semibold text-gray-900">
                Project Purpose:
              </span>{" "}
              Define the purpose of the project and create a short project
              summary in Slack to outline scope, vision, and expectations.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Timeline:</span>{" "}
              Identify key dates and obtain a high-level view of the timeline to
              manage risks.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Budget:</span>{" "}
              Create a budget that ensures a good margin without overpricing.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Stakeholders:</span>{" "}
              Identify external stakeholders to address risks and determine
              engagement strategies.
            </li>
            <li>
              <span className="font-semibold text-gray-900">
                Roles & Responsibilities:
              </span>{" "}
              Review internal roles and responsibilities to ensure alignment.
            </li>
            <li>
              <span className="font-semibold text-gray-900">
                Legal Agreements:
              </span>{" "}
              Draft and review legal agreements with the COO.
            </li>
            <li>
              <span className="font-semibold text-gray-900">
                Marketing Coordination:
              </span>{" "}
              Provide project details for marketing efforts.
            </li>
            <li>
              <span className="font-semibold text-gray-900">
                Kick-off Meeting:
              </span>{" "}
              Discuss scope, objectives, deliverables, timelines, roles, and
              responsibilities.
            </li>
            <li>
              <span className="font-semibold text-gray-900">
                Requirements Gathering:
              </span>{" "}
              Define scope, technology stack, and architecture.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Estimation:</span>{" "}
              Validate epics and create a statement of work.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Product Vision:</span>{" "}
              Map out the client's vision and align the team.
            </li>
            <li>
              <span className="font-semibold text-gray-900">
                Setup Checklist:
              </span>{" "}
              Complete the checklist to ensure readiness and quality.
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={navigateToNextSection}
            className="mt-8 w-full rounded-md bg-purple-600 py-4 text-lg font-medium text-white shadow-lg hover:bg-purple-700 transition-all"
          >
            Go to Next Section
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
