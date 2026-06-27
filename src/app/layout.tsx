import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/ui/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tanmay Mishra — Software Engineer & Cybersecurity Engineer",
  description:
    "Software Engineer specializing in distributed systems, backend engineering, and cybersecurity. Building production-grade systems that scale, secure, and endure.",
  keywords: [
    "Tanmay Mishra",
    "Software Engineer",
    "Cybersecurity Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "Spring Boot",
    "Kafka",
    "Bug Bounty",
  ],
  authors: [{ name: "Tanmay Mishra", url: "https://tanmaymish.dev" }],
  creator: "Tanmay Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanmaymish.dev",
    title: "Tanmay Mishra — Software Engineer & Cybersecurity Engineer",
    description:
      "Software Engineer specializing in distributed systems, backend engineering, and cybersecurity.",
    siteName: "Tanmay Mishra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Mishra — Software Engineer & Cybersecurity Engineer",
    description:
      "Software Engineer specializing in distributed systems, backend engineering, and cybersecurity.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-[#0a0a0c] text-slate-100 overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
