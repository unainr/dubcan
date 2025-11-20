import { ProductView } from "@/modules/products/ui/view/product-view"
import { Metadata } from "next";

const ProductPage = () => {
  return (
    <>
    <ProductView/>
    </>
  )
}

export default ProductPage



export const metadata: Metadata = {
  title: "Industrial dubcanlube s & Motor Oils - Complete Product Range | DubCanLub Dubai",
  description: "Browse DubCanLub's comprehensive range of industrial dubcanlube s in Dubai: synthetic motor oils, hydraulic oils, gear oils, greases, and nano-technology solutions. Premium quality for all machinery types. Shop now.",
  keywords: "buy industrial dubcanlube s Dubai, motor oil products UAE, synthetic engine oil, hydraulic oil Dubai, gear dubcanlube s, industrial grease UAE, nano dubcanlube s, automotive oil, machinery dubcanlube s Dubai, transmission oil, compressor oil",
  openGraph: {
    title: "Premium Industrial dubcanlube s & Motor Oils - DubCanLub Products",
    description: "Complete range of high-performance dubcanlube s for industrial and automotive applications in Dubai & UAE. Synthetic oils, greases, and nano-technology solutions.",
    type: "website",
    locale: "en_AE",
    url: "https://www.dubcanlub.com/products",
    siteName: "DubCanLub",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DubCanLub Product Range",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DubCanLub Products - Industrial dubcanlube s & Motor Oils",
    description: "Premium dubcanlube s for every industrial and automotive need",
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
    canonical: "https://www.dubcanlub.com/products",
  },
};