"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var sectionsData, _i, sectionsData_1, section;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: 
                // Clear existing data
                return [4 /*yield*/, prisma.question.deleteMany({})];
                case 1:
                    // Clear existing data
                    _b.sent();
                    return [4 /*yield*/, prisma.section.deleteMany({})];
                case 2:
                    _b.sent();
                    sectionsData = [
                        {
                            title: "Introduction",
                            slug: "introduction",
                            order: 0,
                            content: "\n        <h2 class=\"text-3xl font-bold text-gray-800 mb-4\">MO_FLO Overview</h2>\n        <p class=\"text-lg text-gray-600 mb-4\">MO_FLO is MOHARA's core project management process that governs how projects are delivered for customers and encompasses end-to-end project delivery with six sections:</p>\n        <ul class=\"list-disc pl-5 text-lg text-gray-600 mb-4\">\n          <li>Initiation</li>\n          <li>Planning</li>\n          <li>Execution</li>\n          <li>Monitoring & Control</li>\n          <li>Closure</li>\n          <li>Business Hygiene</li>\n        </ul>\n        <p class=\"text-lg text-gray-600\">It's important to note that the phases are not linear and most projects are iterative with clear cycles of 'Plan, Execute, Review' within the Execution phase.</p>\n      "
                        },
                        {
                            title: "Initiation",
                            slug: "initiation",
                            order: 1,
                            content: "\n        <h2 class=\"text-3xl font-bold text-gray-800 mb-4\">Initiation</h2>\n        <p class=\"text-lg text-gray-600 mb-4\">Project initiation is the first phase of a project\u2019s life cycle, and it's crucial for anchoring the project's expectations and defining its purpose.</p>\n        <h3 class=\"text-2xl font-semibold text-gray-700 mb-2\">Key Steps:</h3>\n        <ul class=\"list-disc pl-5 text-lg text-gray-600\">\n          <li><strong>Project Purpose:</strong> Define the purpose of the project and create a short project summary in Slack to outline scope, vision, and expectations.</li>\n          <li><strong>Timeline:</strong> Identify key dates and obtain a high-level view of the timeline to manage risks.</li>\n          <li><strong>Budget:</strong> Create a budget that ensures a good margin without overpricing.</li>\n          <li><strong>Stakeholders:</strong> Identify external stakeholders to address risks and determine engagement strategies.</li>\n          <li><strong>Roles & Responsibilities:</strong> Review internal roles and responsibilities to ensure alignment.</li>\n          <li><strong>Legal Agreements:</strong> Draft and review legal agreements with the COO.</li>\n          <li><strong>Marketing Coordination:</strong> Provide project details for marketing efforts.</li>\n          <li><strong>Kick-off Meeting:</strong> Discuss scope, objectives, deliverables, timelines, roles, and responsibilities.</li>\n          <li><strong>Requirements Gathering:</strong> Define scope, technology stack, and architecture.</li>\n          <li><strong>Estimation:</strong> Validate epics and create a statement of work.</li>\n          <li><strong>Product Vision:</strong> Map out the client's vision and align the team.</li>\n          <li><strong>Setup Checklist:</strong> Complete the checklist to ensure readiness and quality.</li>\n        </ul>\n      "
                        },
                        {
                            title: "Planning",
                            slug: "planning",
                            order: 2,
                            content: "\n        <h2 class=\"text-3xl font-bold text-gray-800 mb-4\">Planning</h2>\n        <p class=\"text-lg text-gray-600 mb-4\">Project planning refers to everything you do to set up your project for success. It defines objectives, clarifies scope, and organizes the steps to achieve success.</p>\n        <h3 class=\"text-2xl font-semibold text-gray-700 mb-2\">Key Steps:</h3>\n        <ul class=\"list-disc pl-5 text-lg text-gray-600\">\n          <li><strong>Priorities:</strong> Establish project priorities and understand risks.</li>\n          <li><strong>Features:</strong> Define features and communicate their value.</li>\n          <li><strong>Wireframing:</strong> Create wireframes and user flows to map out the project.</li>\n          <li><strong>User Stories:</strong> Write user stories in accessible language to align with client understanding.</li>\n          <li><strong>Project Plan:</strong> Develop a plan with milestones and align engineering and design.</li>\n          <li><strong>Risk Identification:</strong> Document internal and external risks.</li>\n          <li><strong>Technical Architecture:</strong> Plan architecture, domains, database design, and CI/CD pipelines.</li>\n          <li><strong>Testing:</strong> Define the testing approach based on requirements.</li>\n        </ul>\n      "
                        },
                        {
                            title: "Execution",
                            slug: "execution",
                            order: 3,
                            content: "\n        <h2 class=\"text-3xl font-bold text-gray-800 mb-4\">Execution</h2>\n        <p class=\"text-lg text-gray-600 mb-4\">The Execution phase is focused on delivering the project while iterating through planning, delivery, and review cycles.</p>\n        <h3 class=\"text-2xl font-semibold text-gray-700 mb-2\">Key Steps:</h3>\n        <ul class=\"list-disc pl-5 text-lg text-gray-600\">\n          <li><strong>Agile Methodologies:</strong> Plan sprints and ensure iterative delivery.</li>\n          <li><strong>Daily Standups:</strong> Foster communication and resolve blockers.</li>\n          <li><strong>Quality Assurance:</strong> Validate deliverables against acceptance criteria.</li>\n          <li><strong>Coding Standards:</strong> Follow best practices for quality and documentation.</li>\n          <li><strong>User Acceptance Testing:</strong> Enable client sign-off on deliverables.</li>\n          <li><strong>Knowledge Sharing:</strong> Conduct retrospectives and share lessons learned.</li>\n        </ul>\n      "
                        },
                        {
                            title: "Monitoring & Control",
                            slug: "monitoring-control",
                            order: 4,
                            content: "\n        <h2 class=\"text-3xl font-bold text-gray-800 mb-4\">Monitoring & Control</h2>\n        <p class=\"text-lg text-gray-600 mb-4\">Project Monitoring & Control starts as soon as the project begins and is the process of tracking, reviewing, and reporting on progress to ensure zero whitespace exists.</p>\n        <h3 class=\"text-2xl font-semibold text-gray-700 mb-2\">Key Steps:</h3>\n        <ul class=\"list-disc pl-5 text-lg text-gray-600\">\n          <li><strong>Time Tracking:</strong> Use Harvest to log project hours and align with Jira tasks.</li>\n          <li><strong>Budget Reviews:</strong> Conduct weekly budget reviews to monitor quality, scope, time, and budget.</li>\n          <li><strong>Backlog Grooming:</strong> Regularly prioritize and adjust the backlog to align with project goals.</li>\n          <li><strong>Resource Planning:</strong> Efficiently allocate resources to balance team needs and project requirements.</li>\n          <li><strong>Forecasting:</strong> Build accurate forecasts and monitor variances to ensure alignment with goals.</li>\n        </ul>\n      "
                        },
                        {
                            title: "Closure",
                            slug: "closure",
                            order: 5,
                            content: "\n        <h2 class=\"text-3xl font-bold text-gray-800 mb-4\">Closure</h2>\n        <p class=\"text-lg text-gray-600 mb-4\">The final phase of the project lifecycle includes formalizing deliverables, reviewing performance, and completing project closure activities.</p>\n        <h3 class=\"text-2xl font-semibold text-gray-700 mb-2\">Key Steps:</h3>\n        <ul class=\"list-disc pl-5 text-lg text-gray-600\">\n          <li><strong>Client Sign-off:</strong> Achieve final agreement and sign-off on all deliverables.</li>\n          <li><strong>Financial Closure:</strong> Finalize budgets, invoices, and expenses.</li>\n          <li><strong>Knowledge Sharing:</strong> Capture and share learnings through retrospectives and case studies.</li>\n          <li><strong>Post-Project Obligations:</strong> Transfer ownership of IP, archive data, and close project accounts.</li>\n          <li><strong>Archival:</strong> Ensure all time is captured and the project is archived in tools like Harvest.</li>\n        </ul>\n      "
                        },
                        {
                            title: "Business Hygiene",
                            slug: "business-hygiene",
                            order: 6,
                            content: "\n        <h2 class=\"text-3xl font-bold text-gray-800 mb-4\">Business Hygiene</h2>\n        <p class=\"text-lg text-gray-600 mb-4\">This phase ensures a productive, inclusive, and effective work environment.</p>\n        <h3 class=\"text-2xl font-semibold text-gray-700 mb-2\">Key Steps:</h3>\n        <ul class=\"list-disc pl-5 text-lg text-gray-600\">\n          <li><strong>Inclusive Communication:</strong> Foster empathy, cultural sensitivity, and effective communication practices.</li>\n          <li><strong>Remote Collaboration:</strong> Use tools and practices for effective distributed teamwork.</li>\n          <li><strong>Meeting Guidelines:</strong> Conduct productive meetings with clear agendas and outcomes.</li>\n          <li><strong>Slack Usage:</strong> Streamline team communication through effective Slack practices.</li>\n        </ul>\n      "
                        },
                        {
                            title: "Quiz",
                            slug: "quiz",
                            order: 7,
                            content: "\n        <h2 class=\"text-3xl font-bold text-gray-800 mb-4\">Quiz</h2>\n        <p class=\"text-lg text-gray-600\">Test your understanding of the MO_FLO process.</p>\n      ",
                            questions: [
                                {
                                    prompt: "What is the purpose of the Initiation phase?",
                                    choices: [
                                        "To anchor expectations and define the project's purpose",
                                        "To finalize the project",
                                        "To immediately start coding"
                                    ],
                                    correctAnswer: "To anchor expectations and define the project's purpose"
                                },
                                {
                                    prompt: "Why are budget reviews important in the Monitoring & Control phase?",
                                    choices: [
                                        "To track and discuss variances in resources, scope, and estimation",
                                        "To avoid reporting to clients",
                                        "To ensure overbilling"
                                    ],
                                    correctAnswer: "To track and discuss variances in resources, scope, and estimation"
                                },
                                {
                                    prompt: "What is a key activity in the Closure phase?",
                                    choices: [
                                        "Finalizing all financials and achieving client sign-off",
                                        "Starting new development",
                                        "Skipping project review"
                                    ],
                                    correctAnswer: "Finalizing all financials and achieving client sign-off"
                                }
                            ]
                        }
                    ];
                    _i = 0, sectionsData_1 = sectionsData;
                    _b.label = 3;
                case 3:
                    if (!(_i < sectionsData_1.length)) return [3 /*break*/, 6];
                    section = sectionsData_1[_i];
                    return [4 /*yield*/, prisma.section.create({
                            data: {
                                title: section.title,
                                slug: section.slug,
                                order: section.order,
                                content: section.content,
                                questions: ((_a = section.questions) === null || _a === void 0 ? void 0 : _a.length) ? { create: section.questions } : undefined
                            }
                        })];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return console.log("Database seeded successfully!"); })
    .catch(function (e) { return console.error(e); })
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, prisma.$disconnect()];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); });
