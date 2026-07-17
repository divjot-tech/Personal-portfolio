import Particles from "@/components/effects/Particles";
import PageLoader from "@/components/effects/PageLoader";
import MouseGlow from "@/components/effects/MouseGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Divjot Singh | Full Stack Developer",
    template: "%s | Divjot Singh",
  },

  description:
    "I'm Divjot Singh, a Full Stack Developer passionate about building modern, responsive, and scalable web applications using React, Next.js, TypeScript, and Tailwind CSS.",

  keywords: [
    "Divjot Singh",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Node.js",
  ],

  authors: [
    {
      name: "Divjot Singh",
    },
  ],

  creator: "Divjot Singh",

  metadataBase: new URL("https://your-vercel-url.vercel.app"),

  openGraph: {
    title: "Divjot Singh | Full Stack Developer",

    description:
      "Explore my portfolio showcasing projects, technical skills, certifications, and experience in Full Stack Web Development.",

    url: "https://your-vercel-url.vercel.app",

    siteName: "Divjot Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Divjot Singh | Full Stack Developer",

    description:
      "Portfolio of Divjot Singh - Full Stack Developer specializing in React, Next.js, TypeScript and modern web technologies.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#020617] text-white">
        <PageLoader />
        <Particles />
  <ScrollProgress />
  <MouseGlow />
  {children}
</body>
    </html>
  );
}