import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.question.deleteMany({});
  await prisma.section.deleteMany({});

  // Define sections data with verbatim content from the PDF, styled using Tailwind classes
  const sectionsData = [
    {
      title: "Introduction",
      slug: "introduction",
      order: 0,
      content: `
        <h2 class="text-3xl font-bold text-gray-800 mb-4">MO_FLO Overview</h2>
        <p class="text-lg text-gray-600 mb-4">MO_FLO is MOHARA's core project management process that governs how projects are delivered for customers and encompasses end-to-end project delivery with six sections:</p>
        <ul class="list-disc pl-5 text-lg text-gray-600 mb-4">
          <li>Initiation</li>
          <li>Planning</li>
          <li>Execution</li>
          <li>Monitoring & Control</li>
          <li>Closure</li>
          <li>Business Hygiene</li>
        </ul>
        <p class="text-lg text-gray-600">It's important to note that the phases are not linear and most projects are iterative with clear cycles of 'Plan, Execute, Review' within the Execution phase.</p>
      `
    },
    {
      title: "Initiation",
      slug: "initiation",
      order: 1,
      content: `
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Initiation</h2>
        <p class="text-lg text-gray-600 mb-4">Project initiation is the first phase of a project’s life cycle, and it's crucial for anchoring the project's expectations and defining its purpose.</p>
        <h3 class="text-2xl font-semibold text-gray-700 mb-2">Key Steps:</h3>
        <ul class="list-disc pl-5 text-lg text-gray-600">
          <li><strong>Project Purpose:</strong> Define the purpose of the project and create a short project summary in Slack to outline scope, vision, and expectations.</li>
          <li><strong>Timeline:</strong> Identify key dates and obtain a high-level view of the timeline to manage risks.</li>
          <li><strong>Budget:</strong> Create a budget that ensures a good margin without overpricing.</li>
          <li><strong>Stakeholders:</strong> Identify external stakeholders to address risks and determine engagement strategies.</li>
          <li><strong>Roles & Responsibilities:</strong> Review internal roles and responsibilities to ensure alignment.</li>
          <li><strong>Legal Agreements:</strong> Draft and review legal agreements with the COO.</li>
          <li><strong>Marketing Coordination:</strong> Provide project details for marketing efforts.</li>
          <li><strong>Kick-off Meeting:</strong> Discuss scope, objectives, deliverables, timelines, roles, and responsibilities.</li>
          <li><strong>Requirements Gathering:</strong> Define scope, technology stack, and architecture.</li>
          <li><strong>Estimation:</strong> Validate epics and create a statement of work.</li>
          <li><strong>Product Vision:</strong> Map out the client's vision and align the team.</li>
          <li><strong>Setup Checklist:</strong> Complete the checklist to ensure readiness and quality.</li>
        </ul>
      `
    },
    {
      title: "Planning",
      slug: "planning",
      order: 2,
      content: `
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Planning</h2>
        <p class="text-lg text-gray-600 mb-4">Project planning refers to everything you do to set up your project for success. It defines objectives, clarifies scope, and organizes the steps to achieve success.</p>
        <h3 class="text-2xl font-semibold text-gray-700 mb-2">Key Steps:</h3>
        <ul class="list-disc pl-5 text-lg text-gray-600">
          <li><strong>Priorities:</strong> Establish project priorities and understand risks.</li>
          <li><strong>Features:</strong> Define features and communicate their value.</li>
          <li><strong>Wireframing:</strong> Create wireframes and user flows to map out the project.</li>
          <li><strong>User Stories:</strong> Write user stories in accessible language to align with client understanding.</li>
          <li><strong>Project Plan:</strong> Develop a plan with milestones and align engineering and design.</li>
          <li><strong>Risk Identification:</strong> Document internal and external risks.</li>
          <li><strong>Technical Architecture:</strong> Plan architecture, domains, database design, and CI/CD pipelines.</li>
          <li><strong>Testing:</strong> Define the testing approach based on requirements.</li>
        </ul>
      `
    },
    {
      title: "Execution",
      slug: "execution",
      order: 3,
      content: `
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Execution</h2>
        <p class="text-lg text-gray-600 mb-4">The Execution phase is focused on delivering the project while iterating through planning, delivery, and review cycles.</p>
        <h3 class="text-2xl font-semibold text-gray-700 mb-2">Key Steps:</h3>
        <ul class="list-disc pl-5 text-lg text-gray-600">
          <li><strong>Agile Methodologies:</strong> Plan sprints and ensure iterative delivery.</li>
          <li><strong>Daily Standups:</strong> Foster communication and resolve blockers.</li>
          <li><strong>Quality Assurance:</strong> Validate deliverables against acceptance criteria.</li>
          <li><strong>Coding Standards:</strong> Follow best practices for quality and documentation.</li>
          <li><strong>User Acceptance Testing:</strong> Enable client sign-off on deliverables.</li>
          <li><strong>Knowledge Sharing:</strong> Conduct retrospectives and share lessons learned.</li>
        </ul>
      `
    },
    {
      title: "Monitoring & Control",
      slug: "monitoring-control",
      order: 4,
      content: `
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Monitoring & Control</h2>
        <p class="text-lg text-gray-600 mb-4">Project Monitoring & Control starts as soon as the project begins and is the process of tracking, reviewing, and reporting on progress to ensure zero whitespace exists.</p>
        <h3 class="text-2xl font-semibold text-gray-700 mb-2">Key Steps:</h3>
        <ul class="list-disc pl-5 text-lg text-gray-600">
          <li><strong>Time Tracking:</strong> Use Harvest to log project hours and align with Jira tasks.</li>
          <li><strong>Budget Reviews:</strong> Conduct weekly budget reviews to monitor quality, scope, time, and budget.</li>
          <li><strong>Backlog Grooming:</strong> Regularly prioritize and adjust the backlog to align with project goals.</li>
          <li><strong>Resource Planning:</strong> Efficiently allocate resources to balance team needs and project requirements.</li>
          <li><strong>Forecasting:</strong> Build accurate forecasts and monitor variances to ensure alignment with goals.</li>
        </ul>
      `
    },
    {
      title: "Closure",
      slug: "closure",
      order: 5,
      content: `
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Closure</h2>
        <p class="text-lg text-gray-600 mb-4">The final phase of the project lifecycle includes formalizing deliverables, reviewing performance, and completing project closure activities.</p>
        <h3 class="text-2xl font-semibold text-gray-700 mb-2">Key Steps:</h3>
        <ul class="list-disc pl-5 text-lg text-gray-600">
          <li><strong>Client Sign-off:</strong> Achieve final agreement and sign-off on all deliverables.</li>
          <li><strong>Financial Closure:</strong> Finalize budgets, invoices, and expenses.</li>
          <li><strong>Knowledge Sharing:</strong> Capture and share learnings through retrospectives and case studies.</li>
          <li><strong>Post-Project Obligations:</strong> Transfer ownership of IP, archive data, and close project accounts.</li>
          <li><strong>Archival:</strong> Ensure all time is captured and the project is archived in tools like Harvest.</li>
        </ul>
      `
    },
    {
      title: "Business Hygiene",
      slug: "business-hygiene",
      order: 6,
      content: `
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Business Hygiene</h2>
        <p class="text-lg text-gray-600 mb-4">This phase ensures a productive, inclusive, and effective work environment.</p>
        <h3 class="text-2xl font-semibold text-gray-700 mb-2">Key Steps:</h3>
        <ul class="list-disc pl-5 text-lg text-gray-600">
          <li><strong>Inclusive Communication:</strong> Foster empathy, cultural sensitivity, and effective communication practices.</li>
          <li><strong>Remote Collaboration:</strong> Use tools and practices for effective distributed teamwork.</li>
          <li><strong>Meeting Guidelines:</strong> Conduct productive meetings with clear agendas and outcomes.</li>
          <li><strong>Slack Usage:</strong> Streamline team communication through effective Slack practices.</li>
        </ul>
      `
    },
    {
      title: "Quiz",
      slug: "quiz",
      order: 7,
      content: `
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Quiz</h2>
        <p class="text-lg text-gray-600">Test your understanding of the MO_FLO process.</p>
      `,
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

  // Insert sections and questions
  for (const section of sectionsData) {
    await prisma.section.create({
      data: {
        title: section.title,
        slug: section.slug,
        order: section.order,
        content: section.content,
        questions: section.questions?.length ? { create: section.questions } : undefined
      }
    });
  }
}

main()
  .then(() => console.log("Database seeded successfully!"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
