import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { process } from '@/constants'

export const OurProcess = () => {
  return (
  <section className="py-20 bg-slate-50 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
        Our Process
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
        Simple Steps to <span className="text-blue-600">Get Started</span>
      </h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">
        From consultation to ongoing support, we make it easy to get the right lubricants
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {process.map((item: any, index: any) => (
        <div key={index} className="relative group">
          {index < process.length - 1 && (
            <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-linear-to-r from-blue-500/50 to-transparent -translate-x-1/2 z-0" />
          )}
          <Card className="relative z-10 border-slate-200 bg-white hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500">
            <CardHeader>
              <div className="text-6xl font-bold bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                {item.step}
              </div>
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}
