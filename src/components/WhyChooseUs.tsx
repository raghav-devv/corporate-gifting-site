import { motion } from "framer-motion";
import { Package2, Brush, MapPin, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Package2,
    title: "Scalable Bulk Ordering",
    description: "Whether you need 50 or 5,000 gifts, our logistics infrastructure ensures flawless execution at any scale without compromising on quality."
  },
  {
    icon: Brush,
    title: "Bespoke Custom Branding",
    description: "We don't just slap a logo on a product. We integrate your brand identity elegantly into the packaging, products, and unboxing experience."
  },
  {
    icon: MapPin,
    title: "Pan-India Fulfillment",
    description: "Seamless door-to-door delivery across the country. We handle all shipping logistics so you can focus on your business."
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    description: "Your single point of contact for curation, customization, timelines, and delivery tracking. Executive service from start to finish."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute -top-32 -left-10 text-[300px] font-serif font-bold text-white/5 select-none pointer-events-none leading-none z-0">
        01
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label text-secondary mb-4 block inline-block">The Aura Advantage</span>
          <h3 className="text-3xl md:text-5xl font-serif font-bold mt-4">
            Built for the modern enterprise
          </h3>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full bg-white/5 border-none border-t-2 border-t-secondary rounded-none hover:bg-white/10 transition-colors">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full border border-secondary/30 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 font-serif text-white">{feature.title}</h4>
                  <p className="text-white/70 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}