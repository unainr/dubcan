"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappNumber = "254733811388" // Format: country code + number without +
  const message = "Hello! I am interested in your products."
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-8 right-8 z-40 group"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Animated Pulse Background */}
        <div className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 scale-100 group-hover:scale-150"></div>

        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Label Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-3 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
            Chat with us!
            <div className="absolute top-full right-4 w-2 h-2 bg-green-600 transform rotate-45"></div>
          </div>
        )}
      </a>

      {/* Mobile Optimized Button */}
      <style jsx>{`
        @media (max-width: 768px) {
          a {
            bottom: 24px;
            right: 16px;
          }
          div[class*='w-14'] {
            width: 56px;
            height: 56px;
          }
        }
      `}</style>
    </>
  )
}
