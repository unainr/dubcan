import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const CTA = () => {
  return (
    <section className="py-24 bg-linear-to-br from-blue-50 via-blue-100 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA2Ii8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-multiply" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-700">🚀 Start Your Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Ready to Experience{" "}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Superior Performance?
            </span>
          </h2>
          <p className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss your Dubcanlube needs and get a custom quote tailored to your requirements
          </p>
          <Link href="/contact">
            <Button size="lg" >
              Get Your Quote Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
