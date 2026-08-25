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
  title: "Josh Griffith | Change Strategist & AI Enablement Lead",
  description:
    "Portfolio of Josh Griffith — Change Strategist, AI Enablement & Transformation Lead, and builder of the adoption, training, and governance frameworks that make transformation stick. Over $6.5M in documented savings.",
  keywords: [
    "Josh Griffith",
    "Change Strategist",
    "Change Management",
    "AI Enablement",
    "Organizational Transformation",
    "Lean Six Sigma",
    "AI Adoption",
    "Power Platform",
    "Organizational Development",
  ],
  openGraph: {
    title: "Josh Griffith | Change Strategist & AI Enablement Lead",
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
    title: "Josh Griffith | Change Strategist & AI Enablement Lead",
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
