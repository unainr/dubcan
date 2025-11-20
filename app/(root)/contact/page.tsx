import { ContactView } from "@/modules/contact/ui/view/contact-view"
import { Metadata } from "next";

const ContactPage = () => {
  return (
    <>
    <ContactView/>
    </>
  )
}

export default ContactPage


export const metadata: Metadata = {
  title: "Contact DubCanLub Dubai - Get Expert dubcanlube  Solutions & Free Consultation",
  description: "Contact DubCanLub for industrial dubcanlube  inquiries, bulk orders, and technical support in Dubai & UAE. Call now for free consultation on machinery dubcan solutions. Fast delivery across UAE available.",
  keywords: "contact dubcanlube  supplier Dubai, buy industrial oil UAE, dubcanlube  consultation, bulk dubcanlube  orders Dubai, machinery oil support UAE, dubcanlube  distributor Dubai, industrial oil inquiry",
  openGraph: {
    title: "Contact DubCanLub - Expert dubcanlube  Solutions in Dubai",
    description: "Get in touch for industrial dubcanlube s, bulk orders, and technical support. Free consultation available in Dubai & UAE.",
    type: "website",
    locale: "en_AE",
    url: "https://www.dubcanlub.com/contact",
    siteName: "DubCanLub",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact DubCanLub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DubCanLub - dubcanlube  Experts",
    description: "Get expert advice on industrial dubcanlube s. Free consultation.",
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
    canonical: "https://www.dubcanlub.com/contact",
  },
};