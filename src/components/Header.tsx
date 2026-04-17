import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-border shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-secondary font-serif font-bold text-xl">A</span>
          </div>
          <span className={`font-serif font-bold text-2xl tracking-tight transition-colors ${
            isScrolled ? "text-primary" : "text-white"
          }`}>
            Aura Gifting
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => scrollTo("why-us")} 
            className={`text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => scrollTo("products")} 
            className={`text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            Our Collection
          </button>
          <button 
            onClick={() => scrollTo("how-it-works")} 
            className={`text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            How It Works
          </button>
          <Button 
            onClick={() => scrollTo("contact")}
            variant={isScrolled ? "default" : "secondary"}
            className={isScrolled 
              ? "bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-widest text-xs font-bold px-6 h-11" 
              : "bg-secondary text-primary hover:bg-secondary/90 rounded-none uppercase tracking-widest text-xs font-bold px-6 h-11 border-none"}
          >
            Request a Quote
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          <button 
            onClick={() => scrollTo("why-us")} 
            className="text-left text-foreground font-bold text-xs uppercase tracking-widest py-3 border-b border-border/50"
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => scrollTo("products")} 
            className="text-left text-foreground font-bold text-xs uppercase tracking-widest py-3 border-b border-border/50"
          >
            Our Collection
          </button>
          <button 
            onClick={() => scrollTo("how-it-works")} 
            className="text-left text-foreground font-bold text-xs uppercase tracking-widest py-3 border-b border-border/50"
          >
            How It Works
          </button>
          <Button 
            onClick={() => scrollTo("contact")}
            className="w-full bg-primary text-white rounded-none uppercase tracking-widest text-xs font-bold h-12 mt-2"
          >
            Request a Quote
          </Button>
        </div>
      )}
    </header>
  );
}