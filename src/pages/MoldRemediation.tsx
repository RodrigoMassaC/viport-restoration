import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MoldRemediation() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative min-h-[819px] flex items-center overflow-hidden hero-gradient">
          <div className="absolute inset-0 opacity-20">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAINdFanu-1x2GOGoU3gaptaZ3qckVHKnpHCGmf19NP3_T0U9PPSB8koamvFm-bI55qjZp-tpULUbfQOk4Be4PqtXzCBrPIk4PNaAT1SXKAIna2Jibasv3m9gC4TOl47NozNuHOBBcSS3ZdTVly6Dt21Ewar61sQiocJCXQAJkdwroF753W0pQUyb1Agj3kxG4kQ2m7tivm__whg543leDorWcfQm6vwZaOBQOGDZPYZv8ekWdmNP3Wln0UkbKHVyDAcTSBnaupuDw"
              alt="Sterile clean room environment"
            />
          </div>
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-secondary text-sm filled">verified_user</span>
                <span className="text-secondary font-bold text-xs uppercase tracking-widest font-label">Licensed & Insured Professional</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline leading-[1.1] tracking-tighter">
                Medical-Grade <br /><span className="text-secondary-container">Mold Remediation</span>
              </h1>
              <p className="text-primary-fixed-dim text-lg md:text-xl max-w-lg font-body leading-relaxed">
                Precision-engineered removal and sterilization services. We don't just clean; we restore your environment to clinical safety standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-on-secondary-container transition-all shadow-xl">
                  Request Free Inspection
                </Link>
                <button className="border border-outline-variant/30 text-white px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-sm hover:bg-white/5 transition-all">
                  View Process
                </button>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-2xl">
                <img
                  className="rounded-xl shadow-2xl grayscale contrast-125 mb-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf39M0fjzRdx_2cEyKDNfkwinIOKQawbhqn1vK1Fm6yx5jatLPrO8-YqWZTYVt-8OQROB7OBytplgSVkb6Bce6yhI7gKXRM3H0fQZtUR65HVttdvdr6xd-PiCg7qajezwiZRJK9a7Q0LbAyhkT9OG1tGhVkCCweeAlTurYGMey8tqxxDRY8T9LjbwLHnZgMTiA5wYzSoc8pmhl_k8lg372mUg3e8EkwGFSrmr2wcRQwFXc9Qj2uBCEykl0hQybSZ0czJF-y7HJ5Bc"
                  alt="Technician in hazmat suit"
                />
                <div className="grid grid-cols-2 gap-4">
                  {[{ val: "99.9%", label: "Spore Removal" }, { val: "60 MIN", label: "Response Time" }].map((s) => (
                    <div key={s.label} className="bg-primary/40 p-4 rounded-lg">
                      <span className="block text-secondary-container font-black text-2xl font-headline">{s.val}</span>
                      <span className="text-white/60 text-xs uppercase font-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4-Step Process ─── */}
        <section className="py-24 bg-surface-bright">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-primary font-headline mb-4 tracking-tight uppercase">The 4-Step Precision Process</h2>
              <div className="h-1.5 w-24 bg-secondary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { num: "01", icon: "biotech", title: "Identify", desc: "Advanced infrared thermography and moisture mapping to locate hidden fungal colonies.", offset: false },
                { num: "02", icon: "layers", title: "Contain", desc: "Negative air pressure zones and HEPA-grade physical barriers to prevent cross-contamination.", offset: true },
                { num: "03", icon: "air", title: "Filter", desc: "Hospital-grade air scrubbing systems to capture microscopic airborne spores instantly.", offset: false },
                { num: "04", icon: "sanitizer", title: "Treat", desc: "EPA-approved antimicrobial application ensuring complete fungal eradication and prevention.", offset: true },
              ].map((step) => (
                <div
                  key={step.num}
                  className={`bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,29,52,0.03)] border-b-4 border-secondary/20 group hover:border-secondary transition-all ${step.offset ? "md:mt-8" : ""}`}
                >
                  <div className="text-secondary/20 font-black text-6xl font-headline mb-4 group-hover:text-secondary transition-colors">{step.num}</div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6 block">{step.icon}</span>
                  <h3 className="text-xl font-bold text-primary font-headline mb-4">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Health Risks ─── */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
              <div className="flex-1">
                <span className="text-secondary font-bold font-label uppercase tracking-widest text-xs">Biological Warning</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary font-headline mt-2 leading-tight">
                  Invisible Threats,<br />Visible Consequences
                </h2>
              </div>
              <p className="flex-1 text-on-surface-variant font-body leading-relaxed">
                Mold exposure is more than an aesthetic issue. Prolonged inhalation of mycotoxins can lead to systemic health failures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvhceK2wPgNC2LWHMU1yhiiKuC_nOz53aOLe7vcT80MIq-3HR9fgMAOQKK6SZbWTJhbHRIl7BEU3vNNV46D4Ob5QXr8IP3K_ZXthKdbCYd4NxKkm1siDFoFHFTWRUALuEIK0AUUKlPA4UCZhSR08TMiSDWjI3X1YVTDS_5qFS3WU24GjLLCVXtg0KAtv3W8rC6yJctrjQqThd7iBgnT_4ZdUdswv2GqPVEZJ1QpAhp7E6SAsZU4_BXHhaLVszSXMnxegxfhSmGLcg"
                    alt="Mold spores under microscope"
                  />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-primary font-headline mb-4">Respiratory Complications</h4>
                  <p className="text-on-surface-variant leading-relaxed mb-6">Severe asthma, chronic bronchitis, and hypersensitivity pneumonitis are frequently linked to indoor mold growth.</p>
                  <div className="flex items-center gap-3 text-secondary font-bold text-sm">
                    <span className="material-symbols-outlined">warning</span> CRITICAL RISK LEVEL
                  </div>
                </div>
              </div>

              <div className="bg-primary p-10 rounded-2xl text-white flex flex-col justify-between">
                <span className="material-symbols-outlined text-5xl text-secondary-container">neurology</span>
                <div>
                  <h4 className="text-2xl font-bold font-headline mb-4">Neurological Impact</h4>
                  <p className="text-white/70 leading-relaxed">Mycotoxins crossing the blood-brain barrier can cause "brain fog," dizziness, and chronic fatigue.</p>
                </div>
              </div>

              <div className="bg-secondary p-10 rounded-2xl text-white">
                <span className="material-symbols-outlined text-5xl mb-6 block">health_metrics</span>
                <h4 className="text-2xl font-bold font-headline mb-4">Immune Suppression</h4>
                <p className="text-white/90 leading-relaxed">Continuous exposure forces the immune system into permanent overdrive, leading to chronic inflammatory response syndrome.</p>
              </div>

              <div className="md:col-span-2 bg-surface-container-highest p-10 rounded-2xl flex items-center gap-8">
                <div className="p-6 bg-white rounded-full">
                  <span className="material-symbols-outlined text-4xl text-primary">family_restroom</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary font-headline mb-2">Vulnerable Groups</h4>
                  <p className="text-on-surface-variant leading-relaxed">Children, the elderly, and those with pre-existing conditions are 4x more likely to experience severe symptoms.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA with Form ─── */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary z-0"></div>
          <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-20"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white font-headline mb-6">Secure Your Environment Today.</h2>
              <p className="text-primary-fixed-dim text-lg mb-8 leading-relaxed">
                Don't wait for symptoms to worsen. Our expert team is ready to deploy within 60 minutes for a comprehensive onsite diagnostic.
              </p>
              <div className="space-y-4">
                {["IICRC Certified Remediation Experts", "Full Insurance Claim Assistance", "Post-Remediation Air Quality Testing"].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-white">
                    <span className="material-symbols-outlined text-secondary-container filled">check_circle</span>
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-primary font-headline mb-8">Request Free Diagnostic</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                  <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3" placeholder="John Doe" type="text" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Phone</label>
                    <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3" placeholder="(555) 000-0000" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Property Type</label>
                    <select className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Describe the Issue</label>
                  <textarea className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all py-3 resize-none" placeholder="Visible mold, damp smell, etc..." rows={3}></textarea>
                </div>
                <button className="w-full bg-secondary text-white py-5 rounded-lg font-black text-lg shadow-lg hover:bg-on-secondary-container transition-all uppercase tracking-widest" type="submit">
                  Schedule Inspection
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
