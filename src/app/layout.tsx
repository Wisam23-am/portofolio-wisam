import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/content/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7ef" },
    { media: "(prefers-color-scheme: dark)", color: "#f7f7ef" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(personal.website),
  title: {
    default: `Wisam — Dunia Kecil, Cerita Besar`,
    template: `%s | Wisam`,
  },
  description: personal.bio,
  authors: [{ name: personal.name }],
  creator: personal.name,
  keywords: [
    "Wisam",
    "Full-Stack Developer",
    "3D Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "PENS",
    "Surabaya",
    "Software Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: personal.website,
    siteName: "Dunia Wisam",
    title: `${personal.name} — ${personal.role}`,
    description: personal.bio,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Wisam — Dunia Kecil, Cerita Besar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.role}`,
    description: personal.bio,
    images: ["/opengraph-image"],
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
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
