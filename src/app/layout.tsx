"use client";

import "../styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { TRPCReactProvider } from "~/trpc/react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <Head>
          <title>MO_FLO Learning Platform</title>
          <meta name="description" content="Learn MOHARA's project management methodology" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
          <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-indigo-600">MO_FLO</span>
              </Link>
              
              <div className="flex items-center space-x-4">
                <SignedIn>
                  <nav className="hidden md:flex items-center space-x-6 mr-4">
                    <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600">
                      Dashboard
                    </Link>
                    <Link href="/progress" className="text-gray-600 hover:text-indigo-600">
                      My Progress
                    </Link>
                  </nav>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
              </div>
            </nav>
          </header>

          <main className="pt-16 min-h-screen">
            <TRPCReactProvider>
              <SignedIn>{children}</SignedIn>
              <SignedOut>
                <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Welcome to MO_FLO Learning Platform
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md">
                    Please sign in to access the course content and track your progress.
                  </p>
                  <SignInButton mode="modal">
                    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                      Sign In to Continue
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>
            </TRPCReactProvider>
          </main>

          <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-gray-500">
                  © {new Date().getFullYear()} MOHARA. All rights reserved.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <Link href="/terms" className="text-sm text-gray-500 hover:text-indigo-600">
                    Terms
                  </Link>
                  <Link href="/privacy" className="text-sm text-gray-500 hover:text-indigo-600">
                    Privacy
                  </Link>
                  <Link href="/support" className="text-sm text-gray-500 hover:text-indigo-600">
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}