import AboutView from '@/modules/about/ui/view/about-view'
import { Metadata } from 'next'
import React from 'react'

const Aboutpage = () => {
  return (
    <>
    <AboutView/>
    </>
  )
}

export default Aboutpage

export const metadata: Metadata = {
  title: "About DubCanLub - Leading dubcanlube  Manufacturer in Dubai | Our Story",
  description: "Discover DubCanLub's journey in revolutionizing industrial dubcan in Dubai & UAE. Over 15 years of expertise in manufacturing premium dubcanlube s with cutting-edge nano-technology. ISO certified quality assurance.",
  keywords: "dubcanlube  manufacturer Dubai, industrial oil company UAE, nano-technology dubcanlube s, ISO certified dubcanlube s Dubai, dubcanlube  supplier history, machinery oil expertise UAE, automotive oil manufacturer",
  openGraph: {
    title: "About DubCanLub - Leading dubcanlube  Manufacturer in Dubai",
    description: "15+ years of excellence in manufacturing high-performance industrial dubcanlube s with advanced nano-technology in Dubai & UAE.",
    type: "website",
    locale: "en_AE",
    url: "https://www.dubcanlub.com/about",
    siteName: "DubCanLub",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DubCanLub Manufacturing Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About DubCanLub - dubcanlube  Manufacturing Excellence",
    description: "15+ years of expertise in advanced industrial dubcanlube s",
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
    canonical: "https://www.dubcanlub.com/about",
  },
};