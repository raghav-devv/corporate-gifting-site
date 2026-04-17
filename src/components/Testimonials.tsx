import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Aura completely transformed our Diwali gifting this year. The quality of the products and the attention to detail in the custom packaging left our executive team incredibly impressed.",
    author: "Priya Sharma",
    role: "VP of Human Resources",
    company: "Nexus Financial"
  },
  {
    quote: "We send out hundreds of onboarding kits globally, and Aura handles the logistics flawlessly. The new hires frequently post their kits on social media, which speaks to the premium unboxing experience.",
    author: "David Chen",
    role: "Head of Talent",
    company: "Elevate Tech"
  },
  {
    quote: "Finding gifts that feel genuinely luxurious rather than strictly promotional is difficult. Aura struck the perfect balance. The bespoke leather portfolios were a massive hit with our board.",
    author: "Sarah Jenkins",
    role: "Chief of Staff",
    company: "Meridian Group"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">Trusted by leading enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale mix-blend-luminosity">
            <span className="font-serif text-xl font-bold">Nexus Financial</span>
            <span className="font-sans text-lg font-bold tracking-tighter">ELEVATE</span>
            <span className="font-serif text-2xl italic">Meridian</span>
            <span className="font-sans text-xl font-bold uppercase tracking-widest">Acme Corp</span>
            <span className="font-serif text-xl">Starlight</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 mt-16">
          <Quote className="w-16 h-16 text-secondary mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Excellence recognized by industry leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-none premium-shadow rounded-none">
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="flex-grow">
                    <p className="text-foreground text-lg leading-relaxed font-serif italic mb-10">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center shrink-0">
                      <span className="text-secondary font-serif font-bold text-lg">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                      <p className="text-sm font-bold text-primary mt-1">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}