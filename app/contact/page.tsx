import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowRight, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Orbitline Digital Studio",
  description: "Get in touch with Orbitline. Share your goals and we'll reply with clear next steps.",
};

const serviceLinks = [
  {
    title: "Web Design Agency",
    links: ["Custom Website Design", "Responsive Design", "UI/UX Design", "Brand Identity"],
  },
  {
    title: "Web Development Agency",
    links: ["Custom Development", "CMS Integration", "E-commerce", "Web Applications"],
  },
  {
    title: "Website Management Agency",
    links: ["Hosting & Security", "Maintenance", "Content Updates", "Performance Monitoring"],
  },
  {
    title: "SEO Agency",
    links: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
  },
  {
    title: "CRO Agency",
    links: ["A/B Testing", "Landing Pages", "Form Optimization", "User Research"],
  },
  {
    title: "Analytics Agency",
    links: ["GA4 Setup", "Dashboard Creation", "Conversion Tracking", "Reporting"],
  },
];

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const sent =
    typeof searchParams?.sent === "string"
      ? searchParams?.sent === "1"
      : Array.isArray(searchParams?.sent)
      ? searchParams?.sent?.[0] === "1"
      : false;
  return (
    <>
      {/* Hero + Form Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: Hero + Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Work with Orbitline
                </h1>
                <p className="text-lg text-muted-foreground">
                  Ready to talk? Fill out the form and one of our senior strategists will review 
                  your details and reply within 1 business day with next steps. No fluff, no 
                  pressure — just clear answers, expert direction, and the fastest path toward 
                  website performance gains.
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
                <p className="text-sm text-muted-foreground mb-6">
                  <span className="text-primary">*</span> indicates required fields
                </p>

                {sent && (
                  <div className="mb-6 rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800">
                    Message sent! We'll get back to you within 1 business day with next steps.
                  </div>
                )}

                <form method="post" action="/api/contact" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="sr-only">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name *"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="sr-only">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name *"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="sr-only">Work Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Work Email *"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="sr-only">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName" className="sr-only">Company Name</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyWebsite" className="sr-only">Company Website</Label>
                      <Input
                        id="companyWebsite"
                        name="companyWebsite"
                        placeholder="Company Website"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="sr-only">Tell us about your needs</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your needs *"
                      rows={6}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="hearAboutUs" className="sr-only">How did you hear about us?</Label>
                    <Input
                      id="hearAboutUs"
                      name="hearAboutUs"
                      placeholder="How did you hear about us?"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    By clicking the button below, you are agreeing to our{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <Button type="submit" size="lg">
                    Send my message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    Speak directly with a strategist — no junior reps. We aim to provide clarity 
                    in the first reply.
                  </p>
                </form>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Team Photo */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://www.orbitmedia.com/wp-content/uploads/2023/06/anand-shukla-1200x1050-1-600x525.jpg"
                  alt="Orbitline strategist team"
                  className="w-full h-auto"
                />
              </div>

              {/* Support Section */}
              <div>
                <h3 className="font-bold text-foreground mb-2">Orbitline Support</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Are you a current client with questions about your site?
                </p>
                <Link href="#" className="text-primary text-sm font-medium hover:underline">
                  Contact Support
                </Link>
              </div>

              {/* Visit Section */}
              <div>
                <h3 className="font-bold text-foreground mb-2">Visit Orbitline</h3>
                <p className="text-muted-foreground text-sm">
                  123 Digital Avenue, Suite 400<br />
                  Chicago, IL 60601
                </p>
                <Link href="#" className="text-primary text-sm font-medium hover:underline inline-flex items-center mt-2">
                  Map/Directions
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>

              {/* Phone Numbers */}
              <div className="text-sm">
                <p className="text-muted-foreground">
                  Main: <a href="tel:+13125550123" className="text-primary hover:underline">(312) 555-0123</a>
                </p>
                <p className="text-muted-foreground">
                  Support: <a href="tel:+13125550124" className="text-primary hover:underline">(312) 555-0124</a>
                </p>
              </div>

              {/* Remittance Address */}
              <div>
                <h3 className="font-bold text-foreground mb-2">Remittance Address</h3>
                <p className="text-muted-foreground text-sm">
                  456 Business Center, Suite 200<br />
                  Evanston, IL 60201
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter + B-Corp Section */}
      <section className="py-12 md:py-16 bg-foreground text-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Join over 16,000 people who receive web marketing tips every two weeks
              </h3>
              <div className="flex gap-2 mb-3">
                <Input
                  type="email"
                  placeholder="Email Address (Required)"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="default" size="default">
                  Sign me up
                </Button>
              </div>
              <p className="text-sm text-background/60 mb-4">
                By signing up you agree to our{" "}
                <Link href="/privacy" className="text-background/80 hover:underline">
                  Privacy Policy
                </Link>
                . No spam. Just practical insights.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* B-Corp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img
                  src="https://www.orbitmedia.com/wp-content/uploads/2023/08/bcorp-367x214.png"
                  alt="Certified B Corporation badge"
                  className="w-20 h-auto"
                />
              </div>
              <div>
                <h4 className="font-bold mb-2">Proud Certified B Corp for 10+ years</h4>
                <p className="text-sm text-background/70 mb-3">
                  We strive to educate and collaborate with like-minded businesses to make a 
                  difference environmentally and socially. Together we can make an impact.
                </p>
                <Link href="#" className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                  Learn about our B Corp values
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* HQ Address */}
            <div>
              <h4 className="font-bold mb-2">Orbitline HQ</h4>
              <p className="text-sm text-background/70 mb-1">
                123 Digital Avenue<br />
                Suite 400<br />
                Chicago, IL 60601
              </p>
              <a href="tel:+13125550123" className="text-primary text-sm hover:underline block mb-3">
                (312) 555-0123
              </a>
              <Link href="#" className="text-background/80 text-sm font-medium hover:underline inline-flex items-center">
                Message us
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation Grid */}
      <section className="py-8 bg-foreground border-t border-background/10">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-4">
            {serviceLinks.map((service) => (
              <div key={service.title} className="py-4 border-b border-background/10">
                <Link
                  href="/services"
                  className="flex items-center justify-between text-background hover:text-primary transition-colors group"
                >
                  <span className="font-medium">{service.title}</span>
                  <span className="text-background/40 group-hover:text-primary">+</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Links */}
      <section className="py-6 bg-foreground border-t border-background/10">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-background/60">
            <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/sitemap" className="hover:text-background transition-colors">Sitemap</Link>
            <span>•</span>
            <Link href="/accessibility" className="hover:text-background transition-colors">Accessibility</Link>
            <span>•</span>
            <Link href="/support" className="hover:text-background transition-colors">Support</Link>
            <span>•</span>
            <span>© 2024 Orbitline Digital Studio</span>
          </div>
        </div>
      </section>
    </>
  );
}

