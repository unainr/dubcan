"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { productCategories } from "@/constants"
import { User, Building2, Mail, Phone, Package, ClipboardList, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const whatsappNumber = "254733811388"

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    if (!name || (!phone && !email) || !message) return
    setSubmitting(true)
    const text = [
      "New inquiry from DubCanLub website",
      `Name: ${name}`,
      company ? `Company: ${company}` : "",
      email ? `Email: ${email}` : "",
      phone ? `Phone: ${phone}` : "",
      category ? `Interested in: ${category}` : "",
      quantity ? `Quantity/Need: ${quantity}` : "",
      `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n")
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
    setSubmitting(false)
  }

  const clearForm = () => {
    setName("")
    setCompany("")
    setEmail("")
    setPhone("")
    setCategory("")
    setQuantity("")
    setMessage("")
    setSubmitted(false)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Contact our technical team</CardTitle>
        <CardDescription>Tell us your application and requirements for the best recommendation</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  aria-invalid={submitted && !name}
                  className="w-full h-10 rounded-md border bg-background px-10 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm">Company</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company Ltd."
                  className="w-full h-10 rounded-md border bg-background px-10 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full h-10 rounded-md border bg-background px-10 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                />
              </div>
              <p className="text-xs text-muted-foreground">Provide email or phone</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+254 700 000 000"
                  className="w-full h-10 rounded-md border bg-background px-10 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm">Product Category</label>
              <div className="relative">
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-10 rounded-md border bg-background px-10 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  <option value="">Select a category</option>
                  {productCategories.map((p) => (
                    <option key={p.name} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm">Quantity / Need</label>
              <div className="relative">
                <ClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g., 20L, bulk order"
                  className="w-full h-10 rounded-md border bg-background px-10 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Equipment, operating conditions, certifications required, delivery timeline"
              aria-invalid={submitted && !message}
              className="w-full min-h-32 rounded-md border bg-background px-3 py-2 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            />
          </div>

          <div className="flex items-center justify-start gap-3">
            <Button type="submit" disabled={submitting} className="px-6">
              {submitting ? (
                <span className="inline-flex items-center gap-2"><Loader2 className="size-4 animate-spin" /> Sending</span>
              ) : (
                "Send via WhatsApp"
              )}
            </Button>
            <Button type="button" variant="ghost" onClick={clearForm}>Clear</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="border-t">
        <p className="text-sm text-muted-foreground">Your details are only used to reply to your inquiry</p>
      </CardFooter>
    </Card>
  )
}