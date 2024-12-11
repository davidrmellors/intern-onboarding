// src/components/Layout.tsx
import type { FC, ReactNode } from "react";
import Link from "next/link";

const Layout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">MO_FLO Bite-Size Course</h1>
        <nav className="mt-2">
          <Link href="/">Introduction</Link>{" | "}
          <Link href="/initiation">Initiation</Link>{" | "}
          <Link href="/planning">Planning</Link>{" | "}
          <Link href="/execution">Execution</Link>{" | "}
          <Link href="/monitoring-control">Monitoring & Control</Link>{" | "}
          <Link href="/closure">Closure</Link>{" | "}
          <Link href="/business-hygiene">Business Hygiene</Link>
        </nav>
      </header>
      <main className="flex-1 p-8">
        {children}
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        &copy; {new Date().getFullYear()} MOHARA. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Layout;
