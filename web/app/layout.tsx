import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

import NavBar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doodle",
  description: "real time doodling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-full min-h-screen w-screen bg-white dark:bg-black dark:text-white p-5",
          inter.className
        )}
      >
        <Providers>
          <NavBar className="w-3/5 sm:w-4/5 mx-auto" />
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
