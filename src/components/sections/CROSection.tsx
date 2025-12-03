import { Check } from "lucide-react";
import Image from "next/image";

const conversionLevers = [
  "Clear value props above the fold",
  "High-intent journeys and CTAs",
  "Conversion-ready landing pages",
  "Faster, focused forms and microcopy",
  "Social proof and authority placement",
];

export const CROSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Optimize your website for{" "}
              <span className="text-primary">higher conversions.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Small UX and content tweaks can unlock massive gains. We identify the friction points 
              killing your conversions and systematically eliminate them.
            </p>

            <ul className="space-y-3 mb-8">
              {conversionLevers.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Guarantee Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="font-semibold text-foreground mb-2">Our Guarantee</p>
              <p className="text-muted-foreground text-sm">
                If we don't improve at least one key conversion rate (demos, leads, calls) within 
                90 days of launch, we keep optimizing at no extra cost until we do.
              </p>
            </div>
          </div>


          <div className="relative">

            <Image src="/assets/images/home/home3.png" alt="CRO Image" width={600} height={600} />
         
            {/* <div className="bg-secondary rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
               
                <div className="flex items-center justify-between">
                  <div className="h-3 w-20 bg-muted-foreground/20 rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-3 w-12 bg-muted-foreground/10 rounded"></div>
                    <div className="h-3 w-12 bg-muted-foreground/10 rounded"></div>
                    <div className="h-6 w-16 bg-primary/30 rounded"></div>
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-muted to-muted-foreground/10 rounded relative">
                  <div className="absolute inset-4 space-y-2">
                    <div className="h-4 w-3/4 bg-muted-foreground/20 rounded"></div>
                    <div className="h-3 w-1/2 bg-muted-foreground/10 rounded"></div>
                    <div className="h-8 w-24 bg-primary/40 rounded mt-4"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 bg-muted rounded p-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full mb-2"></div>
                    <div className="h-2 bg-muted-foreground/20 rounded"></div>
                  </div>
                  <div className="h-20 bg-muted rounded p-2">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full mb-2"></div>
                    <div className="h-2 bg-muted-foreground/20 rounded"></div>
                  </div>
                  <div className="h-20 bg-muted rounded p-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full mb-2"></div>
                    <div className="h-2 bg-muted-foreground/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
              +47% CTR
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-3 border border-border">
              <p className="text-xs text-muted-foreground">Form Completions</p>
              <p className="text-lg font-bold text-green-600">↑ 32%</p>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
};
