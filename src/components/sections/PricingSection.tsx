import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Website Starter",
    description: "For growing brands ready to level up their web presence",
    price: "$15,000",
    priceNote: "Starting at",
    features: [
      "5-10 page custom website",
      "Responsive design (mobile + desktop)",
      "Basic SEO setup",
      "CMS for easy content updates",
      "Contact forms + lead capture",
      "Google Analytics setup",
      "30-day post-launch support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Website Growth",
    description: "For teams serious about using their website to drive pipeline",
    price: "$35,000",
    priceNote: "Starting at",
    features: [
      "10-25 page custom website",
      "Full UX & content strategy",
      "Conversion-optimized design",
      "Advanced SEO foundation",
      "Custom integrations (CRM, marketing tools)",
      "Analytics dashboard setup",
      "90-day optimization program",
      "Dedicated project manager",
    ],
    cta: "Get Your Build Plan",
    popular: true,
  },
  {
    name: "Website Enterprise",
    description: "For organizations with complex needs and high-traffic sites",
    price: "Custom",
    priceNote: "Let's talk",
    features: [
      "25+ page custom website",
      "Full-stack development",
      "Headless CMS architecture",
      "Multi-site or multi-language",
      "Custom applications & portals",
      "Performance optimization",
      "Ongoing retainer options",
      "Priority support SLA",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Transparent pricing for{" "}
            <span className="text-primary">serious teams.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project is unique, but here's a starting point. Get a detailed proposal with your Website Revenue Plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-background rounded-2xl p-6 lg:p-8 border popular-pricing-card ${
                plan.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-xs text-muted-foreground">{plan.priceNote}</span>
                </div>
                <div className="text-4xl font-bold text-foreground">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? "default" : "outline"} size="lg" className="w-full" asChild>
                <Link href="#cta-section">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 rounded-xl p-8 border border-primary/20 w-full mx-auto text-center">
          <h3 className="font-bold text-foreground mb-2">Not sure which plan fits?</h3>
          <p className="text-muted-foreground mb-4">
            Start with a free Website Revenue Plan. We'll assess your needs and recommend the right scope and investment level.
          </p>
          <Button variant="default" asChild>
            <Link href="#cta-section">Get Your Free Assessment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
