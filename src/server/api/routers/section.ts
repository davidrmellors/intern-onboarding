import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "../trpc";

export const sectionRouter = createTRPCRouter({
  getSectionBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.section.findUnique({
        where: { slug: input.slug },
        include: { questions: true },
      });
    }),
});
