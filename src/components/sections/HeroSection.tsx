import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  "More qualified demo requests",
  "Higher conversion on high-intent pages",
  "Clear analytics and dashboards you actually use",
  "SEO + CRO + dev all under one roof",
];

export const HeroSection = () => {
  return (
    <section className="hero-section text-white py-16 md:py-24 lg:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
              Award-winning digital marketing and web design agency
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Websites that turn traffic into booked 
              <span className="text-primary"> calls and revenue guaranteed.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              We design, write and develop conversion-focused websites that grow your pipeline in 90 days or less, or we work for free until they do.
            </p>
       
            {/* <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-white/90">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul> */}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link href="#cta-section">Get My Website Revenue Plan</Link>
              </Button>
              {/* <Button variant="hero-link" size="xl" asChild>
                <Link href="#testimonial-section">See how we've done it for others →</Link>
              </Button> */}
            </div>
          </div>

          {/* Hero Image - Dashboard Mockup */}
          <div className="relative animate-slide-in-right">
            <Image src="/assets/images/home/bannerside2.png" className="home-banner-img" alt="Hero Image" width={800} height={700} />

            {/* <div className="relative">
        
              <div className="bg-white rounded-xl shadow-2xl p-4 transform rotate-2">
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
                    <div className="h-8 bg-primary/20 rounded"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-primary/30 rounded"></div>
                      <div className="h-16 bg-green-500/30 rounded"></div>
                      <div className="h-16 bg-blue-500/30 rounded"></div>
                    </div>
                    <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/40 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 transform -rotate-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">↑</span>
                  </div>
                  <div>
                    <p className="text-foreground font-bold">+47%</p>
                    <p className="text-muted-foreground text-xs">Conversion Rate</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-3 transform rotate-6">
                <div className="flex gap-1 items-end h-12">
                  <div className="w-2 bg-primary/40 rounded-t h-4"></div>
                  <div className="w-2 bg-primary/50 rounded-t h-6"></div>
                  <div className="w-2 bg-primary/60 rounded-t h-5"></div>
                  <div className="w-2 bg-primary/70 rounded-t h-8"></div>
                  <div className="w-2 bg-primary/80 rounded-t h-7"></div>
                  <div className="w-2 bg-primary rounded-t h-12"></div>
                </div>
                <p className="text-foreground text-xs font-medium mt-2">Traffic Growth</p>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};
