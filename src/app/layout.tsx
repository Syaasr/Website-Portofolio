import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const siteUrl = "https://profile.syaikhasril.web.id";

export const metadata: Metadata = {
  title: "Syaikhasril Maulana Firdaus",
  description: "Personal Portfolio of Syaikhasril Maulana Firdaus - Informatics Student & IT Generalist.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Syaikhasril Maulana Firdaus",
    description: "Personal Portfolio of Syaikhasril Maulana Firdaus - Informatics Student & IT Generalist.",
    url: siteUrl,
    siteName: "Syaikhasril Maulana Firdaus",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Syaikhasril Maulana Firdaus Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syaikhasril Maulana Firdaus",
    description: "Personal Portfolio of Syaikhasril Maulana Firdaus - Informatics Student & IT Generalist.",
    images: ["/thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syaikhasril Maulana Firdaus",
    "jobTitle": "Software Developer & Robotics Programmer",
    "email": "maulana23firdaus@gmail.com",
    "gender": "Male",
    "nationality": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sukoharjo",
      "addressRegion": "Central Java",
      "addressCountry": "ID"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universitas Sebelas Maret (UNS)"
    },
    "sameAs": [
      "https://www.linkedin.com/in/syaikhasrilmf",
      "https://github.com/syaasr",
      "https://instagram.com/syaikhasrilmf"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Robotics Control",
      "ESP32 Firmware Programming",
      "Web Development",
      "Next.js",
      "Laravel",
      "Machine Learning"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          inter.variable,
          jetbrainsMono.variable,
          "min-h-screen bg-background font-sans antialiased text-foreground nb-tap"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

