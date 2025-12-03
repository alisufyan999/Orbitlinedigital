import { Check } from "lucide-react";
import Image from "next/image";

const cmsFeatures = [
  "Flexible page sections & blocks",
  "Reusable components (hero, testimonials, pricing, FAQs)",
  "Built-in SEO fields for every page",
  "Training and documentation",
];

export const CMSSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1">

            <Image src="/assets/images/home/home2.png" alt="CMS Image" width={600} height={600} />

            {/* <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-border"> 

              <div className="bg-hero px-4 py-3 flex items-center justify-between">
                <span className="text-white text-sm font-medium">Page Builder</span>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-white/20 rounded text-xs text-white flex items-center justify-center">
                    Preview
                  </div>
                  <div className="h-6 w-16 bg-primary rounded text-xs text-white flex items-center justify-center">
                    Publish
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-3">
              
                <div className="border border-dashed border-primary/40 rounded-lg p-3 bg-primary/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary">HERO SECTION</span>
                    <div className="flex gap-1">
                      <div className="w-5 h-5 bg-muted rounded"></div>
                      <div className="w-5 h-5 bg-muted rounded"></div>
                    </div>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-hero/10 to-hero/5 rounded"></div>
                </div>

                <div className="border border-border rounded-lg p-3 hover:border-primary/40 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-muted-foreground">FEATURES GRID</span>
                    <div className="flex gap-1">
                      <div className="w-5 h-5 bg-muted rounded"></div>
                      <div className="w-5 h-5 bg-muted rounded"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-muted rounded"></div>
                    <div className="h-8 bg-muted rounded"></div>
                    <div className="h-8 bg-muted rounded"></div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-3 hover:border-primary/40 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-muted-foreground">TESTIMONIALS</span>
                    <div className="flex gap-1">
                      <div className="w-5 h-5 bg-muted rounded"></div>
                      <div className="w-5 h-5 bg-muted rounded"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 bg-muted rounded"></div>
                    <div className="h-8 flex-1 bg-muted rounded"></div>
                  </div>
                </div>

                <button className="w-full border-2 border-dashed border-muted-foreground/20 rounded-lg py-3 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors">
                  + Add Section
                </button>

              </div>
            </div> */}

          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Edit any page in{" "}
              <span className="text-primary">seconds.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We set up your CMS with flexible blocks and components so your marketing team can 
              launch new pages, update content, and run experiments—without waiting on developers.
            </p>

            <ul className="space-y-3">
              {cmsFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
