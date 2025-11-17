import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { benefits } from '@/constants'
import { CheckCircle, ArrowRight, Droplet, Cog, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const NanoTechnology = () => {
  return (
     <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image width={600} height={600}  src={'/images/nanotech-bg.jpg'} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Advanced Technology
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Advanced{" "}
                <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Nanotechnology
                </span>{" "}
                Formulation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LUBCAN utilizes cutting-edge nanotechnology to create lubricants that provide unmatched protection and performance. Our formulations are designed to meet the demanding requirements of modern engines and machinery.
              </p>
              <div className="space-y-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link href="/about">
                  <Button variant="default" size="lg" className="px-8 py-6 h-auto text-lg hover:shadow-glow hover:scale-105 transition-all duration-300">
                    Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-border bg-linear-to-br from-card to-card/50 backdrop-blur hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <Droplet className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Quality First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Only top-quality lubricants using the latest innovative technology
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-linear-to-br from-card to-card/50 backdrop-blur hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group mt-8">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-500">
                    <Cog className="h-10 w-10 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ensures excellent performance and longevity for your equipment
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-linear-to-br from-card to-card/50 backdrop-blur hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group md:col-span-2">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                    <Award className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Industry Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Certified by the American Petroleum Institute (API) and meets or exceeds SAE, ILSAC standards
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  )
}
