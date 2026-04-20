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
  title: "Horizoners Minecraft Server | Bedrock SMP Survival",
  description: "Join Horizoners - the ultimate Minecraft Bedrock survival server featuring custom events, a player-driven economy, and a thriving community. Explore, survive, and build your legacy today!",
  keywords: ["Horizoners", "Minecraft Bedrock Server", "Minecraft SMP", "Horizoners server", "Bedrock survival server", "Minecraft economy server"],
  openGraph: {
    title: "Horizoners Minecraft Server | Bedrock SMP",
    description: "Explore, survive, and build your legacy on the Horizoners Minecraft Bedrock server. Join our active community today!",
    url: "https://horizoners.vercel.app",
    siteName: "Horizoners",
    type: "website",
    images: [
      {
        url: 'https://horizoners.vercel.app/logo.png',
        width: 800,
        height: 800,
        alt: 'Horizoners Minecraft Server Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizoners Minecraft Server",
    description: "The ultimate Minecraft Bedrock survival experience.",
    images: ["https://horizoners.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://horizoners.vercel.app",
  },
  verification: {
    google: "1a-KTmp7yINXoYFSeLab7jxD_xXZYvWETPW5vAMeF9o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GameServer",
    "name": "Horizoners",
    "url": "https://horizoners.vercel.app",
    "game": "Minecraft Bedrock Edition",
    "description": "A survival multiplayer Minecraft Bedrock server featuring custom events, economy systems, and an active community.",
    "serverStatus": "https://schema.org/Online",
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${pixel.variable} antialiased selection:bg-nether/30 selection:text-nether cursor-auto`}
      >
        {children}
      </body>
    </html>
  );
}
