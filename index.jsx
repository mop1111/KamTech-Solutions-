export default function KamTechSolutionsWebsite() {
  const reviews = [
    {
      name: "Jasmine R.",
      business: "Glow Beauty Studio",
      quote:
        "KamTech Solutions gave our business a clean, modern website that made us look far more professional overnight.",
      rating: 5,
    },
    {
      name: "Marcus T.",
      business: "Champion Barbershop",
      quote:
        "Fast turnaround, smooth communication, and a site that actually helped us get more bookings.",
      rating: 5,
    },
    {
      name: "Daniel P.",
      business: "Prime Auto Detailing",
      quote:
        "The design feels premium and mobile-friendly. Our customers mention the site all the time.",
      rating: 5,
    },
  ];

  const services = [
    {
      title: "Custom Website Design",
      description:
        "Modern, responsive websites tailored to your brand, audience, and business goals.",
    },
    {
      title: "Local Business Websites",
      description:
        "Professional websites for barbershops, restaurants, service businesses, artists, and startups.",
    },
    {
      title: "Landing Pages That Convert",
      description:
        "Focused pages designed to turn visitors into leads, calls, bookings, and paying clients.",
    },
    {
      title: "Website Refresh & Redesign",
      description:
        "Upgrade outdated websites with a sharper look, faster performance, and better user experience.",
    },
  ];

  const portfolio = [
    {
      title: "Barbershop Booking Site",
      category: "Branding + Booking UX",
    },
    {
      title: "Detailing Company Landing Page",
      category: "Lead Generation",
    },
    {
      title: "Creative Portfolio Website",
      category: "Personal Brand",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400/30">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_30%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col px-6 py-6 lg:px-10">
          <header className="mb-16 flex items-center justify-between">
            <div>
              <div className="text-2xl font-black tracking-tight">
                <span className="text-cyan-400">KamTech</span> Solutions
              </div>
              <p className="text-sm text-slate-300">Web Design for modern businesses</p>
            </div>

            <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
              <a href="#services" className="transition hover:text-cyan-400">Services</a>
              <a href="#portfolio" className="transition hover:text-cyan-400">Portfolio</a>
              <a href="#reviews" className="transition hover:text-cyan-400">Reviews</a>
              <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
            </nav>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                Helping small businesses look premium online
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
                Websites that make your business look <span className="text-cyan-400">credible</span>,
                modern, and ready to grow.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                KamTech Solutions builds sleek, high-converting websites for businesses that want
                stronger branding, more trust, and more customer inquiries.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="#portfolio"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View My Work
                </a>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-left">
                {[
                  ["Fast", "Turnaround"],
                  ["Mobile", "Responsive"],
                  ["Modern", "Design"],
                ].map(([top, bottom]) => (
                  <div key={top} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="text-lg font-bold text-white">{top}</div>
                    <div className="text-sm text-slate-400">{bottom}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Featured mockup</p>
                    <h2 className="text-xl font-bold">Business Homepage Preview</h2>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                    Live-ready design
                  </div>
                </div>

                <div className="space-y-4 rounded-[1.5rem] bg-slate-900 p-4">
                  <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
                    <p className="text-sm font-medium text-white/80">KamTech Solutions</p>
                    <h3 className="mt-2 text-2xl font-black">Clean websites for serious businesses.</h3>
                    <p className="mt-2 max-w-sm text-sm text-white/85">
                      Modern design, fast layouts, and strong first impressions.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm text-slate-400">Client result</p>
                      <p className="mt-2 text-3xl font-black text-cyan-400">+43%</p>
                      <p className="text-sm text-slate-300">more inquiries after launch</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm text-slate-400">Average response</p>
                      <p className="mt-2 text-3xl font-black text-cyan-400">24 hrs</p>
                      <p className="text-sm text-slate-300">for project communication</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Services
          </p>
          <h2 className="text-3xl font-black md:text-4xl">What KamTech Solutions offers</h2>
          <p className="mt-4 text-slate-300">
            Built for businesses that want a polished web presence without the agency headache.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Portfolio
              </p>
              <h2 className="text-3xl font-black md:text-4xl">Recent style examples</h2>
            </div>
            <p className="max-w-xl text-slate-300">
              Use this section to showcase your real projects later. For now, it gives your site a polished agency feel.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {portfolio.map((item, index) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900"
              >
                <div className="flex h-56 items-end bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_40%),linear-gradient(135deg,#0f172a,#111827,#1e293b)] p-6">
                  <div>
                    <p className="text-sm text-cyan-300">0{index + 1}</p>
                    <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.category}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Replace this with screenshots, live links, or project descriptions to build trust with future clients.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Reviews
          </p>
          <h2 className="text-3xl font-black md:text-4xl">What clients say</h2>
          <p className="mt-4 text-slate-300">
            Strong testimonials increase credibility and help convert visitors into paying clients.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 text-lg text-amber-300">{"★".repeat(review.rating)}</div>
              <p className="text-slate-200 leading-7">“{review.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-slate-400">{review.business}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Contact
              </p>
              <h2 className="text-3xl font-black md:text-4xl">Let’s build your next website</h2>
              <p className="mt-4 max-w-xl text-slate-300 leading-8">
                Whether you need a new website, a redesign, or a high-converting landing page, KamTech Solutions can help you create a stronger online presence.
              </p>
            </div>

            <form className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
                <input
                  type="text"
                  placeholder="Business name"
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
                <textarea
                  rows={5}
                  placeholder="Tell me about your project"
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
                <button
                  type="button"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.01]"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
