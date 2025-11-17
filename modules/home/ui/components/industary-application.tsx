import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { industries } from '@/constants'

export const IndustaryApplication = () => {
  return (
  <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Industries We Serve
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Trusted Across <span className="text-primary">Multiple Industries</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our advanced lubricants power operations across diverse sectors worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="group border-border hover:border-primary/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <industry.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
