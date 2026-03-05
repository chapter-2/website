import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "Chapter-2 | Open Chapters",
  description: "Dedicated organization for brutal, self-hosted applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kalam.variable} font-handdrawn antialiased h-screen w-screen overflow-hidden bg-[#Fdfbf7] text-slate-900 selection:bg-pink-300`}
      >
        {children}
      </body>
    </html>
  );
}
