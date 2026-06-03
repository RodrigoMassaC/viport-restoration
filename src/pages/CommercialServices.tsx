import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CommercialServices() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover grayscale-[30%] opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIUNlU0PK_fpAGDgbhB-Qv6ZTs7jL8W2cR17ouaTTfmAvGIdtG9SUCMwoTbKPrFAoEzcSmMstG0pVGE1LMYoJWip4Rn9zidPCo7vwsLIFKnyM9AhyUEhQMGK-yGGsG1vG8mML34xYewX7PWsldXeQhCFro2V6uwRnICYRkQgSOze9rZNJkcjXmP8mz34A0ksxp7cEWVC_AKjW5oKCctKp92ddXXYgK_6fgWIEwZztckMS3oh0CjwP0SKq99vF9s77-grZeMSU7814"
              alt="Modern corporate skyscraper lobby"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto lg:ml-20">
            <span className="inline-block bg-secondary px-4 py-1 text-on-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded-sm">
              Enterprise Class Recovery
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-white leading-[0.9] tracking-tighter mb-8">
              RESILIENCE <br /><span className="text-secondary-fixed-dim">REDEFINED.</span>
            </h1>
            <p className="text-xl text-primary-fixed leading-relaxed max-w-xl mb-12 font-light">
              VIPORT provides elite-tier commercial restoration for large-scale facilities. We minimize business interruption with tactical precision and industrial equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-secondary text-on-secondary px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-on-secondary-container transition-all">
                Request Industrial Inspection
              </Link>
              <button className="border border-white/20 backdrop-blur-md text-white px-10 py-5 font-headline font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                View Facility Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* ─── Stats ─── */}
        <section className="bg-surface-container py-12 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { val: "60", unit: "min", label: "Response Guarantee" },
              { val: "100k+", unit: "", label: "Sq Ft Project Capacity" },
              { val: "24/7", unit: "", label: "Mission Critical Support" },
              { val: "99%", unit: "", label: "Uptime Preservation" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-4xl font-headline font-black text-primary">
                  {stat.val}<span className="text-secondary">{stat.unit}</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-outline">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Core Pillars Bento ─── */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
                  Engineered for <br />Large-Scale Impact.
                </h2>
                <div className="w-20 h-1 bg-secondary mb-6"></div>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Standard restoration companies aren't equipped for high-rise commercial or industrial complexes. VIPORT operates at the scale required for corporate resilience.
                </p>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-outline text-xs uppercase tracking-[0.4em] font-bold">Strategy & Execution</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
              {/* Primary Feature */}
              <div className="md:col-span-8 bg-surface-container-lowest p-12 flex flex-col justify-between group overflow-hidden relative border border-outline-variant/10">
                <div className="z-10 relative">
                  <span className="material-symbols-outlined text-secondary text-5xl mb-8 filled block">precision_manufacturing</span>
                  <h3 className="text-3xl font-headline font-black text-primary mb-4">Industrial Water Extraction</h3>
                  <p className="text-on-surface-variant max-w-md">Utilizing LGR dehumidification and high-velocity air movers to restore square footage in record time.</p>
                </div>
                <img
                  className="absolute bottom-[-10%] right-[-10%] w-1/2 opacity-20 group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTDjHA9Kki51fRTOW5B8PMptA-mQ1U-cPoD1xsY9Jt2v5Tuk5hTr0Ai6NSMCGdaxY_jzMofU0nMERmNbaZeWWNZwAgPy5skMHZuLrOp8b2X3UEbnxatqt1U_6NI0CZ8pYMLVaEFwy6jUq2rLvxr841L6i-hRonq7CFXSoz7h6gFYr2gmaGjVmzgVfE6zTp_DCU4zIKgm87UZ_9B-PQqOGGA-LM0rtA1h6SwTQKp7wyv454r36po09wsBaKi1bMEXSQvj0way0eEmU"
                  alt="Industrial machinery"
                />
              </div>

              {/* Secondary Feature */}
              <div className="md:col-span-4 bg-primary p-12 text-white flex flex-col justify-center">
                <span className="material-symbols-outlined text-secondary-fixed text-5xl mb-8 block">speed</span>
                <h3 className="text-2xl font-headline font-extrabold mb-4">Zero-Downtime <br />Strategy</h3>
                <p className="text-primary-fixed/70 text-sm leading-relaxed">We coordinate with facility managers to ensure core operations continue during the restoration process.</p>
              </div>

              {/* Tertiary Feature */}
              <div className="md:col-span-4 bg-surface-container-high p-12">
                <span className="material-symbols-outlined text-primary text-5xl mb-8 block">domain_verification</span>
                <h3 className="text-2xl font-headline font-extrabold text-primary mb-4">Corporate Compliance</h3>
                <p className="text-on-surface-variant text-sm">Full OSHA compliance and detailed documentation for insurance and legal stakeholders.</p>
              </div>

              {/* Large Asset */}
              <div className="md:col-span-8 bg-surface-container-lowest relative overflow-hidden group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvRVLHhMbWSAwxddAIjE9dm2Gxv5MJqHQpHqff5l3rFdmfHDdGcAexQ_oqiAfFv-kCsxDml31RrB_uIBlGj1QuLr3i7rsfCKk96_yu6rwLtBgh4-XFRL3mtjblE_hfUooUJpJAd6Fq_tyh3LS5GvDSh6l9-XOrLkNxRRGqdpF3mA2F82_SG2TRtKKeK8fEdcVxyCXsGtMJ1Tu_RPbdFwtwkGRGVGBS7b6dXpIOMU6bPcH04XEHD-Vqg_06Q5-MKTtMkb-LTpfAkg4"
                  alt="High-rise skyscraper"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-3xl font-headline font-black text-white mb-2">High-Rise Specialists</h3>
                  <p className="text-white/70 max-w-sm">Complex logistics for vertical structures and urban density zones.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Case Studies ─── */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-outline-variant/30"></div>
              <span className="text-xs font-black uppercase tracking-[0.5em] text-outline">Project Portfolio</span>
              <div className="h-px flex-1 bg-outline-variant/30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCAREzL0Cv5LKLx_3punYKSdg7uyDrQvYwrmeB6GZFxM5bg_owQHbQH2MuVFsI4H32UKfWF7fVy4EHTZ2U49EGEqYgRoGBXbNgQ8rOrqKvyRWu5Ia8TRcdkPUxs7zD0Fj5ogjjAk246Z1RTCoFqRhcF5DJFP9ySwyIE18oevVWR_PuxeV_ozgZS3qs6CsoeCtSUUT3R5W8CWBXfkJPjChqz4NSbsL73DLNxviMMzVX90cyRiuwFOV2YT8qPecezm_OTEWpGbio0hQ",
                  name: "The Sterling Plaza",
                  type: "Water Mitigation | 450,000 SQ FT",
                  desc: "Restoration of 12 floors after a major pipe burst on the top level. Operations resumed in 48 hours.",
                  offset: false,
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt-EZawhDaJ_ZuyfCltzty3iymJ_7PSgunULMKsE56vI1QGrHAgQTt65wIGM02pS2omV77aUeLrfYrCzRbcEptWlckSfkDYTvMU8w5d5r940kMBgWlwtBsiluQCkoUDyHFsxMko8ytGZIx2PmpslhmmmQg6PV2gCLFEn-jWUhluzWmF5WzAvvq07Xa42QHjSgwSX4jUOURUQjSGKKU6Ug_-Ki-_IITqx7n7NjaGqD6QbPotXX-Cshz3dopCM2_OXBtjGcWGSaYavM",
                  name: "Data-Hub Central",
                  type: "Climate Control | Critical Infrastructure",
                  desc: "Stabilization of server environments following HVAC failure. Zero data loss achieved.",
                  offset: true,
                },
              ].map((cs) => (
                <div key={cs.name} className={`space-y-8 ${cs.offset ? "md:mt-24" : ""}`}>
                  <div className="aspect-[16/10] bg-surface-container-highest overflow-hidden">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={cs.img} alt={cs.name} />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-2xl font-headline font-bold text-primary mb-2">{cs.name}</h4>
                      <p className="text-outline text-sm uppercase tracking-widest font-bold">{cs.type}</p>
                    </div>
                    <span className="bg-primary text-white p-3 rounded-full material-symbols-outlined">arrow_outward</span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">{cs.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto bg-primary p-12 md:p-20 relative overflow-hidden text-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white mb-8 tracking-tighter">
                FACILITY EMERGENCY? <br />ACT NOW.
              </h2>
              <p className="text-primary-fixed-dim text-xl mb-12 max-w-2xl mx-auto font-light">
                Our industrial response teams are stationed for immediate deployment. Do not let minutes turn into thousands in property damage.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                <a className="bg-secondary text-on-secondary px-12 py-6 rounded-lg font-headline font-black text-lg tracking-tight hover:bg-on-secondary-container transition-all flex items-center gap-4" href="tel:1-844-847-7378">
                  <span className="material-symbols-outlined filled">phone_in_talk</span>
                  1-844-847-7378
                </a>
                <span className="text-white/40 font-headline font-bold">OR</span>
                <Link to="/contact" className="text-white border-b-2 border-secondary px-4 py-2 font-headline font-bold uppercase tracking-widest hover:text-secondary transition-colors">
                  Submit Emergency Ticket
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
