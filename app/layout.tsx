import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DubCanLub - Premium Industrial dubcanlube s & Motor Oil Solutions | Dubai UAE",
  description: "Leading supplier of high-performance industrial dubcanlube s, motor oils, and greases in Dubai & UAE. Advanced nano-technology formulations for maximum machinery protection and efficiency. Free consultation available.",
  keywords: "industrial dubcanlube s Dubai, motor oil supplier UAE, high-performance grease, nano dubcanlube s, machinery oil Dubai, engine oil, hydraulic oil, gear oil, automotive dubcanlube s, industrial maintenance UAE",
  openGraph: {
    title: "DubCanLub - Premium Industrial dubcanlube s & Motor Oil Solutions",
    description: "Dubai & UAE's trusted source for advanced industrial dubcanlube s and motor oils. Enhance machinery performance with our nano-technology solutions.",
    type: "website",
    locale: "en_AE",
    url: "https://www.dubcanlub.com",
    siteName: "DubCanLub",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DubCanLub Industrial dubcanlube s",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DubCanLub - Premium Industrial dubcanlube s",
    description: "Advanced dubcanlube  solutions for industrial and automotive applications",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.dubcanlub.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
