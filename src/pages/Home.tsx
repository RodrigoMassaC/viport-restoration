import { Link } from "react-router-dom";
import workTruckImg from "@/assets/work-truck.jpg";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover grayscale-[20%] brightness-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWh8tfJ4RTe2I6MXyLcfImxXX0v1-1GT_nFcV97K1O4CZeEvU67sH7JH_PNcqvph9cVpGWV97SdXoD98DHazYjA6GFpmD4Gj1i1H6XIm-so_t_0lhPhJC9258TMDc4zNOZK7Jr3XOO0D_9pJw1KPogYAczQ3tUY90kA_12YjNi8xzy_PT7Ut1jrJnWH5WE6u4QEs6i5ST3lC4kwsE5-5lKkn2iGkx9jOeSGsH5NZcNbRJe33Siyxrb6_1NQxSroc9BB-_Qlt05dHo"
              alt="Modern high-end luxury living room restored"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Your Trusted Guardians
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white font-headline leading-[1.05] tracking-tighter">
                Residential and commercial damage restoration services available 24/7
              </h1>
              <p className="text-surface-container-high text-lg max-w-lg leading-relaxed font-medium">
                Precision engineering meets rapid response. We restore more than just property; we rebuild your peace of mind with architectural excellence.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/contact"
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold text-lg tracking-tight hover:bg-on-secondary-container transition-all flex items-center gap-3"
                >
                  Request Free Inspection
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg tracking-tight hover:bg-white/20 transition-all">
                  Our Portfolio
                </button>
              </div>
            </div>

            {/* Hero Card */}
            <div className="hidden lg:block relative">
              <div className="bg-surface-container-lowest/80 backdrop-blur-2xl p-8 rounded-2xl editorial-shadow border border-white/40 max-w-md ml-auto">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-4">
                    <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-xl text-secondary">
                      <span className="material-symbols-outlined filled">bolt</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-primary">Rapid Response</h4>
                      <p className="text-xs text-on-surface-variant font-medium">On-site within 60 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-300"></div>
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-400"></div>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold border-2 border-white">
                        +12
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium">Licensed Experts Standing By</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Services Grid ─── */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-secondary font-bold text-sm uppercase tracking-widest block mb-4">Precision Restoration</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary font-headline tracking-tighter">
                  Surgical expertise for every disaster type.
                </h2>
              </div>
              <div className="text-right">
                <p className="text-on-surface-variant font-medium max-w-xs ml-auto">
                  Our specialized divisions handle everything from minor repairs to full-scale catastrophic reconstruction.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "cyclone", title: "Hurricane", desc: "Structural stabilization and debris management following catastrophic wind events.", href: "/hurricane-storm-repair" },
                { icon: "water_drop", title: "Water", desc: "Advanced extraction and moisture detection to prevent long-term structural decay.", href: "/water-damage-restoration" },
                { icon: "science", title: "Mold", desc: "HEPA-certified remediation protocols ensuring air quality and safety standards.", href: "/mold-remediation" },
                { icon: "local_fire_department", title: "Fire", desc: "Soot removal and structural deodorization using state-of-the-art ozone technology.", href: "/fire-damage-recovery" },
                { icon: "corporate_fare", title: "Commercial", desc: "Minimize business downtime with high-capacity equipment and coordinated workflows.", href: "/commercial-services" },
                { icon: "home_work", title: "Residential", desc: "Concierge-level restoration for homeowners, handling insurance from start to finish.", href: "/residential-services" },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 hover:border-secondary/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-surface-container mb-6 rounded-xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black text-primary font-headline mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{service.desc}</p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-tight uppercase group-hover:gap-4 transition-all"
                  >
                    Learn More <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── About Section ─── */}
        <section className="py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2 relative">
                <div className="relative z-10 rounded-2xl overflow-hidden editorial-shadow">
                  <img
                    className="w-full h-[600px] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASQUC0a_LZT0EPMEcAkadILsMxw8hy90ECTjWEf2VMFoXF8JOmTcO5Msy_tEwIROMM2eyS2vqo9dxmBxtpwbriSs5hfTT9pt9Tpbg3YEHiD_jt-YkGzMxgrd_gZxbNv-McE2bGvF5Sl6yl-srnRHYOpfWZpFoH26tW-olYIF_N_A8C-ibbep_GH5AD-IFwVNNEx4qwU-8vc0v4jTz1-vnzne_kod9Y53QL63bSGYB0IuWaPV2c3h45gLg7B5EGoaOofnX5XR4i_Kw"
                    alt="Professional restoration technicians working"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 bg-primary p-8 rounded-2xl editorial-shadow hidden md:block">
                  <span className="text-4xl font-black text-white font-headline block mb-2">15+</span>
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest leading-tight block">
                    Years of industry leadership nationwide
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <span className="text-secondary font-bold text-sm uppercase tracking-widest">About VIPORT</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary font-headline tracking-tighter leading-tight">
                  We will repair the damage efficiently and in the shortest possible time.
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Our team is built on the principles of architectural integrity and rapid response. We understand that damage isn't just structural—it's a disruption to your life. Our "Architectural Guardian" philosophy means we don't just patch up holes; we restore the value and safety of your assets with surgical precision.
                </p>
                <div className="grid grid-cols-2 gap-8 py-4 border-y border-outline-variant/30">
                  <div>
                    <h4 className="text-primary font-bold mb-1">Elite Fleet</h4>
                    <p className="text-on-surface-variant text-sm">24 specialized response vehicles across the country.</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-bold mb-1">Direct Billing</h4>
                    <p className="text-on-surface-variant text-sm">We coordinate directly with all major insurance carriers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Form ─── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-primary rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white font-headline tracking-tighter mb-6">
                    Get a FREE quote and fill out our form
                  </h2>
                  <p className="text-on-primary-container text-lg mb-8 max-w-md">
                    Our intake specialists are available 24/7 to review your request and dispatch a team immediately.
                  </p>
                  <div className="space-y-6">
                    {[
                      { icon: "verified", label: "Licensed, Bonded, and Insured" },
                      { icon: "speed", label: "60-Minute Response Guarantee" },
                    ].map((item) => (
                      <div key={item.icon} className="flex items-center gap-4 text-white">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                        </div>
                        <span className="font-medium text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 editorial-shadow">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                        <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 px-0" placeholder="John Doe" type="text" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Phone Number</label>
                        <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 px-0" placeholder="(555) 000-0000" type="tel" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Location</label>
                      <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 px-0" placeholder="Miami, FL" type="text" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Damage Type</label>
                      <select className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-colors py-3 px-0 appearance-none">
                        <option>Select Damage Type</option>
                        <option>Water Damage</option>
                        <option>Fire/Smoke</option>
                        <option>Mold Remediation</option>
                        <option>Storm/Hurricane</option>
                      </select>
                    </div>
                    <button className="w-full bg-secondary text-on-secondary py-4 rounded-lg font-black text-sm uppercase tracking-[0.2em] mt-4 hover:bg-on-secondary-container transition-all" type="submit">
                      Submit Inspection Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Coverage ─── */}
        <section className="py-24 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <img
                  className="w-full h-auto rounded-2xl shadow-2xl"
src={workTruckImg}
                   alt="Viport restoration work truck"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-secondary font-bold text-sm uppercase tracking-widest">Our Coverage</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary font-headline tracking-tighter">
                  We get to where you are, nationwide.
                </h2>
                <p className="text-on-surface-variant text-lg">
                  With strategic depots located throughout the state, our fleet is always within reach. Whether it's a coastal storm surge or a residential pipe burst, our logistics engine ensures we arrive before the damage spreads.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {["Miami-Dade", "Orlando", "Tampa Bay", "Jacksonville"].map((city) => (
                    <li key={city} className="flex items-center gap-2 text-primary font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
