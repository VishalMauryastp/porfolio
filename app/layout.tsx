import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://porfolio-sand-gamma.vercel.app/";
const siteTitle =
  "Vishal Maurya - Full Stack Developer | Next.js, React, FastAPI & AI";
const siteDescription =
  "Portfolio of Vishal Maurya - Full Stack Developer with 3+ years of experience building scalable SaaS and AI-driven web applications using Next.js, React.js, Node.js, Python FastAPI, PostgreSQL and MongoDB.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Vishal Maurya",
  },
  description: siteDescription,
  applicationName: "Vishal Maurya Portfolio",
  authors: [{ name: "Vishal Maurya", url: siteUrl }],
  creator: "Vishal Maurya",
  publisher: "Vishal Maurya",
  keywords: [
    "Vishal Maurya",
    "Full Stack Developer",
    "Fullstack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Developer",
    "FastAPI Developer",
    "Python Developer",
    "MERN Stack Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "AWS",
    "Generative AI",
    "AI Engineer",
    "LangChain",
    "OpenAI",
    "LiveKit",
    "SaaS Developer",
    "Portfolio",
    "Hire Vishal Maurya",
  ],
  category: "Technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vishal Maurya Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/avtaar.png",
        width: 512,
        height: 512,
        alt: "Vishal Maurya - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/avtaar.png"],
    creator: "@VishalMauryastp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/avtaar.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
