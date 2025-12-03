import { Button } from "@/components/ui/button";
import { Check, X, Play } from "lucide-react";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <>
    {/* HERO SECTION */}
    <section className="hero-section text-white py-16 md:py-24 lg:py-28">
      <div className="container-wide">
        <div className="grid grid-cols-12 items-center">
          {/* Heading + description (centered, col-10 on desktop/iPad Pro) */}
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 text-center">
            <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
              Web Design & Development Services
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Custom web development that turns traffic into{" "}
              <span className="text-primary">booked calls.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              We design, write, and build websites that generate qualified leads in 90 days
              or less—or we keep optimizing at no extra cost.
            </p>
          </div>

          {/* Points – full width (col-12), 3 in one row on desktop */}
          <div className="col-span-12">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 w-full innerbannerullist">
              {[
                "More demo & quote requests from existing traffic",
                "Faster, more stable site across all devices",
                "Clear analytics so you know what's working",
              ].map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-white/90"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons centered – again col-10 on desktop/iPad Pro */}
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link href="#build-plan-section">Get Your Website Build Plan</Link>
              </Button>

              {/* <Button variant="hero-link" size="xl" className="gap-2">
                <Play className="w-4 h-4" />
                Watch how we build sites
              </Button> */}
            </div>
          </div>

          {/* Video Thumbnail */}
          {/* (comment left as-is) */}
          {/* <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://www.orbitmedia.com/wp-content/uploads/2023/07/web-dev-video-poster.jpg"
                alt="Web development process video thumbnail showing our team at work"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>

      {/* LOGOS & BADGES STRIP */}
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="container-wide">
          <p className="text-center text-muted-foreground mb-8 font-medium">
            Chosen by teams who rely on their website to sell
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {["TechScale", "GrowthCo", "DataFlow", "Innovate.io", "CloudPeak", "NextGen"].map((logo) => (
              <div
                key={logo}
                className="text-muted-foreground/50 font-bold text-lg md:text-xl tracking-tight hover:text-muted-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-8 mt-8">
            <img
              src="https://www.orbitmedia.com/wp-content/uploads/2024/01/google-partner-badge.png"
              alt="Google Partner certified agency"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://www.orbitmedia.com/wp-content/uploads/2024/01/clutch-badge.png"
              alt="Clutch top web development agency"
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* PROBLEM + OUTCOMES SECTION */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Will your next website rebuild actually{" "}
                <span className="text-primary">grow pipeline?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Most redesigns look better but don't move the numbers. Teams spend six figures on a shiny new site, only to watch conversions stay flat—or drop.
              </p>

              <p className="font-semibold text-foreground mb-3">Common problems we help you avoid:</p>
              <ul className="space-y-2 mb-8 text-muted-foreground">
                {[
                  "New site launches and conversions stay flat",
                  "Content still unclear and generic",
                  "Dev handoff a mess, timelines slip",
                  "Marketing depends on dev for every small edit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-semibold text-foreground mb-3">Here's what we aim for instead:</p>
              <ul className="space-y-2 text-foreground">
                {[
                  "Clear positioning visitors understand in 5 seconds",
                  "Conversion-driven layouts for key pages",
                  "Lightning-fast performance and rock-solid tech",
                  "A CMS your marketing team can actually use",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Device Mockup */}
            <div className="relative">
              <img
                src="https://www.orbitmedia.com/wp-content/uploads/2023/07/device-mockup-web-dev.png"
                alt="Responsive website design shown across desktop, tablet and mobile devices"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ALIGNED SERVICES CARDS */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Aligned web development services,{" "}
              <span className="text-primary">from first sketch to launch day.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need under one roof—no juggling vendors, no handoff headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Website Strategy & Architecture",
                description: "Define audience, offers, sitemap and page hierarchy before touching design.",
                icon: "🎯",
              },
              {
                title: "UX, UI & Content Design",
                description: "Turn complex offers into simple, scannable pages that guide visitors to take action.",
                icon: "✨",
              },
              {
                title: "Full-Stack Web Development",
                description: "Custom builds in your stack (WordPress, headless, React) focused on speed & stability.",
                icon: "⚡",
              },
              {
                title: "SEO & Technical Foundation",
                description: "Structure, schema, and speed tuned for search engines & AI discovery.",
                icon: "📈",
              },
              {
                title: "Analytics & Conversion Setup",
                description: "GA4, events, funnels and dashboards that match your actual sales process.",
                icon: "📊",
              },
              {
                title: "Post-Launch Optimization",
                description: "90-day optimization plan to keep improving key metrics after go-live.",
                icon: "🚀",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL VIDEO STRIP */}
      <section className="dark-section text-white py-16 md:py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
                What Our Clients Say
              </p>
              <blockquote className="text-xl md:text-2xl font-medium text-white/90 italic mb-6">
                "In the first 90 days after launch, demo requests increased by 37% without increasing ad spend. The ROI was obvious within the first quarter."
              </blockquote>
              <p className="text-white/60">
                — Sarah Mitchell, VP Marketing at TechScale
              </p>
            </div>

            <div className="relative">
              <img
                src="https://www.orbitmedia.com/wp-content/uploads/2023/07/client-testimonial-video.jpg"
                alt="Client testimonial video about web development results"
                className="w-full h-auto rounded-xl shadow-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              See what our web development projects{" "}
              <span className="text-primary">look like in the wild.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A few of the 100+ websites we've designed, written and developed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "TechScale", industry: "B2B SaaS", outcome: "+42% demo conversions" },
              { name: "GrowthMetrics", industry: "Analytics Platform", outcome: "2× organic traffic" },
              { name: "CloudPeak", industry: "Cloud Services", outcome: "+38% lead quality" },
              { name: "Innovate.io", industry: "Consulting", outcome: "3× pipeline sourced" },
              { name: "DataFlow", industry: "Data Platform", outcome: "+55% time on site" },
              { name: "NextGen Labs", industry: "Healthcare Tech", outcome: "+29% form completions" },
            ].map((project, index) => (
              <div
                key={project.name}
                className="group bg-secondary rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={`https://www.orbitmedia.com/wp-content/uploads/2023/07/portfolio-${index + 1}.jpg`}
                    alt={`${project.name} website design project`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.industry}</p>
                  <p className="text-sm text-primary font-semibold">{project.outcome}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* BUILD PLAN / VALUE STACK SECTION */}
      <section id="build-plan-section" className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                How we scope and price{" "}
                <span className="text-primary">web development projects.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Cost depends on complexity, but we avoid vague quotes by starting with a Website Build Plan—a strategic deep-dive that maps exactly what you need before any design work begins.
              </p>
              <p className="text-muted-foreground mb-8">
                If you don't find the plan useful, you keep the strategy and we part as friends. No hard feelings.
              </p>

              <Button variant="default" size="xl" asChild>
                <Link href="#build-plan-section">Get Your Website Build Plan</Link>
              </Button>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-2">
                What's Inside Your Website Build Plan
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Everything you need to make an informed decision—delivered in 5–7 business days.
              </p>

              <ul className="space-y-4">
                {[
                  "Deep website & funnel audit",
                  "Sitemap & architecture recommendations",
                  "Wireframe concepts for key pages",
                  "Tech stack and CMS recommendation",
                  "Timeline & investment ranges",
                  "30–45 minute walkthrough call",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  "The Build Plan alone was worth it—even if we hadn't moved forward, we had a clear roadmap."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Marketing Director, CloudPeak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD EFFICIENCY / BEFORE-AFTER */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Generate more leads from the{" "}
              <span className="text-primary">traffic you already have.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most websites leak conversions. We plug the holes and build clear paths to action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-secondary rounded-xl p-8 border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-bold text-muted-foreground">Before: Pretty Site, Weak Conversion</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Traffic comes but bounces quickly</li>
                <li>• Visitors confused about what you do</li>
                <li>• Forms buried, CTAs unclear</li>
                <li>• No idea what's working or not</li>
              </ul>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-muted-foreground">1.2%</p>
                <p className="text-sm text-muted-foreground">Average conversion rate</p>
              </div>
            </div>

            {/* After */}
            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">After: Clear Funnels, Measurable Results</h3>
              </div>
              <ul className="space-y-3 text-foreground">
                <li>• Visitors understand your value in seconds</li>
                <li>• Clear journeys for different buyer types</li>
                <li>• Prominent, compelling CTAs</li>
                <li>• Dashboards tracking real pipeline metrics</li>
              </ul>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-2xl font-bold text-primary">3.8%</p>
                <p className="text-sm text-foreground">Average conversion rate (+216%)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { metric: "+28%", label: "Form submissions" },
              { metric: "2×", label: "Demo calls from organic" },
              { metric: "47%", label: "Faster page load" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-secondary rounded-xl">
                <p className="text-3xl font-bold text-primary">{stat.metric}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs SECTION */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                What most teams ask{" "}
                <span className="text-primary">before they hire us.</span>
              </h2>
            </div>

            <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
              <details className="border-b border-border py-4">
                <summary className="cursor-pointer font-semibold text-foreground">How long does a typical web development project take?</summary>
                <div className="pt-3 text-muted-foreground">
                  Most projects take 8–16 weeks from kickoff to launch, depending on complexity. We'll give you a specific timeline in your Website Build Plan based on your scope and goals.
                </div>
              </details>
              <details className="border-b border-border py-4">
                <summary className="cursor-pointer font-semibold text-foreground">What if we already have designs?</summary>
                <div className="pt-3 text-muted-foreground">
                  Great! We can work with existing designs or collaborate with your design team. We'll assess what you have during the Build Plan phase and recommend the best path forward.
                </div>
              </details>
              <details className="border-b border-border py-4">
                <summary className="cursor-pointer font-semibold text-foreground">Do you only build on one CMS or stack?</summary>
                <div className="pt-3 text-muted-foreground">
                  No. We work across WordPress, headless CMS options, React/Next.js, and custom solutions. We recommend the best fit for your team's technical comfort and business needs.
                </div>
              </details>
              <details className="border-b border-border py-4">
                <summary className="cursor-pointer font-semibold text-foreground">Can you migrate content and keep our SEO?</summary>
                <div className="pt-3 text-muted-foreground">
                  Absolutely. Content migration and SEO preservation are core parts of our process. We create redirect maps, preserve URL structures where possible, and monitor rankings post-launch.
                </div>
              </details>
              <details className="border-b border-border py-4">
                <summary className="cursor-pointer font-semibold text-foreground">What if we're not happy with the first design direction?</summary>
                <div className="pt-3 text-muted-foreground">
                  If we can't align on a direction after the first design round, we'll re-group, re-frame the brief and present an alternate path at no extra cost. We don't move forward until you're confident in the direction.
                </div>
              </details>
              <details className="py-4">
                <summary className="cursor-pointer font-semibold text-foreground">What happens after launch?</summary>
                <div className="pt-3 text-muted-foreground">
                  Every project includes a 90-day optimization period. We monitor performance, fix issues, and make iterative improvements. If we don't improve your key metrics in that window, we keep optimizing at no extra cost.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & GRAPHS */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Web development is measurable.{" "}
              <span className="text-primary">We don't just ship pixels.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <div className="bg-secondary rounded-xl p-8 border border-border">
              <h3 className="font-semibold text-foreground mb-6">Conversion Rate: Old vs New Website</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Old Website</span>
                    <span className="text-muted-foreground">1.4%</span>
                  </div>
                  <div className="h-8 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-muted-foreground/40 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">New Website</span>
                    <span className="text-primary font-medium">4.2%</span>
                  </div>
                  <div className="h-8 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Average improvement: 3× conversion rate within 90 days of launch
              </p>
            </div>

            {/* Line Chart Mockup */}
            <div className="bg-secondary rounded-xl p-8 border border-border">
              <h3 className="font-semibold text-foreground mb-6">Pipeline Sourced from Website (12 months)</h3>
              <div className="h-48 relative">
                <svg className="w-full h-full" viewBox="0 0 400 180">
                  {/* Grid */}
                  <line x1="40" y1="150" x2="380" y2="150" stroke="hsl(var(--border))" strokeWidth="1" />
                  <line x1="40" y1="110" x2="380" y2="110" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="70" x2="380" y2="70" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="30" x2="380" y2="30" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4" />

                  {/* Line */}
                  <path
                    d="M 40 140 L 80 135 L 120 130 L 160 120 L 200 90 L 240 70 L 280 55 L 320 45 L 360 35"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Area */}
                  <path
                    d="M 40 140 L 80 135 L 120 130 L 160 120 L 200 90 L 240 70 L 280 55 L 320 45 L 360 35 L 360 150 L 40 150 Z"
                    fill="hsl(var(--primary))"
                    opacity="0.1"
                  />

                  {/* Launch marker */}
                  <line x1="160" y1="30" x2="160" y2="150" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4" />
                  <text x="160" y="20" className="text-xs fill-primary" textAnchor="middle">Launch</text>

                  {/* Labels */}
                  <text x="40" y="165" className="text-xs fill-muted-foreground">Jan</text>
                  <text x="160" y="165" className="text-xs fill-muted-foreground">Apr</text>
                  <text x="280" y="165" className="text-xs fill-muted-foreground">Aug</text>
                  <text x="360" y="165" className="text-xs fill-muted-foreground">Dec</text>
                </svg>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Website-sourced pipeline typically grows 40–60% year-over-year post-launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              How to know if you're ready for{" "}
              <span className="text-primary">a new website build.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For You */}
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="flex items-center gap-2 mb-6">
                <Check className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-bold text-foreground">This service is for you if:</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "You sell considered, B2B or high-ticket services",
                  "Your website is critical to sales conversations",
                  "You have someone who can own content & approvals internally",
                  "You're ready to invest in strategy, not just pixels",
                  "You want a long-term partner, not a one-off vendor",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For You */}
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="flex items-center gap-2 mb-6">
                <X className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-bold text-foreground">This is not a fit if:</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "You only need a quick template or one-page site",
                  "You're looking for the cheapest vendor",
                  "You're not ready to invest time in strategy and feedback",
                  "You need a site live in under 4 weeks",
                  "You want to manage everything yourself post-launch",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              A web development process designed{" "}
              <span className="text-primary">for busy teams.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear phases, milestone check-ins, and predictable project management. No runaway scope, no surprise invoices.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-border">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/30"></div>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Discovery & Build Plan", duration: "Week 1-2" },
                { step: "02", title: "UX, Content & Design", duration: "Week 3-6" },
                { step: "03", title: "Development & QA", duration: "Week 7-12" },
                { step: "04", title: "Launch & Measurement", duration: "Week 13-14" },
                { step: "05", title: "90-Day Optimization", duration: "Ongoing" },
              ].map((phase) => (
                <div key={phase.step} className="relative">
                  <div className="bg-secondary rounded-xl p-6 border border-border h-full">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">
                      {phase.step}
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-center md:text-left">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground text-center md:text-left">{phase.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-8 border border-primary/20 max-w-3xl mx-auto">
            <h3 className="font-bold text-foreground mb-2">Our Guarantee</h3>
            <p className="text-muted-foreground">
              If we don't improve your key website metrics within 90 days of launch, we'll keep optimizing at no extra cost until we do. You have nothing to lose.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL TESTIMONIAL */}
      <section className="dark-section text-white py-16 md:py-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">D</span>
            </div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 italic mb-6">
              "Our website finally matches the quality of our services—and our sales team uses it in every conversation. It's become our best closer."
            </blockquote>
            <p className="text-white/60">
              — David Chen, CEO at DataFlow
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to build a web presence that actually sells?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Start with a Website Build Plan—we'll audit your current site, map the opportunities, and give you a clear roadmap. If you don't find it valuable, you keep everything and we part as friends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="#build-plan-section">Get Your Website Build Plan</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link href="/contact">Schedule a Strategy Call</Link>
              </Button>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-6">
              We'll review your site and send your plan in 3–5 business days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

