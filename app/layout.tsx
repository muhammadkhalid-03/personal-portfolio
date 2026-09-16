import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muhammadkhalid.dev"),
  title: {
    default: "Muhammad Khalid",
    template: "%s | Muhammad Khalid",
  },
  description:
    "Muhammad Khalid is a San Francisco-based software engineer with experience across Durable Agents, backend systems, and product engineering.",
  keywords: [
    "Muhammad Khalid",
    "software engineer",
    "San Francisco",
    "Bay Area engineer",
    "backend engineer",
    "Durable Agents",
  ],
  openGraph: {
    title: "Muhammad Khalid",
    description:
      "Software engineer based in San Francisco, working across Durable Agents, backend systems, and product experiences.",
    url: "https://www.muhammadkhalid.dev",
    siteName: "Muhammad Khalid",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
