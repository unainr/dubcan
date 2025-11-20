import Banner from "@/components/banner"
import ContactForm from "../components/contact-form"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { features } from "@/constants"

export const ContactView = () => {
  return (
    <>
    <Banner title="Contact" linkText="contact" />
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get a tailored recommendation</h2>
          <p className="text-muted-foreground">Share your requirements and our team will suggest the right lubricant for your application.</p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Response within 24 hours</Badge>
            <Badge variant="outline">API certified products</Badge>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contact details</CardTitle>
              <CardDescription>Reach us directly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="tel:+2540733811388" className="flex items-center gap-3 text-sm">
                <Phone className="size-4" />
                <span>+254 0733 811 388</span>
              </a>
              <a href="mailto:info@dubcanlube.com" className="flex items-center gap-3 text-sm">
                <Mail className="size-4" />
                <span>info@dubcanlube.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4" />
                <span>P.O BOX 16526, 80100 Mombasa, Kenya</span>
              </div>
              <a
                href="https://wa.me/254733811388?text=Hello%20DubCanLub%2C%20I%20would%20like%20to%20chat%20about%20lubricants"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm"
              >
                <MessageCircle className="size-4" />
                <span>Start WhatsApp chat</span>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why DubCanLub</CardTitle>
              <CardDescription>Core advantages for your equipment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <f.icon className="size-4 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">{f.title}</div>
                    <div className="text-sm text-muted-foreground">{f.description}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <ContactForm />
      </div>
    </section>
    </>
  )
}
