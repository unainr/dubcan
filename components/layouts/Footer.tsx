import Link from "next/link"
import { Mail, Phone, MapPin, Globe } from "lucide-react"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import WhatsAppButton from "./what-app-button"
import Logo from "./Logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <><footer className="bg-linear-to-b from-slate-900 to-slate-950 text-slate-50 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Main Footer Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {/* Brand Section */}
                  <div className="space-y-4  ">
                     <Logo/>
                      <p className="text-slate-300 text-sm leading-relaxed">
                          Premium lubricant solutions for superior engine performance and durability.
                      </p>
                      
                  </div>

                  {/* Quick Links */}
                  <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-blue-400 mb-4">Quick Links</h4>
                      <nav className="space-y-3 flex flex-col">
                          <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                              Home
                          </Link>
                          <Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                              About Us
                          </Link>
                          <Link href="/products" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                              Products
                          </Link>
                          <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                              Contact
                          </Link>
                      </nav>
                  </div>

                  {/* Support */}
                  <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-blue-400 mb-4">Support</h4>
                      <nav className="space-y-3 flex flex-col">
                          <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                              FAQ
                          </Link>
                          <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                              Shipping Info
                          </Link>
                          <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                              Returns
                          </Link>
                          <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                              Privacy Policy
                          </Link>
                      </nav>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-blue-400 mb-4">Contact Us</h4>
                      <div className="space-y-3">
                          <a
                              href="tel:+2540733811388"
                              className="flex items-start gap-3 text-slate-300 hover:text-blue-400 transition-colors text-sm group"
                          >
                              <Phone className="w-5 h-5 mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                              <span>+254 0733 811 388</span>
                          </a>
                          <a
                              href="mailto:info@dubcanlube.com"
                              className="flex items-start gap-3 text-slate-300 hover:text-blue-400 transition-colors text-sm group"
                          >
                              <Mail className="w-5 h-5 mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                              <span>info@dubcanlube.com</span>
                          </a>
                          <div className="flex items-start gap-3 text-slate-300 text-sm">
                              <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                              <div>
                                  <p>P.O BOX 16526</p>
                                  <p>80100 Mombasa, Kenya</p>
                              </div>
                          </div>
                          <a
                              href="http://www.dubcanlube.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-3 text-slate-300 hover:text-blue-400 transition-colors text-sm group"
                          >
                              <Globe className="w-5 h-5 mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                              <span>www.dubcanlube.com</span>
                          </a>
                      </div>
                  </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-800 pt-8"></div>

              {/* Bottom Footer */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-slate-400 text-sm text-center md:text-left">
                      &copy; {currentYear} Dub Can Lube. All rights reserved.
                  </p>
                  <div className="flex gap-6">
                      <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                          Terms of Service
                      </Link>
                      <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                          Privacy Policy
                      </Link>
                  </div>
              </div>
          </div>
      </footer>
      <WhatsAppButton />
      </>
  )
}
