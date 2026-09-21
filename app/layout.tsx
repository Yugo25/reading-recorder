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
        {/* common navigation menu */}
        <nav>
          <ul className="flex bg-blue-600 mb-4 pl-2">
            <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
              <Link className="no-underline text-blue-300" href="/">
                Home</Link></li>
            <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded text-blue-300">
              <Link className="no-underline text-blue-300" href="/books">
                Search</Link></li>
            <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded text-blue-300">
                <a className="no-underline text-blue-300"
                  href="https://wings.msn.to/" target="_blank">Support</a></li>
          </ul>
        </nav>
        {/* Show the page components */}
        <div className="ml-2">
          {children}
        </div>
      </body>
    </html>
  );
}
