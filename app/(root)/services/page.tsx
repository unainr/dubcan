import { ServiceView } from "@/modules/services/ui/view/servier-view"
import { Metadata } from "next";

const Services = () => {
  return (
    
    <>
    <ServiceView/>
    </>
  )
}

export default Services


export const metadata: Metadata = {
  title: "dubcanlube  Services Dubai - Technical Support & Maintenance Solutions | DubCanLub",
  description: "Professional dubcanlube  services in Dubai & UAE including machinery oil analysis, dubcan training, maintenance planning, and technical consultation. Maximize equipment efficiency and reduce downtime with DubCanLub experts.",
  keywords: "oil analysis services Dubai, dubcan training UAE, machinery maintenance Dubai, dubcanlube  consulting, preventive maintenance UAE, equipment dubcan, industrial support services Dubai, dubcanlube  testing",
  openGraph: {
    title: "Professional dubcanlube  Services - DubCanLub Dubai",
    description: "Expert services: oil analysis, dubcan training, and technical support for optimal machinery performance in Dubai & UAE.",
    type: "website",
    locale: "en_AE",
    url: "https://www.dubcanlub.com/services",
    siteName: "DubCanLub",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DubCanLub Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DubCanLub Services - dubcanlube  Expertise",
    description: "Professional oil analysis, training, and technical support",
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
    canonical: "https://www.dubcanlub.com/services",
  },
};
