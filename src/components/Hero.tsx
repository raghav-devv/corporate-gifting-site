import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import p1 from "@/assets/products/premium-1.png";
import p2 from "@/assets/products/premium-2.png";
import p3 from "@/assets/products/premium-3.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between h-full pt-20">
        
        <div className="w-full lg:w-[55%] pt-12 pb-20 lg:py-0 pr-0 lg:pr-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="section-label text-secondary mb-6 block gold-line">
              Premium Corporate Gifting
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Gifts That Speak Your Brand's <span className="text-secondary italic font-light">Language.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-white/80 mb-10 max-w-xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            Elevate your corporate relationships with bespoke gifting experiences curated for executive clients, partners, and exceptional teams.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-secondary text-primary hover:bg-secondary/90 text-sm font-bold tracking-wide uppercase h-14 px-8 rounded-none"
            >
              Get a Custom Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const el = document.getElementById("products");
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
              }}
              className="bg-transparent border-white/20 text-white hover:bg-white/5 text-sm font-bold tracking-wide uppercase h-14 px-8 rounded-none"
            >
              Explore Collection
            </Button>
          </motion.div>

          <motion.div 
            className="flex items-center gap-8 text-white/60 text-sm font-medium uppercase tracking-wider divide-x divide-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="pr-8">500+ Clients</div>
            <div className="px-8">50,000+ Gifts Delivered</div>
            <div className="pl-8 hidden sm:block">Pan-India Delivery</div>
          </motion.div>
        </div>

        <div className="w-full lg:w-[45%] h-[500px] lg:h-[700px] relative hidden lg:block perspective-1000">
          <motion.div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div 
              className="absolute top-0 right-12 w-64 h-64 bg-white/5 border border-white/10 rounded-sm overflow-hidden z-10 premium-shadow"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{ rotate: -5 }}
            >
              <img src={p1} alt="Premium Corporate Gift" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              className="absolute top-32 right-32 w-72 h-72 bg-white/10 border border-white/20 rounded-sm overflow-hidden z-30 premium-shadow"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              style={{ rotate: 2 }}
            >
              <img src={p3} alt="Luxury Corporate Gift" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div 
              className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 border border-white/10 rounded-sm overflow-hidden z-20 premium-shadow"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              style={{ rotate: 8 }}
            >
              <img src={p2} alt="Executive Gift" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
