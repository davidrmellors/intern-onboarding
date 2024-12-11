// app/page.tsx
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to the MO_FLO Bite-Size Course</h1>
      <p className="mb-8">
        This course will guide you through the MO_FLO project management process,
        covering Initiation, Planning, Execution, Monitoring & Control, Closure, and
        Business Hygiene phases. Each section includes a brief overview, key steps, and
        a short quiz to ensure you understand the concepts before moving on.
      </p>
      <p className="mb-8">
        You must achieve a perfect score on each quiz to progress to the next section.
        Good luck and enjoy the learning experience!
      </p>
      <Link href="/introduction">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Start the Course
        </button>
      </Link>
    </main>
  );
}
