import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaishnavi Sakthi — Creative Designer, Motion & Digital Experiences",
  description:
    "Multidisciplinary creative portfolio of Vaishnavi Sakthi. Brand Design, Packaging, UI/UX, Video Editing, AI Creative Production & Digital Storytelling.",
  keywords: [
    "Vaishnavi Sakthi",
    "Creative Designer",
    "Graphic Designer",
    "Packaging Design",
    "Video Editor",
    "UI/UX Designer",
    "Vuzhavu Branding",
    "AD Trucks",
    "AI Creative Creator"
  ],
  authors: [{ name: "Vaishnavi Sakthi" }],
  openGraph: {
    title: "Vaishnavi Sakthi — Creative Designer, Motion & Digital Experiences",
    description: "I create experiences people don't just see. They feel.",
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#07060A] text-[#FBFBFD] antialiased selection:bg-[#FF1F8E] selection:text-white relative">
        {children}
      </body>
    </html>
  );
}
