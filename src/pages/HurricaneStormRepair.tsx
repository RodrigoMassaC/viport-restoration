import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HurricaneStormRepair() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative min-h-[921px] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9cUWlUfpiEbWSgTarRkQIMNJ58JaxwmDBaRBpAi1rZkB0Q1BbNTAInaVvPRwWu5aBA3Z37eJYsPWlnw4QcS6Hljh8XAhnwqkRA22Y-ieh13_FBJro6oHVSbzKCcBcQUPsmybxj5pkwAoJwhZzPCkqAHFUQl_YqChoRtct7uoqoHsc4r7HlUsZndxhT3oTF2_aC-MpzRajdbCiiehPyALAh3KYE6KpnE49Gf4A0jmBFgzC2UIvO8m8JOmonC2Gj70x6O7iS1YRnXs"
              alt="Professional roofing contractor repairing storm-damaged roof"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full mb-6">
                <span className="material-symbols-outlined text-sm">bolt</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Rapid Response Unit</span>
              </div>
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-white leading-[1.1] mb-8 tracking-tight">
                Hurricane <br />
                <span className="text-secondary-fixed-dim">& Storm Damage</span> Experts
              </h1>
              <p className="font-body text-xl text-primary-fixed max-w-2xl leading-relaxed mb-10 opacity-90">
                When disaster strikes, we guard your foundation. Professional structural restoration, emergency tarping, and debris removal for residential and commercial properties.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-md font-headline font-extrabold text-lg flex items-center gap-3 hover:bg-on-secondary-container transition-all group"
                >
                  Schedule Your Free Damage Assessment
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Core Services Bento ─── */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="font-headline font-black text-4xl md:text-5xl text-primary mb-6">Mastering the Aftermath</h2>
              <div className="h-1.5 w-24 bg-secondary mx-auto mb-8"></div>
              <p className="text-on-surface-variant text-lg">Comprehensive restoration services engineered for the harshest weather conditions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Roof Repair - large */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm h-[500px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh6xLjUYFDmI3JaI0w8mic9wp269liL9hq26RWZqeLajkHOkdkOx5bq7CK2LCqY0jEK_cnIYiXBKpJEzi1I-a7SP7NHY0wjgGpj1e-_QP6wzflmHibql8DzypPB-tagy0DvjraWQ8dKrIdQMGtP9uq_RWSuI0QgvXLr5Ko1-MH0nloEyKiF6bU0p4gQ86P-yYYx3GjPTCklYitOf18Hd9TBXhvzm7k3NJgm3aRE7tkeQdVGbyze2CBQTkzSS0JwrBd-8XoffY5738"
                  alt="Advanced roof restoration"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <span className="text-secondary-fixed text-sm font-bold uppercase tracking-widest mb-4 block">Primary Service</span>
                  <h3 className="text-white font-headline font-extrabold text-4xl mb-4 leading-tight">Advanced Roof <br />Restoration</h3>
                  <p className="text-primary-fixed opacity-80 max-w-md mb-6">Precision repair for structural integrity. From shingle replacement to complete structural re-engineering.</p>
                  <div className="flex gap-4">
                    <span className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tighter border border-white/20">Wind Damage</span>
                    <span className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tighter border border-white/20">Impact Repair</span>
                  </div>
                </div>
              </div>

              {/* Emergency Tarping */}
              <div className="md:col-span-4 bg-primary text-white p-10 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-primary-container rounded-lg flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-3xl text-secondary-fixed">tab</span>
                  </div>
                  <h3 className="font-headline font-extrabold text-3xl mb-4">Emergency Tarping</h3>
                  <p className="text-primary-fixed opacity-70 leading-relaxed">Immediate moisture barrier deployment to prevent secondary water damage within hours of the storm.</p>
                </div>
                <ul className="space-y-4 mt-8">
                  {["24/7 Rapid Deployment", "Heavy-Duty UV Protection"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold">
                      <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Debris Removal */}
              <div className="md:col-span-4 bg-surface-container-high p-10 rounded-xl">
                <h3 className="font-headline font-extrabold text-3xl text-primary mb-4">Debris Removal</h3>
                <p className="text-on-surface-variant mb-10">Safe and efficient clearing of fallen trees, structural hazards, and architectural fragments.</p>
                <img
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7bUstd9XRMKm-AWspaBJBanMcF7Q2FJkW0IIn9xdo7FlxDNGghbh3P3uYhN55icUDdoGsV5kTMMM8-Nm56uWP0pwqYh6CKEKiFczD2q9Oevd4wTAzv21CXdTw9OHso6cWBY_bXpO045iKFUFEBpkwQoNcZ23hT0_Lh--YYXwMw-vSY2wv2HttWA7yFkTT-HnA1ebx2stHJOIa8zUE3mYfCSvfj_GbX6UQUDcbytiKyHfvY08DLEMAODbsqrpaNk0VV7lonfyfjKo"
                  alt="Storm debris clearing"
                />
              </div>

              {/* Structural Inspection */}
              <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/15 flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <h3 className="font-headline font-extrabold text-3xl text-primary mb-4">Forensic Damage Inspection</h3>
                  <p className="text-on-surface-variant mb-6">Detailed assessment utilizing thermal imaging and moisture detection technology to find hidden storm damage.</p>
                  <a className="text-secondary font-bold inline-flex items-center gap-2 group" href="#">
                    Learn about our process
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </a>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {[{ val: "99%", label: "Accuracy Rate" }, { val: "24h", label: "Report Turnaround" }].map((stat) => (
                    <div key={stat.label} className="bg-surface p-4 rounded-lg text-center">
                      <span className="block text-3xl font-black text-primary font-headline">{stat.val}</span>
                      <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Insurance ─── */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Direct Billing</div>
                <h2 className="font-headline font-black text-4xl md:text-5xl text-primary mb-8 leading-tight">We work with all major insurance companies.</h2>
                <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                  Navigating claims after a catastrophic storm shouldn't be your burden. Our team provides full documentation, direct billing, and professional representation to ensure your claim is processed fairly.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                  {["STATE FARM", "ALLSTATE", "LIBERTY", "PROGRESSIVE", "FARMERS", "GEICO"].map((ins) => (
                    <div key={ins} className="font-black text-primary text-xl">{ins}</div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-3xl z-0"></div>
                <div className="relative z-10 bg-white p-10 rounded-xl shadow-xl border border-outline-variant/15">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-4xl text-secondary">assignment_turned_in</span>
                    <div>
                      <h4 className="font-headline font-bold text-xl text-primary">Claims Advantage</h4>
                      <p className="text-sm text-on-surface-variant">Zero out-of-pocket stress</p>
                    </div>
                  </div>
                  <ul className="space-y-6">
                    {[
                      "Professional photo documentation of all storm-related damage.",
                      "Expert negotiation with insurance adjusters on your site.",
                      "Direct billing—we handle the paperwork, you handle your life.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-secondary font-bold">0{i + 1}</span>
                        <p className="text-sm font-medium">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-32 px-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-primary z-0"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-headline font-black text-4xl md:text-6xl text-white mb-8">Ready to Restore <br />Your Property?</h2>
            <p className="text-primary-fixed text-xl mb-12 opacity-80">Don't wait for secondary damage to set in. Our rapid response team is standing by across the country.</p>
            <div className="bg-surface-container-lowest p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
              <input className="flex-1 bg-transparent border-none focus:ring-0 px-6 py-4 font-bold text-primary placeholder:text-outline-variant" placeholder="Enter Phone Number" type="tel" />
              <Link to="/contact" className="bg-secondary text-on-secondary px-10 py-4 rounded-lg font-headline font-extrabold text-lg hover:bg-on-secondary-container transition-all">
                Schedule Free Assessment
              </Link>
            </div>
            <p className="mt-6 text-primary-fixed text-xs uppercase tracking-widest font-bold opacity-50">Or Call Us Directly: 1-844-847-7378</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
