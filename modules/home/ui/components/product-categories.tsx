import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { productCategories } from '@/constants'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const ProductCategories = () => {
  return (
 <section className="py-20 bg-slate-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
        Product Catalog
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
        Our <span className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Product Range</span>
      </h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">
        Comprehensive solutions for all your lubrication needs
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {productCategories.map((category, index) => (
        <Link key={index} href={category.link} className="group">
          <Card className="h-full border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden bg-white relative">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="aspect-4/3 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                {category.name}
                <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </CardTitle>
              <CardDescription className="leading-relaxed">{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <Button variant="link" className="p-0 h-auto text-blue-600 font-semibold group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
    <div className="text-center mt-12">
      <Link href="/products">
        <Button variant="default" size="lg" className="px-8 py-6 h-auto text-lg hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
          View All Products <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </div>
</section>
  )
}
