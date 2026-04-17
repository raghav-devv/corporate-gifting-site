import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Browse & Select",
    description: "Explore our curated collections of premium gifts tailored for specific corporate milestones and seasons."
  },
  {
    number: "02",
    title: "Share Requirements",
    description: "Tell us your quantity, timeline, and branding needs. Our team will propose customization options and packaging."
  },
  {
    number: "03",
    title: "Receive Custom Quote",
    description: "Get a comprehensive, transparent proposal including product costs, branding, and fulfillment logistics."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="section-label text-secondary mb-4 block">The Process</span>
          <h3 className="text-3xl md:text-5xl font-serif font-bold mt-2">
            Effortless corporate gifting
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px] border-t-2 border-dashed border-border z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-[120px] font-serif font-bold text-secondary/20 leading-none text-center mb-[-60px] relative z-10 select-none pointer-events-none">
                {step.number}
              </div>
              <div className="bg-white p-8 pt-16 border border-border border-l-4 border-l-secondary rounded-none premium-shadow relative z-20">
                <h4 className="text-2xl font-serif font-bold mb-4">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button 
            size="lg" 
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }}
            className="bg-primary text-white hover:bg-primary/90 text-sm font-bold tracking-wide uppercase h-14 px-10 rounded-none"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}