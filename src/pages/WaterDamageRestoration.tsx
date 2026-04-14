import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WaterDamageRestoration() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative w-full min-h-[870px] flex items-center overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
            <img
              alt="Professional water restoration equipment"
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3OLlI3PRG1d2OxabzgItUntzEhgD8WAQOA8rZxeZ7QIOdYSYOrnJ60UhVsbNu8b7rqZc7vqlc1l54HaOpT8kc9_6jipp7tdv_zCUjaU_jy5rU1z5TBeBDVyehA65iddsfH8mlabBBLhnob6N3GgE6Y7HjxTWdp-f7Ak3V2IVhehFHSCoNQjONA4E2zxrpYHsN_f8fszr0eSutDDGrU55Nj84j8JF8mmCELB-fNtnMvDt1wyW5JY-qj7VdJkfxnKHYbG6ru-7dqUY"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <span className="text-secondary-fixed-dim font-headline font-bold tracking-[0.2em] uppercase text-sm mb-6 inline-block">
                Professional Mitigation
              </span>
              <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8">
                Expert <span className="text-primary-fixed">Water Damage</span> Restoration Services
              </h1>
              <p className="text-on-primary-container text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-body">
                Rapid response to preserve your luxury property. We utilize advanced thermal imaging and heavy-duty extraction to mitigate damage before it becomes permanent.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-headline font-extrabold text-base tracking-tight hover:bg-secondary-container transition-all flex items-center gap-3"
                >
                  <span className="material-symbols-outlined filled">phone_in_talk</span>
                  Request Immediate Help
                </Link>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-headline font-extrabold text-base tracking-tight hover:bg-white/20 transition-all">
                  View Process
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Bento Feature Grid ─── */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container-lowest rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary-fixed rounded-xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-secondary text-3xl">emergency</span>
                </div>
                <h3 className="font-headline text-3xl font-bold text-primary mb-4">24/7 Emergency Response</h3>
                <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                  Our tactical team is deployed within 60 minutes. We treat every leak as a critical structure failure, ensuring rapid containment of flooding.
                </p>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-surface-container rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
            </div>

            <div className="md:col-span-4 bg-primary text-white rounded-2xl p-10 flex flex-col group">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-8 border border-white/20">
                <span className="material-symbols-outlined text-primary-fixed text-2xl">water_damage</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">Water Extraction</h3>
              <p className="text-primary-fixed/70 leading-relaxed mb-6">
                High-volume vacuum systems designed to remove standing water from high-end flooring and sub-surfaces.
              </p>
              <a className="mt-auto text-secondary-fixed-dim font-headline font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                The tech <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            </div>

            <div className="md:col-span-4 bg-surface-container-high rounded-2xl p-10 flex flex-col">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-primary text-2xl">air</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-4">Drying & Dehumidification</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Industrial LGR dehumidifiers and axial air movers stabilize the environment and prevent microbial growth.
              </p>
            </div>

            <div className="md:col-span-8 bg-surface-container-lowest border-b-4 border-secondary rounded-2xl p-10 flex items-center gap-10">
              <div className="flex-1">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Structural Repairs</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Post-mitigation restoration of drywall, trim, and structural elements to pre-loss architectural standards.
                </p>
              </div>
              <div className="hidden lg:block w-48 h-32 rounded-xl overflow-hidden shadow-2xl">
                <img
                  alt="Luxury construction detail"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyo6lY3S-3y65lpLNlDb3T2l1K4JeObHfQM3BXSETLZOMS_wzl9Xk_6kiswNHjTnyGkmqbfbuemTKksNcjjTjeV3vhxWm_JJV0isfLQEWpPnNp-pG78N-5HUrYfskwMZwCcCGheMBrAGTO2VtoIUht3HqLwjLLFE_ZPpNPm8IaqG44K8x6lGcfcL4NjpL-HquqLtW-4SXK8PENAcrCmkRXHqezxBH2ycGiBmgL_Iko-doHYIoMT00nY39dw0PB0lA9fdITPCCy9fg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Process Steps ─── */}
        <section className="bg-primary-container py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <span className="text-on-tertiary-container font-headline font-bold tracking-[0.3em] uppercase text-xs mb-4 inline-block">
                Operational Protocol
              </span>
              <h2 className="text-white font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
                The Restoration Lifecycle
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {[
                { num: "01", title: "Assessment", desc: "Utilizing infrared thermal imaging to map moisture pockets hidden behind wall systems and flooring." },
                { num: "02", title: "Extraction", desc: "High-pressure pumps and weighted extraction tools remove 99% of liquid water from soft and hard surfaces.", offset: true },
                { num: "03", title: "Drying", desc: "Controlled evaporation utilizing directional air movers and desiccant dehumidifiers to reach dry standards." },
                { num: "04", title: "Restoration", desc: "Final architectural reconstruction, color matching, and environmental clearance testing for full occupancy.", offset: true, highlight: true },
              ].map((step) => (
                <div key={step.num} className={`relative group ${step.offset ? "md:mt-12" : ""}`}>
                  <div className={`${step.highlight ? "bg-secondary text-white" : "bg-white/5 border border-white/10 hover:bg-white/10"} rounded-2xl p-8 h-full transition-all`}>
                    <div className={`${step.highlight ? "text-white/20" : "text-primary-fixed/20"} font-headline text-7xl font-black mb-6`}>{step.num}</div>
                    <h4 className="text-white font-headline font-bold text-xl mb-4">{step.title}</h4>
                    <p className={`${step.highlight ? "text-white/80" : "text-on-primary-container"} text-sm leading-relaxed`}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto bg-surface-container-highest rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
            <div className="relative z-10 max-w-2xl">
              <span className="material-symbols-outlined text-secondary text-5xl mb-8 filled block">support_agent</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-primary mb-6 tracking-tighter">Need immediate help?</h2>
              <p className="text-on-surface-variant text-xl mb-12 font-body">
                Our master restoration technicians are on standby. We provide a free structural inspection and damage assessment within the hour.
              </p>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-6 bg-primary text-white px-10 py-6 rounded-full font-headline font-black text-2xl tracking-tight shadow-2xl hover:bg-secondary transition-colors"
              >
                Call us now for a free inspection
                <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                  <span className="material-symbols-outlined">call</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Related Services ─── */}
        <section className="py-16 bg-surface border-t border-outline-variant/15">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-on-surface-variant font-headline font-bold text-sm uppercase tracking-widest">
              Explore Specialized Solutions
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link className="group flex items-center gap-4 bg-white px-8 py-4 rounded-xl border border-outline-variant/20 hover:border-secondary transition-all" to="/mold-remediation">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors">science</span>
                <span className="font-headline font-bold text-primary">Mold Remediation</span>
              </Link>
              <Link className="group flex items-center gap-4 bg-white px-8 py-4 rounded-xl border border-outline-variant/20 hover:border-secondary transition-all" to="/fire-damage-recovery">
                <span className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors">local_fire_department</span>
                <span className="font-headline font-bold text-primary">Fire Damage Recovery</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
