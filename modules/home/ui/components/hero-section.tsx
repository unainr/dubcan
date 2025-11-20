import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 via-slate-900/70 to-black/80 z-10 pointer-events-none" />
  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950/50 z-10 pointer-events-none" />
  <Image 
    width={600}
    height={600}
    src={'/images/hero-truck.jpg'} 
    alt="Industrial machinery" 
    className="absolute inset-0 w-full h-full object-cover scale-105 animate-[scale-in_1s_ease-out] pointer-events-none"
  /> 
  <div className="container mx-auto px-4 relative z-20 text-center pointer-events-auto">
    <div className="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6 animate-fade-in">
      <span className="text-sm font-semibold text-white">🏆 API Certified Excellence</span>
    </div>
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
      Nanotechnology Formulation
      <br />
      <span className="bg-linear-to-r capitalize from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
       Dubcanlube
      </span>
    </h1>
    <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto animate-slide-up font-light leading-relaxed">
      Premium Dubcanlube engineered for heavy-duty diesel engines, industrial machinery, and demanding applications
    </p>
    <div className="flex flex-col sm:flex-row gap-4 z-10 justify-center animate-scale-in">
      <Link href="/products">
        <Button className="z-50"  size="lg" >
          View Products <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
     
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent z-20 pointer-events-none" />
</section>
  );
};
