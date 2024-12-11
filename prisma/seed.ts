import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create sections and their questions
  const sectionsData = [
    {
      title: "Introduction",
      slug: "introduction",
      order: 0,
      content: "<h2>MO_FLO Bite-Size Course for Notion</h2><p>Overview of the course...</p>",
      questions: [] // No quiz for introduction perhaps
    },
    {
      title: "Initiation",
      slug: "initiation",
      order: 1,
      content: `
        <h2>Initiation</h2>
        <p><strong>Objective:</strong> Anchor the project’s expectations...</p>
        <!-- The rest of the content -->
      `,
      questions: [
        {
          prompt: "What are the key components of a project purpose statement?",
          choices: ["Scope, vision, and expectations", "Timeline only", "Stakeholder names only"],
          correctAnswer: "Scope, vision, and expectations"
        },
        {
          prompt: "How would you identify and mitigate timeline risks?",
          choices: ["Identify key dates early and plan a high-level timeline", "Ignore until execution", "Random buffers"],
          correctAnswer: "Identify key dates early and plan a high-level timeline"
        },
        {
          prompt: "Describe the steps involved in creating a project budget.",
          choices: [
            "Estimate costs, balance profit margins, avoid overpricing",
            "Set a random amount",
            "Always add large buffers"
          ],
          correctAnswer: "Estimate costs, balance profit margins, avoid overpricing"
        },
      ]
    },
    // ... Add Planning, Execution, Monitoring & Control, Closure, Business Hygiene similarly
  ];

  for (const s of sectionsData) {
    await prisma.section.create({
      data: {
        title: s.title,
        slug: s.slug,
        order: s.order,
        content: s.content,
        questions: {
          create: s.questions.map(q => ({
            prompt: q.prompt,
            choices: q.choices,
            correctAnswer: q.correctAnswer
          }))
        }
      }
    });
  }
}

main()
  .then(() => {
    console.log("Seeded successfully.");
  })
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
