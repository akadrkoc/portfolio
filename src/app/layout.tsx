import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdulkadir Koc — Applied Computer Science Student",
  description:
    "Portfolio of Abdulkadir Koc, an Applied Computer Science student at OsloMet. View my projects, skills, and education.",
  keywords: [
    "Applied Computer Science",
    "Student",
    "OsloMet",
    "Portfolio",
    "Developer",
    "Software Engineering",
  ],
  openGraph: {
    title: "Abdulkadir Koc — Applied Computer Science Student",
    description:
      "Portfolio of Abdulkadir Koc, an Applied Computer Science student at OsloMet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
