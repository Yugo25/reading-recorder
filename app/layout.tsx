import type { Metadata } from "next";
import Link from "next/link";
import { Inconsolata } from "next/font/google";
import type { LayoutProps } from "@/lib/types";
// Import Tailwind.css
import "./globals.css";

// Enable google font
const fnt = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Reading Recorder",
  description: "App to record reading log",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={fnt.className}>
        <h1 className="text-4xl text-indigo-800 font-bold my-2">
          Reading Recorder
        </h1>
      </body>
    </html>
  );
}
