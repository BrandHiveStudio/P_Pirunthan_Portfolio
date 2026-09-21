import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "P Pirunthan | Full-Stack Developer & AI Automation Specialist",
  description:
    "Personal portfolio of P Pirunthan — Full-Stack Developer, AI Automation Specialist, and Founder of BrandHive Studio. Building resilient web applications, intelligent AI workflows, and business-critical systems.",
  keywords: [
    "P Pirunthan",
    "Full-Stack Developer",
    "AI Automation Specialist",
    "BrandHive Studio",
    "Next.js Developer",
    "TypeScript",
    "AI Chatbots",
    "WhatsApp AI Agent",
    "ScreenGuard Finder",
    "Sri Lanka Developer",
  ],
  authors: [{ name: "P Pirunthan" }],
  creator: "P Pirunthan",
  openGraph: {
    title: "P Pirunthan | Full-Stack Developer & AI Automation Specialist",
    description:
      "Full-Stack Developer, AI Automation Specialist, and Founder of BrandHive Studio. Building web applications, AI chatbots, and business systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-[#12BDF7]/25 selection:text-[#12BDF7] bg-[#0b0f19] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
