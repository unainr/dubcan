import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { features } from '@/constants'

export const Featured = () => {
  return (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose LUBCAN?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading lubricants powered by advanced nanotechnology formulation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group border-border hover:border-primary/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-glow">
                    <feature.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
