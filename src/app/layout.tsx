import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Repurpose — Transform ONE Video into DOZENS of Posts",
  description: "AI-powered content repurposing. Upload once, get optimized posts for LinkedIn, Twitter, Instagram, TikTok, and more. In seconds.",
  keywords: ["content repurposing", "social media", "AI", "video to text", "podcast repurposing"],
  openGraph: {
    title: "Repurpose — Transform ONE Video into DOZENS of Posts",
    description: "AI-powered content repurposing for creators. Upload once, post everywhere.",
    type: "website",
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
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&f[]=general-sans@600,500,400&f[]=dm-mono@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#0F0F0F]">
        {children}
      </body>
    </html>
  );
}
