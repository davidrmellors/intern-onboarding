import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const quizRouter = createTRPCRouter({
  submitAnswers: publicProcedure
    .input(z.object({
      sectionSlug: z.string(),
      answers: z.array(z.object({
        prompt: z.string(),
        answer: z.string(),
      }))
    }))
    .mutation(async ({ ctx, input }) => {
      const { db } = ctx;

      const section = await db.section.findUnique({
        where: { slug: input.sectionSlug },
        include: { questions: true },
      });

      if (!section) {
        throw new Error("Section not found");
      }

      const questions = section.questions;
      let score = 0;
      for (const q of questions) {
        const userAnswer = input.answers.find(a => a.prompt === q.prompt)?.answer;
        if (userAnswer === q.correctAnswer) {
          score++;
        }
      }

      const passed = score === questions.length;

      await db.userProgress.upsert({
        where: {
          userId_sectionId: {
            userId: session.user.id,
            sectionId: section.id,
          },
        },
        update: { passed },
        create: {
          userId: session.user.id,
          sectionId: section.id,
          passed,
        },
      });

      return { passed, score, total: questions.length };
    })
});
