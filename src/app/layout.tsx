import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshit Maheshwari — Software Engineer & AI/ML Developer",
  description:
    "Portfolio of Harshit Maheshwari — B.Tech IT student at Manipal University Jaipur. Building AI/ML systems, full-stack applications, and IoT solutions. 9.28 GPA, 6× Dean's List, patent pending.",
  keywords: [
    "Harshit Maheshwari",
    "Software Engineer",
    "AI ML Developer",
    "Full Stack Developer",
    "Manipal University Jaipur",
    "React Next.js Python",
    "Portfolio",
  ],
  authors: [{ name: "Harshit Maheshwari" }],
  creator: "Harshit Maheshwari",
  openGraph: {
    type: "website",
    title: "Harshit Maheshwari — Software Engineer & AI/ML Developer",
    description:
      "Building intelligent systems that bridge AI and real-world impact.",
    siteName: "Harshit Maheshwari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Maheshwari",
    description: "Software Engineer & AI/ML Developer",
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
