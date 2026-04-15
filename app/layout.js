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
  metadataBase: new URL("https://joshjgriffith.com"),
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
    url: "https://joshjgriffith.com",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Josh Griffith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Griffith | AI & Agile Practice Coach",
    description:
      "Over 12 years transforming how organizations work. $6.5M+ in documented savings.",
    images: ["/images/hero-bg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans bg-white text-gray-500 min-h-screen overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
