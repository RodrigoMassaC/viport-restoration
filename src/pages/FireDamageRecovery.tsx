import { Link } from "react-router-dom";
import UrgencyBanner from "@/components/layout/UrgencyBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function FireDamageRecovery() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <UrgencyBanner />
      <Navbar />

      <main className="pt-24">
        {/* ─── Hero ─── */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Fire Damage Restoration"
              className="w-full h-full object-cover grayscale-[20%] brightness-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGTiwWnVvUOoD8dtM1q-xcNbJnvm7RDJGAv8uGSEz-8rkvRvAFH6IePXBOtZsrHNXcmHhXkGIlHdhiYpsl1sLM21OgM3moiBcZ2fviB-1EnHvtlX-teUzD4ALP5kAkVxAyAn38iWYot5Gufui8BRr7CJOR7MQByYQPYaynYUQodXuTcA2f7Ck0Ju9gcFRccMvPSX6eYASQBZAQUN6UQ5vj7Zruk_93jc7x2SUMUYBkRLYmHn6MtNB7dL7N5hERzJauc9vaCP7Z8bw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <span className="inline-block bg-secondary px-4 py-1 text-on-secondary font-headline font-bold text-xs tracking-widest uppercase mb-6">
                Expert Recovery
              </span>
              <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] mb-8 tracking-tighter">
                Restoring your life <br /><span className="text-secondary-container">to normal.</span>
              </h1>
              <p className="text-surface-container-low text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-body">
                When disaster strikes, every second counts. Our elite fire restoration specialists deploy immediate structural stabilization and soot decontamination to preserve what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-secondary text-on-secondary px-10 py-4 rounded-lg font-headline font-extrabold text-lg flex items-center justify-center gap-2 transition-all hover:bg-on-secondary-container">
                  Request Inspection <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-lg font-headline font-extrabold text-lg flex items-center justify-center gap-2 transition-all hover:bg-white/20">
                  Call (800) VIP-REST
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Service Pillars ─── */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-primary font-headline font-black text-4xl md:text-5xl tracking-tighter mb-6">
                  Comprehensive Fire Restoration
                </h2>
                <p className="text-on-surface-variant text-lg">
                  We don't just clean; we reconstruct and revitalize. Our multi-phase approach ensures structural integrity and absolute air purity.
                </p>
              </div>
              <div className="font-headline font-bold text-8xl text-surface-container-highest select-none">04</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "air_freshener", title: "Smoke & Soot Removal", desc: "Advanced chemical sponge cleaning and ultrasonic technology to remove acidic residue from surfaces.", bg: "bg-surface-container-lowest" },
                { icon: "architecture", title: "Structural Stabilization", desc: "Immediate board-up and temporary shoring to prevent secondary damage or structural collapse.", bg: "bg-surface-container-low" },
                { icon: "inventory_2", title: "Contents Cleaning", desc: "Climate-controlled pack-out services and specialized restoration for heirlooms, art, and tech.", bg: "bg-surface-container-lowest" },
                { icon: "assignment_turned_in", title: "Insurance Claims", desc: "Direct billing to major carriers and meticulous documentation to ensure your claim is processed fast.", bg: "bg-surface-container-low" },
              ].map((item) => (
                <div key={item.title} className={`group ${item.bg} p-8 rounded-xl border border-outline-variant/15 transition-all hover:shadow-[0px_20px_40px_rgba(0,29,52,0.06)]`}>
                  <div className="w-12 h-12 bg-primary-container text-secondary-container rounded-lg flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined filled">{item.icon}</span>
                  </div>
                  <h3 className="font-headline font-bold text-xl mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{item.desc}</p>
                  <span className="text-secondary font-bold text-xs tracking-widest uppercase flex items-center gap-2 cursor-pointer group-hover:gap-4 transition-all">
                    Learn more <span className="material-symbols-outlined text-sm">east</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Case Study ─── */}
        <section className="py-24 bg-surface-container-lowest overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
            <div className="lg:col-span-7 relative">
              <img
                alt="Restoration results"
                className="w-full aspect-[4/3] object-cover rounded-xl shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC324GYMkehhWPlAsBKr8wEg0udQA1CVamS-1YU3Tc8R8xUkDlVwkD8M9a4ZRKUHqUgMPq3x4mqQR8GydK7FS_87IZBfsqAWlnoPXcQG-HZ4JmKUbzHHBbZI1hgLJ80CD7v5Wc42cIfgoV1KgmDTZr7B8pEfWCSU_AilbC9QqGnImVlG37ZYqBj5e8_Hyqy1HlHBJbwkCQWvSXTQY5vj2FZ6mrDE3ZjVeCvrAjQtXVtUSceQD0MWoCLFA6JgVR2AzOI5RoJ8G1y3Q"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 text-white max-w-sm rounded-lg hidden md:block">
                <p className="italic text-lg mb-6 leading-relaxed">
                  "They didn't just rebuild my house; they restored my sense of peace. The precision of their work is unparalleled."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary"></div>
                  <div>
                    <span className="block font-bold">Sarah McArthur</span>
                    <span className="text-xs text-on-primary-container">Residential Client</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-12">
              <h2 className="text-primary font-headline font-black text-4xl mb-8 tracking-tighter">The Guardians of Restoration.</h2>
              <ul className="space-y-8">
                {[
                  { num: "01", title: "Immediate Dispatch", desc: "Teams on-site within 60-90 minutes of your call." },
                  { num: "02", title: "Master Craftsmanship", desc: "Licensed contractors who specialize in high-end restoration." },
                  { num: "03", title: "Toxin-Free Environment", desc: "HEPA filtration and ozone treatments to ensure air quality." },
                ].map((item) => (
                  <li key={item.num} className="flex gap-6">
                    <span className="text-secondary font-headline font-black text-2xl">{item.num}</span>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Process Bento ─── */}
        <section className="py-32 bg-surface-container">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-primary font-headline font-black text-4xl tracking-tighter mb-4">Our Recovery Protocol</h2>
              <p className="text-on-surface-variant">A military-grade approach to personal recovery.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
              <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-10 flex flex-col justify-between border border-outline-variant/10 group overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="font-headline font-bold text-2xl mb-4">Detailed Damage Assessment</h3>
                  <p className="text-on-surface-variant max-w-md">
                    Our thermal imaging cameras detect hidden heat pockets and moisture within walls to prevent future mold or fire re-ignition.
                  </p>
                </div>
              </div>
              <div className="bg-primary text-white rounded-xl p-10 flex flex-col justify-center border border-primary-container">
                <div className="w-12 h-12 bg-secondary text-on-secondary rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined filled">security</span>
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4">Board-up & Roof Tarp</h3>
                <p className="text-surface-container-low/80">
                  Securing your perimeter against theft, weather, and further environmental degradation within hours.
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-10 flex flex-col justify-between border border-outline-variant/10 group">
                <div>
                  <h3 className="font-headline font-bold text-2xl mb-4">Deodorization</h3>
                  <p className="text-on-surface-variant">
                    Using fogging and scrubbing tech to remove the smell of burnt plastic and organic matter forever.
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-6">
                  <div className="h-1 flex-1 bg-secondary rounded-full"></div>
                  <div className="h-1 flex-1 bg-surface-container-high rounded-full"></div>
                  <div className="h-1 flex-1 bg-surface-container-high rounded-full"></div>
                </div>
              </div>
              <div className="md:col-span-2 bg-surface-bright rounded-xl p-10 flex items-center gap-8 border border-outline-variant/10">
                <div className="hidden lg:flex w-32 h-32 bg-surface-container rounded-full flex-shrink-0 items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-primary filled">verified</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-2xl mb-2">Final Certification</h3>
                  <p className="text-on-surface-variant">
                    Every restoration concludes with a multi-point air quality and structural integrity certification for your peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto bg-primary-container rounded-2xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-white font-headline font-black text-4xl md:text-5xl mb-8 tracking-tighter">
                Your recovery starts with a single call.
              </h2>
              <p className="text-primary-fixed-dim text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Don't wait for smoke damage to become permanent. Our emergency units are standing by to restore your property to pre-loss condition.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-secondary text-on-secondary px-12 py-5 rounded-lg font-headline font-extrabold text-xl shadow-lg transition-transform hover:-translate-y-1 active:scale-95">
                  Start Recovery Now
                </Link>
                <button className="border-2 border-outline-variant/30 text-white px-12 py-5 rounded-lg font-headline font-extrabold text-xl hover:bg-white/5 transition-colors">
                  Find Nearest Location
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
