import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const CTA = () => {
  return (
  <section className="py-24 bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30" />
  <div className="container mx-auto px-4 text-center relative z-10">
    <div className="max-w-4xl mx-auto">
      <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
        <span className="text-sm font-semibold text-white">🚀 Start Your Journey</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Ready to Experience{" "}
        <span className="bg-linear-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
          Superior Performance?
        </span>
      </h2>
      <p className="text-white/95 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
        Contact us today to discuss your lubrication needs and get a custom quote tailored to your requirements
      </p>
      <Link href="/contact">
        <Button variant="secondary" size="lg" className="px-10 py-6 h-auto text-lg hover:scale-105 hover:shadow-glow transition-all duration-300">
          Get Your Quote Today <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </div>
</section>
  )
}
