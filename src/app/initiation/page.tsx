"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lightbulb, Target, CalendarCheck, Users, ClipboardList, DollarSign, Briefcase, ShieldCheck, ListChecks } from "lucide-react";

export default function InitiationPage() {
  const router = useRouter();

  const navigateToNextSection = () => {
    router.push("/planning");
  };

  const navigateToPreviousSection = () => {
    router.push("/introduction"); // Assuming the previous section is "Overview"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6 sm:p-12 font-sans">
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-white p-8 shadow-2xl"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 flex items-center">
            <Lightbulb className="mr-3 text-yellow-500" /> Initiation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Project initiation is the first phase of a project’s life cycle, and
            it's crucial for anchoring the project's expectations and defining
            its purpose.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Steps</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <Target className="text-blue-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Project Purpose:</span>
                <p className="text-gray-700 text-sm">
                  Define the purpose of the project and create a short project
                  summary in Slack to outline scope, vision, and expectations.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CalendarCheck className="text-green-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Timeline:</span>
                <p className="text-gray-700 text-sm">
                  Identify key dates and obtain a high-level view of the timeline
                  to manage risks.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <DollarSign className="text-orange-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Budget:</span>
                <p className="text-gray-700 text-sm">
                  Create a budget that ensures a good margin without overpricing.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Users className="text-purple-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Stakeholders:</span>
                <p className="text-gray-700 text-sm">
                  Identify external stakeholders to address risks and determine
                  engagement strategies.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Briefcase className="text-teal-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Roles & Responsibilities:</span>
                <p className="text-gray-700 text-sm">
                  Review internal roles and responsibilities to ensure alignment.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <ShieldCheck className="text-indigo-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Legal Agreements:</span>
                <p className="text-gray-700 text-sm">
                  Draft and review legal agreements with the COO.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <ClipboardList className="text-pink-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Marketing Coordination:</span>
                <p className="text-gray-700 text-sm">
                  Provide project details for marketing efforts.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CalendarCheck className="text-yellow-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Kick-off Meeting:</span>
                <p className="text-gray-700 text-sm">
                  Discuss scope, objectives, deliverables, timelines, roles, and
                  responsibilities.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <ListChecks className="text-green-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Requirements Gathering:</span>
                <p className="text-gray-700 text-sm">
                  Define scope, technology stack, and architecture.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <ClipboardList className="text-blue-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Estimation:</span>
                <p className="text-gray-700 text-sm">
                  Validate epics and create a statement of work.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Target className="text-red-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Product Vision:</span>
                <p className="text-gray-700 text-sm">
                  Map out the client's vision and align the team.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <ListChecks className="text-purple-500 mr-4" />
              <div>
                <span className="font-semibold text-gray-900">Setup Checklist:</span>
                <p className="text-gray-700 text-sm">
                  Complete the checklist to ensure readiness and quality.
                </p>
              </div>
            </li>
          </ul>

          <div className="flex justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={navigateToPreviousSection}
              className="w-1/2 mr-2 rounded-md bg-gray-500 py-4 text-lg font-medium text-white shadow-lg hover:bg-gray-600 transition-all"
            >
              Go to Previous Section
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={navigateToNextSection}
              className="w-1/2 ml-2 rounded-md bg-blue-600 py-4 text-lg font-medium text-white shadow-lg hover:bg-blue-700 transition-all"
            >
              Go to Next Section
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
