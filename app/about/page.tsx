import { generatePageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play, ArrowRight, ExternalLink } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "About Us",
  description: "Meet the Orbitline Digital Studio team. Award-winning web designers, developers, and strategists building websites that generate leads for B2B, SaaS, and service companies since 2012.",
  canonical: "/about",
});

const teamMembers = [
  {
    name: "Digital Strategists",
    description: "Connect business objectives with user needs to create measurable outcomes and conversion pathways.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/06/stephanie-walker-1200x1050-1-367x321.jpg",
  },
  {
    name: "Project Managers",
    description: "Keep timelines sharp and communication clear so nothing falls through the cracks.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/06/anand-shukla-1200x1050-1-367x321.jpg",
  },
  {
    name: "Web Designers",
    description: "Craft visual experiences that extend your brand while guiding visitors toward action.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/06/bio-brian-lueck_600x525_01.jpg",
  },
  {
    name: "Content Specialists",
    description: "Write persuasive copy that speaks to your audience and supports SEO performance.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2024/08/mo-burns-600-367x321.jpg",
  },
  {
    name: "Web Developers",
    description: "Build fast, secure, and scalable sites that are easy to maintain and update.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/06/bio-andy-ruggles.jpg",
  },
];

const stats = [
  { value: "7.8+", label: "Years average team tenure at Orbitline" },
  { value: "30%", label: "Median improvement in core conversion KPIs" },
  { value: "58%", label: "Clients who expand after first engagement" },
];

const ratings = [
  {
    name: "Google",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/07/reviews-Google2023-500x214.jpg",
  },
  {
    name: "Clutch",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/07/reviews-Clutch2023-500x214.jpg",
  },
  {
    name: "Glassdoor",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/07/reviews-Glassdoor2023-500x214.jpg",
  },
];

const awards = [
  {
    name: "Web Excellence Awards",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/logoGrid-350x200-WebExcellenceAwards-200x115.png",
  },
  {
    name: "Top Web Design Company",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/clutch-web-design-25-200x115.webp",
  },
  {
    name: "Top Web Developers",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/clutch-web-developer-25-200x115.webp",
  },
  {
    name: "Top SEO Company",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/clutch-seo.-25webp-200x115.webp",
  },
  {
    name: "Top Digital Design Company",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/clutch-digital-design-25-200x115.webp",
  },
  {
    name: "Golden Trumpet Awards",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/logoGrid-350x200-PCC-GoldenTrumpetAward-200x115.png",
  },
];

const communityContributions = [
  {
    title: "The Revenue Website Playbook",
    description: "Our comprehensive guide distills 15+ years of insights into a practical framework for building websites that generate leads and revenue consistently.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/06/content-chem-book2-367x214.jpg",
    link: "#",
  },
  {
    title: "Digital Growth Summit",
    description: "An annual conference where marketing leaders share strategies on content, SEO, CRO, and AI — bringing together the best minds in digital growth.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/600x349-ContentJam@2x-367x213.png",
    link: "#",
  },
  {
    title: "Certified B Corporation",
    description: "We're committed to a sustainable future and to improving the social, economic, and environmental well-being of our community through responsible business practices.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/bcorp-367x214.png",
    link: "#",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building websites that build businesses, since 2012
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Orbitline Digital Studio exists to make the web more effective — one high-performing 
              website at a time. We combine strategy, design, development, SEO, and CRO under one 
              roof to create sites that actually drive revenue.
            </p>
            <p className="text-lg text-muted-foreground">
              Transparent, skilled, and obsessed with results, our process keeps our team focused and 
              your business growing. We've helped hundreds of B2B, SaaS, and service companies turn 
              their websites into their best-performing marketing asset.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Experts - Video Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet the experts
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                The Orbitliners are specialists in web design, development, digital strategy, and 
                website optimization. We're focused, curious, and deeply committed to outcomes.
              </p>
              <p className="text-muted-foreground mb-6">
                Our edge isn't size — it's skill density. Every expert here is a direct contributor 
                to growth outcomes. No layers of account managers or junior staff learning on your 
                project. When you work with Orbitline, you work with senior operators who've done 
                this hundreds of times.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Get to know the team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-secondary relative group cursor-pointer">
                <img
                  src="https://www.orbitmedia.com/wp-content/uploads/2023/06/stephanie-walker-1200x1050-1-600x525.jpg"
                  alt="Orbitline team collaboration session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 font-medium">
                We're the Orbitliners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Grid */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the Orbitliners
            </h2>
            <p className="text-lg font-semibold text-foreground mb-2">
              A team of in-house web design, development, and optimization experts. Nothing is outsourced.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our focus is on SEO-driven website design, development, and optimization. We have one 
              purpose: build beautiful, high-performing websites that generate qualified leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[7/6] rounded-lg overflow-hidden mb-4 bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Testimonial */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <img
                src="https://www.orbitmedia.com/wp-content/themes/orbit-media/resources/images/testimonial-quoteMark-light@2x.png"
                alt=""
                className="w-16 h-12 mb-6 opacity-30"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Strategic partners, not just vendors
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Working with Orbitline transformed how we think about our website. They didn't just 
                build us something pretty — they built a system that generates leads every single day. 
                Before: our site was a digital brochure. After: it's our top-performing sales rep. 
                The ROI speaks for itself, but what impressed us most was how they understood our 
                business before writing a single line of code.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Marcus Chen</p>
                  <p className="text-sm text-muted-foreground">VP Marketing, TechScale Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://www.orbitmedia.com/wp-content/uploads/2023/07/1200x1000-beachCleanup-850x708.jpg"
                  alt="Orbitline team community volunteer event"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Giving back through our community
              </h2>
              <p className="text-muted-foreground mb-4">
                We believe great work contributes to more than revenue — it improves lives. Through 
                partnerships with local nonprofits, we've donated more than <strong>$500,000</strong> in 
                web design and development services to organizations making a real difference.
              </p>
              <p className="text-muted-foreground mb-6">
                We're always ready to volunteer for causes we believe in, from environmental cleanups 
                to mentoring the next generation of digital marketers.
              </p>
              <Link 
                href="#" 
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                See details
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Ratings */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <p className="text-center text-muted-foreground font-medium mb-8">
            We're focused on creating exceptional work for clients
          </p>

          {/* Ratings */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {ratings.map((rating) => (
              <img
                key={rating.name}
                src={rating.image}
                alt={`${rating.name} rating badge`}
                className="h-20 md:h-24 w-auto object-contain"
              />
            ))}
          </div>

          {/* Awards */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {awards.map((award) => (
              <img
                key={award.name}
                src={award.image}
                alt={award.name}
                className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Second Testimonial */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-xl p-8 md:p-12">
              <img
                src="https://www.orbitmedia.com/wp-content/themes/orbit-media/resources/images/testimonial-quoteMark-light@2x.png"
                alt=""
                className="w-12 h-10 mb-6 opacity-30"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Truly one of the best projects I've ever worked on
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                I wanted to share how much we love the new site and how appreciative we are of 
                everyone on the project team. Before working with Orbitline, our website was a 
                static afterthought. Now it's the centerpiece of our marketing strategy. This was 
                truly one of the best projects I've ever worked on — and I can't wait to see how 
                it continues to grow.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sarah Mitchell</p>
                  <p className="text-sm text-muted-foreground">Head of Marketing, Precision Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Contributions Grid */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-wide">
          <p className="text-center text-muted-foreground font-medium mb-12">
            We're active contributors to our community
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {communityContributions.map((item) => (
              <Link 
                key={item.title} 
                href={item.link}
                className="group block"
              >
                <div className="rounded-lg overflow-hidden mb-4 bg-secondary">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center">
                  {item.title}
                  <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-primary-foreground/30 overflow-hidden">
                <img
                  src="https://www.orbitmedia.com/wp-content/uploads/2023/06/stephanie-walker-1200x1050-1-150x131.jpg"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Are you the next Orbitliner?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              If you're skilled, curious, and love making digital work better, you belong here. 
              We hire strong operators who enjoy improving things — people who are strategic, 
              collaborative, and transparent. Above all, people who love making clients successful.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/contact">
                Join our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

