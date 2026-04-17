import { Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#061A1A] text-white pt-20 pb-10 border-t-2 border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary border border-secondary/30 rounded-full flex items-center justify-center">
                <span className="text-secondary font-serif font-bold text-xl">A</span>
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                Aura Gifting
              </span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed font-light">
              Curating premium corporate gift experiences that turn professional milestones into unforgettable brand statements.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white tracking-widest uppercase text-xs">Quick Links</h4>
            <ul className="space-y-4 font-light text-sm">
              <li>
                <button onClick={() => document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" })} className="text-white/60 hover:text-secondary transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} className="text-white/60 hover:text-secondary transition-colors">
                  Our Collection
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="text-white/60 hover:text-secondary transition-colors">
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white tracking-widest uppercase text-xs">Contact</h4>
            <ul className="space-y-4 text-white/60 font-light text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">partnerships@auragifting.com</li>
              <li className="hover:text-white transition-colors cursor-pointer">+1 (800) 555-AURA</li>
              <li className="pt-2 leading-relaxed">
                100 Executive Blvd, Suite 400<br />
                San Francisco, CA 94104
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40 font-light">
          <p>© {new Date().getFullYear()} Aura Gifting. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}