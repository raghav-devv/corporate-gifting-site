import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import diwali1 from "@/assets/products/diwali-1.png";
import diwali2 from "@/assets/products/diwali-2.png";
import diwali3 from "@/assets/products/diwali-3.png";
import diwali4 from "@/assets/products/diwali-4.png";
import onboarding1 from "@/assets/products/onboarding-1.png";
import onboarding2 from "@/assets/products/onboarding-2.png";
import onboarding3 from "@/assets/products/onboarding-3.png";
import onboarding4 from "@/assets/products/onboarding-4.png";
import premium1 from "@/assets/products/premium-1.png";
import premium2 from "@/assets/products/premium-2.png";
import premium3 from "@/assets/products/premium-3.jpg";
import yearround1 from "@/assets/products/yearround-1.jpg";
import yearround2 from "@/assets/products/yearround-2.jpg";
import yearround3 from "@/assets/products/yearround-3.jpg";

type Category = "Diwali Kits" | "Onboarding Kits" | "Premium Gifts" | "Year-Round Essentials";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: Category;
}

const products: Product[] = [
  { id: "d1", name: "The Royal Illumination Kit", description: "Premium brass diyas paired with artisanal gold-foil sweets.", image: diwali1, category: "Diwali Kits" },
  { id: "d2", name: "Silver Plated Pooja Thali", description: "Traditional engraving in a premium velvet-lined presentation box.", image: diwali2, category: "Diwali Kits" },
  { id: "d3", name: "Heritage Dry Fruits Reserve", description: "Exotic nuts and dried fruits in a custom wooden glass-lid box.", image: diwali3, category: "Diwali Kits" },
  { id: "d4", name: "Modern Glow Candle Set", description: "Minimalist brass candle holders with high-end scented candles.", image: diwali4, category: "Diwali Kits" },
  
  { id: "o1", name: "The Executive Welcome", description: "Matte black notebook, metallic pen, and ceramic mug set.", image: onboarding1, category: "Onboarding Kits" },
  { id: "o2", name: "Tech Innovator Bundle", description: "Sleek powerbank and wireless mouse in a custom foam insert.", image: onboarding2, category: "Onboarding Kits" },
  { id: "o3", name: "Artisanal Coffee Reserve", description: "Insulated travel mug with a premium bag of roasted coffee beans.", image: onboarding3, category: "Onboarding Kits" },
  { id: "o4", name: "Sustainable Start Kit", description: "Bamboo notebook, cork-barrel pen, and stainless steel bottle.", image: onboarding4, category: "Onboarding Kits" },
  
  { id: "p1", name: "The Chairman's Briefcase", description: "Genuine leather executive briefcase with a luxury fountain pen.", image: premium1, category: "Premium Gifts" },
  { id: "p2", name: "Focus & Flow Set", description: "Noise-canceling headphones with a smart temperature tumbler.", image: premium2, category: "Premium Gifts" },
  { id: "p3", name: "Crystal Reserve Decanter", description: "Luxurious crystal whiskey decanter set with heavy-based glasses.", image: premium3, category: "Premium Gifts" },
  
  { id: "y1", name: "Daily Planner Reserve", description: "Leather-bound daily executive planner and premium rollerball pen.", image: yearround1, category: "Year-Round Essentials" },
  { id: "y2", name: "Travel Tech Organizer", description: "Premium water-resistant travel tech organizer pouch.", image: yearround2, category: "Year-Round Essentials" },
  { id: "y3", name: "Desktop Elegance Mat", description: "Brushed aluminum laptop stand with a vegan leather desk mat.", image: yearround3, category: "Year-Round Essentials" },
];

const categories: Category[] = ["Diwali Kits", "Onboarding Kits", "Premium Gifts", "Year-Round Essentials"];

export function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState<Category>("Diwali Kits");

  const filteredProducts = products.filter(p => p.category === activeCategory);

  const handleRequestQuote = (productName: string) => {
    const contactSection = document.getElementById("contact");
    const messageInput = document.getElementById("message") as HTMLTextAreaElement;
    
    if (contactSection && messageInput) {
      messageInput.value = `I would like to request a quote for the "${productName}".\n\nEstimated quantity: `;
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
      setTimeout(() => messageInput.focus(), 800);
    }
  };

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="section-label text-secondary mb-4 block">Our Collection</span>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-2">
              Curated for every corporate occasion
            </h3>
          </div>
          
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-3 border text-sm font-bold tracking-wider uppercase transition-all duration-300 rounded-none ${
                  activeCategory === category 
                    ? "bg-secondary text-primary border-secondary" 
                    : "bg-transparent text-foreground border-border hover:border-secondary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-white border border-border border-t-2 border-t-transparent hover:border-t-secondary overflow-hidden hover:-translate-y-1 transition-all duration-300 premium-shadow rounded-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <Button 
                      variant="secondary" 
                      className="bg-secondary text-primary hover:bg-secondary/90 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 rounded-none font-bold uppercase tracking-wider text-xs px-6"
                      onClick={() => handleRequestQuote(product.name)}
                    >
                      Quick Quote
                    </Button>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-serif font-bold text-foreground mb-3 line-clamp-1">{product.name}</h4>
                  <p className="text-muted-foreground text-sm mb-8 flex-grow line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-5 mt-auto">
                    <div className="space-y-2">
                      <Label htmlFor={`qty-${product.id}`} className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Quantity Needed</Label>
                      <Input 
                        id={`qty-${product.id}`} 
                        type="number" 
                        placeholder="e.g. 50" 
                        className="h-12 border-border focus-visible:ring-secondary rounded-none"
                      />
                    </div>
                    <Button 
                      className="w-full bg-secondary hover:bg-secondary/90 text-primary rounded-none font-bold uppercase tracking-wider text-sm h-12"
                      onClick={() => handleRequestQuote(product.name)}
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}