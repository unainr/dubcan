import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/50 z-10" />
        <Image 
        width={600}
        height={600}
          src={'/images/hero-industrial.jpg'} 
          alt="Industrial machinery" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[scale-in_1s_ease-out]"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-semibold text-white">🏆 API Certified Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Nanotechnology Formulation
            <br />
            <span className="bg-linear-to-r from-accent via-secondary to-accent bg-clip-text text-transparent animate-pulse-glow">
              Lubricants
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto animate-slide-up font-light leading-relaxed">
            Premium lubricants engineered for heavy-duty diesel engines, industrial machinery, and demanding applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link href="/products">
              <Button variant="ghost" size="lg" className="text-lg px-10 py-6 h-auto">
                View Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-10 py-6 h-auto hover:scale-105 transition-transform">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-20" />
      </section>
  )
}
