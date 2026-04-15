import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Josh Griffith | AI & Agile Practice Coach",
  description:
    "Portfolio of Josh Griffith — AI & Agile Practice Coach, Process Transformation Expert, and builder of scalable tech-enabled solutions. Over $6.5M in documented savings.",
  keywords: [
    "Josh Griffith",
    "Agile Coach",
    "Process Transformation",
    "Lean Six Sigma",
    "AI Automation",
    "Power Platform",
    "Organizational Development",
  ],
  openGraph: {
    title: "Josh Griffith | AI & Agile Practice Coach",
    description:
      "Over 12 years transforming how organizations work. $6.5M+ in documented savings.",
    url: "https://joshgriffith.dev",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans bg-brand-dark text-slate-200 min-h-screen overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
