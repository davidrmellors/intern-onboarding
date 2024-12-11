import { getAuth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { NextRequest } from "next/server";

export const createTRPCContext = async (opts: { headers: Headers }) => {
  // Construct a NextRequest from headers
  const request = new NextRequest("https://example.com", {
    headers: opts.headers,
  });

  // Now this should work without type errors
  const { userId, sessionId } = getAuth(request);

  return {
    db,
    userId,
    sessionId,
    ...opts,
  };
};

/**
 * 2. INITIALIZATION
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * Create a server-side caller.
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * 3. ROUTER & PROCEDURE
 */
const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();
  if (t._config.isDev) {
    // artificial delay in dev to simulate network latency
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();
  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);
  return result;
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure.use(timingMiddleware);
