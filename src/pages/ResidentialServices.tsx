import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ResidentialServices() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative px-8 mb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-surface-container-high rounded-full">
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Protecting Your Legacy</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tighter">
                Restoring your home,<br />protecting your <span className="text-secondary">family.</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                When disaster strikes your personal sanctuary, you need more than just a repair crew. You need guardians who value your home's history as much as you do.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/contact"
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold flex items-center gap-3 editorial-shadow hover:bg-on-secondary-container transition-colors group"
                >
                  Start Your Claim
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <button className="bg-transparent border border-outline-variant/30 px-8 py-4 rounded-lg font-bold text-primary hover:bg-surface-container-low transition-colors">
                  Request Free Inspection
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow bg-surface-container-highest">
                <img
                  alt="Modern serene living room"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCo1qIJpfXI1ydA93ub6jRUz8UI_ULqvryfFFPz3jZwZjFeiqPBJQWxO36wJcLg-zfAKi2OhVdb2XBBnBeshu4j-5-1M9Wnl5Jp3-p5iNEstFiWr4zXywQ5ywvB_GLxjXSkbVyZK6tXAr1OjptIe2X9EchLkKS9GR5LuLvNcFJyD4l5K57KODbu6yjtWwbOEJ1nu0K02Oy2JF0LFVRisVGnWXb8HPsGPiHZ_nrDjTP8hGFvxmK7k9hOBxt8A8WiruGfLB0PmpXWU"
                />
              </div>
              <div className="absolute -bottom-6 -left-12 bg-surface-container-lowest p-8 rounded-xl editorial-shadow max-w-[280px] hidden md:block">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-secondary filled">verified</span>
                  <span className="font-headline font-bold text-sm">Certified Specialists</span>
                </div>
                <p className="text-xs leading-relaxed text-on-surface-variant">
                  Our IICRC-certified team handles every brick and beam with empathetic precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Services Bento ─── */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-extrabold text-primary mb-4 tracking-tight">Comprehensive Restoration Services</h2>
              <div className="w-24 h-1 bg-secondary"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">
              {/* Water */}
              <div className="md:col-span-2 lg:col-span-4 bg-surface-container-lowest p-10 rounded-xl editorial-shadow flex flex-col justify-between group">
                <div>
                  <span className="material-symbols-outlined text-4xl text-blue-600 mb-6 group-hover:scale-110 transition-transform block">water_drop</span>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4">Water Damage</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">Rapid extraction and drying to prevent structural decay and permanent loss of cherished property.</p>
                </div>
                <Link className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" to="/water-damage-restoration">
                  Explore Service <span className="material-symbols-outlined text-sm">east</span>
                </Link>
              </div>

              {/* Fire */}
              <div className="md:col-span-2 lg:col-span-8 bg-primary text-white p-10 rounded-xl editorial-shadow relative overflow-hidden group">
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="max-w-md">
                    <span className="material-symbols-outlined text-4xl text-secondary mb-6 group-hover:rotate-12 transition-transform block">local_fire_department</span>
                    <h3 className="font-headline text-2xl font-bold mb-4">Fire & Smoke Recovery</h3>
                    <p className="text-on-primary-container text-sm leading-relaxed mb-8">Professional soot removal and structural deodorization to erase the visual and aromatic reminders of fire damage.</p>
                  </div>
                  <Link className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" to="/fire-damage-recovery">
                    Restoration Protocol <span className="material-symbols-outlined text-sm">east</span>
                  </Link>
                </div>
              </div>

              {/* Mold */}
              <div className="md:col-span-2 lg:col-span-7 bg-surface-container-lowest p-10 rounded-xl editorial-shadow flex gap-8 items-center group">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-4xl text-tertiary-container mb-6 block group-hover:scale-95 transition-transform">microbiology</span>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4">Mold Remediation</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Protecting your family's air quality through scientific containment and total spore eradication protocols.</p>
                </div>
                <div className="w-1/3 hidden lg:block rounded-lg overflow-hidden h-40">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpEB8mWpqHK8MBtWAO0fEw7qa1E5sPXpB-xmJQimer9nqdcs52E95c97MAgacgJBfK0QaIosaylUbWxCmt19VFlJe-kmjRXzihRhurwkfAQI3JHquEM9jJ5ADIRZ38ZXdzm14vFMMyQ99WpAzwowtK1SKQ2cCW8eOQw4kp7G7935HBfLOj8lL3-6ovokZNFX-qZqEqtmbLsVocVUXqH-nVMpEoJaN39ykYKrgatF_z0j7wvaZ7hFRsGbikQo1-am4p5Cyxj2nVih8"
                    alt="Mold microscopic view"
                  />
                </div>
              </div>

              {/* Storm */}
              <div className="md:col-span-2 lg:col-span-5 bg-surface-container-high p-10 rounded-xl editorial-shadow flex flex-col justify-between group border border-primary/5">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:-translate-y-1 transition-transform block">cyclone</span>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4">Storm & Wind</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">Emergency tarping and immediate structural stabilization following extreme Florida weather events.</p>
                </div>
                <Link className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" to="/hurricane-storm-repair">
                  Emergency Response <span className="material-symbols-outlined text-sm">east</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Testimonial ─── */}
        <section className="py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative">
                  <span className="font-headline text-[160px] leading-none absolute -top-24 -left-12 opacity-[0.03] text-primary font-black select-none">TRUST</span>
                  <h2 className="font-headline text-4xl font-extrabold text-primary mb-8 relative z-10">Stories of Recovery</h2>
                  <div className="space-y-12">
                    <div className="relative pl-8 border-l-2 border-secondary">
                      <p className="text-xl text-primary font-medium leading-relaxed italic mb-6">
                        "After the hurricane, we felt hopeless. VIPORT didn't just fix our roof; they treated us like family during the most stressful month of our lives. They are the only call you need to make."
                      </p>
                      <div>
                        <p className="font-headline font-bold text-primary">Elena Rodriguez</p>
                        <p className="text-sm text-on-surface-variant">Residential Client, Coral Gables</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined">west</span>
                      </button>
                      <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined">east</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative flex justify-center">
                  <div className="w-full aspect-video rounded-xl overflow-hidden editorial-shadow bg-surface-container-high relative">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Da0t5av4fyFn8HLZva5HK5bJeSL2rc4PSpwhqTARc3BJlfevCET03kraeuCZZrYB54HKjgpmQb3_eU6C7wgg2GBW6WEkXac8vJ7ZrNEpV3F1CvoII-_QipCRloGoHLnu2rzqZtPEQPrfgvpN_tb61qPCxlLVvF-CIun5GrdkasnTt9N_2opQ9pbQGejjz0XevJ593P_r0F0azyPmA-wXxttI40h6vakXT9mrxkO03eSy1f2fdTMmAZmbBSpvjUfl8_Ja5DAWVjY"
                      alt="Couple in front of restored home"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <span className="px-3 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded">Success Story #442</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="mb-24 px-8">
          <div className="max-w-5xl mx-auto bg-primary rounded-2xl overflow-hidden relative p-12 md:p-24 text-center">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white tracking-tight">Your sanctuary deserves the best protection.</h2>
              <p className="text-on-primary-container text-lg">Our experts are standing by. Get a clear path to restoration with one click.</p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-secondary text-on-secondary px-10 py-5 rounded-lg font-bold editorial-shadow hover:scale-105 active:scale-95 transition-all text-lg">
                  Start Your Claim Now
                </Link>
                <a href="tel:8008477378" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-lg font-bold hover:bg-white/20 transition-all text-lg">
                  (800) VIP-REST
                </a>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
