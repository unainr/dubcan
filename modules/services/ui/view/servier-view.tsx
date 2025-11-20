import Banner from '@/components/banner'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { FlaskConical, Wrench, ClipboardList, GraduationCap, LifeBuoy, Truck, Gauge } from 'lucide-react'
import Link from 'next/link'
import { process, faqs, industries, stats } from '@/constants'
import { Stats } from '@/modules/home/ui/components/stats'
import { CTA } from '@/modules/home/ui/components/CTA'

export const ServiceView = () => {
  return (
    <>
    <Banner title='Services' linkText='services' />
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Professional dubcanlube  services</h2>
          <p className="text-muted-foreground">Optimization, analysis, and support to maximize equipment performance</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Badge variant="secondary">API certified</Badge>
          <Badge variant="outline">Response within 24 hours</Badge>
        </div>
      </div>

      <div className="rounded-xl border bg-linear-to-r from-blue-50 via-blue-100 to-indigo-50 p-6 mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <FlaskConical className="size-5" />
          <div>
            <div className="text-sm font-medium">48h lab turnaround</div>
            <div className="text-sm text-muted-foreground">Actionable oil analysis reports</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Wrench className="size-5" />
          <div>
            <div className="text-sm font-medium">On-site support</div>
            <div className="text-sm text-muted-foreground">Audits, optimization, training</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Gauge className="size-5" />
          <div>
            <div className="text-sm font-medium">OEM compliance</div>
            <div className="text-sm text-muted-foreground">Meets SAE, API, ILSAC specs</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="transition-all hover:shadow-lg hover:-translate-y-0.5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <FlaskConical className="size-5" />
              <CardTitle>Oil analysis & lab testing</CardTitle>
            </div>
            <CardDescription>Detection of wear, contamination, and oxidation trends</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>Viscosity, TBN, TAN, particle count, oxidation</div>
            <div>Actionable reports with maintenance recommendations</div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg hover:-translate-y-0.5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Wrench className="size-5" />
              <CardTitle>dubcanlube audits & optimization</CardTitle>
            </div>
            <CardDescription>Route planning, product selection, and interval setting</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>Reduce consumption and extend service life</div>
            <div>Compliance with OEM specifications</div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg hover:-translate-y-0.5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ClipboardList className="size-5" />
              <CardTitle>Preventive maintenance planning</CardTitle>
            </div>
            <CardDescription>Schedules aligned to your operating conditions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>Minimize downtime with planned interventions</div>
            <div>Integrated service logs and checkpoints</div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg hover:-translate-y-0.5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <GraduationCap className="size-5" />
              <CardTitle>On-site training</CardTitle>
            </div>
            <CardDescription>Best practices for storage, application, and safety</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>Technician workshops and refresher courses</div>
            <div>Certificate of attendance</div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg hover:-translate-y-0.5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Gauge className="size-5" />
              <CardTitle>Technical consultation</CardTitle>
            </div>
            <CardDescription>Product selection tailored to application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>Meets or exceeds SAE, API, ILSAC specifications</div>
            <div>Support for heavy-duty and extreme conditions</div>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg hover:-translate-y-0.5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Truck className="size-5" />
              <CardTitle>Bulk supply & logistics</CardTitle>
            </div>
            <CardDescription>Reliable delivery and inventory planning</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>Flexible pack sizes and recurring schedules</div>
            <div>Export and regional distribution</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Industries we serve</h3>
        <div className="flex flex-wrap items-center gap-3">
          {industries.map((ind) => (
            <Badge key={ind.title} variant="outline" className="px-3 py-1">
              {ind.title}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Our process</CardTitle>
            <CardDescription>From consultation to ongoing support</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {process.map((p) => (
                <div key={p.step} className="rounded-xl border p-4">
                  <div className="text-sm text-muted-foreground">Step {p.step}</div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-muted-foreground">{p.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/contact">
              <Button>Request a service plan</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <CardTitle>FAQs</CardTitle>
            <CardDescription>Common questions about our services</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(0, 4).map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

    </section>
   <Stats/>

     <CTA/>
    </>
  )
}
