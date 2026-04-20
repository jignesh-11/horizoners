import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pixel = Press_Start_2P({
  weight: "400",
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizoners | Minecraft Bedrock Server",
  description: "Explore. Survive. Build Your Legacy on the ultimate Minecraft Bedrock server.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${pixel.variable} antialiased selection:bg-nether/30 selection:text-nether`}
      >
        {children}
      </body>
    </html>
  );
}
