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
      <body className="min-h-full flex flex-col">{children}
        
      </body>
    </html>
  );
}
