import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Please provide some details about your requirements"),
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const text = [
      "🌟 *New Inquiry — Aura Gifting*",
      "",
      `👤 *Name:* ${values.fullName}`,
      `🏢 *Company:* ${values.companyName}`,
      `📱 *Phone:* ${values.phone}`,
      `📧 *Email:* ${values.email}`,
      "",
      `📋 *Requirements:*`,
      values.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
    form.reset();
    toast({
      title: "Opening WhatsApp",
      description: "Your inquiry has been prepared. Complete the send in WhatsApp.",
    });
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-none flex flex-col md:flex-row premium-shadow border border-border">
          
          <div className="w-full md:w-5/12 bg-primary p-12 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            
            <div className="relative z-10">
              <span className="section-label text-secondary mb-6 block">Inquire Now</span>
              <h2 className="text-4xl font-serif font-bold mb-6">Start your gifting journey</h2>
              <p className="text-white/80 mb-12 leading-relaxed font-light text-lg">
                Connect with our curation team to discuss your corporate gifting requirements. We'll design a program tailored specifically to your brand and budget.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-2">Direct Contact</h4>
                  <p className="text-white font-light">partnerships@auragifting.com</p>
                  <p className="text-white font-light">+1 (800) 555-AURA</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-secondary uppercase mb-2">Corporate HQ</h4>
                  <p className="text-white font-light leading-relaxed">100 Executive Blvd, Suite 400<br/>San Francisco, CA 94104</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 p-12 md:p-16">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Request a Custom Proposal</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} className="h-12 bg-transparent border-border focus-visible:ring-secondary rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Corp" {...field} className="h-12 bg-transparent border-border focus-visible:ring-secondary rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@acmecorp.com" {...field} className="h-12 bg-transparent border-border focus-visible:ring-secondary rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} className="h-12 bg-transparent border-border focus-visible:ring-secondary rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Requirements & Timeline</FormLabel>
                      <FormControl>
                        <Textarea 
                          id="message"
                          placeholder="Tell us about the occasion, estimated quantities, and when you need delivery..." 
                          className="min-h-[150px] resize-none bg-transparent border-border focus-visible:ring-secondary rounded-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-sm uppercase tracking-widest font-bold bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-none gap-3"
                    disabled={isSubmitting}
                  >
                    <WhatsAppIcon className="h-5 w-5 shrink-0" />
                    {isSubmitting ? "Opening WhatsApp..." : "Send Inquiry on WhatsApp"}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-4 font-medium">You'll be taken to WhatsApp to send the message</p>
                </div>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
