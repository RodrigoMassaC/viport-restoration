import { Link } from "react-router-dom";
import { useState } from "react";
import UrgencyBanner from "@/components/layout/UrgencyBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";

export default function ContactUs() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    service_type: "Water Damage",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.phone || !form.email) return;
    setStatus("loading");
    const { error } = await supabase.from("inspection_requests").insert([
      {
        full_name: form.full_name,
        phone: form.phone,
        email: form.email,
        damage_type: form.service_type,
        description: form.description,
        source: "contact_page",
      },
    ]);
    if (error) {
      console.error("Supabase error:", error);
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ full_name: "", phone: "", email: "", service_type: "Water Damage", description: "" });
    }
  };


  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      <main className="pb-24">
        {/* ─── Hero + Contact Form ─── */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h1 className="font-headline font-extrabold text-5xl lg:text-7xl text-primary leading-none tracking-tighter mb-6">
                  Let's Rebuild <br /><span className="text-secondary">Together.</span>
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  From emergency mitigation to full structural restoration, our architectural guardian approach ensures your property is returned to its peak condition.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: "phone_in_talk", title: "Call Our Experts", line1: "(800) VIP-REST", line2: "Available 24/7 for emergencies" },
                  { icon: "location_on", title: "Visit Our Office", line1: "1200 Industrial Way, Suite 400", line2: "Miami, FL 33101" },
                  { icon: "alternate_email", title: "General Inquiries", line1: "contact@viportrestoration.com", line2: "" },
                ].map((item) => (
                  <div key={item.icon} className="flex items-start gap-6">
                    <div className="bg-surface-container-highest p-4 rounded-xl text-primary">
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-primary">{item.title}</h4>
                      <p className="text-on-surface-variant font-medium">{item.line1}</p>
                      {item.line2 && <p className="text-on-surface-variant text-sm mt-1">{item.line2}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-outline-variant/15 flex items-center gap-8">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-300"></div>
                  <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-400"></div>
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white text-xs font-bold font-headline">+15</div>
                </div>
                <p className="text-sm font-label text-on-surface-variant">
                  <span className="font-bold text-primary">24/7 Experts</span> waiting to <br />assist with your inspection.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7 relative">
              <div className="bg-surface-container-lowest rounded-2xl p-10 lg:p-16 shadow-[0px_20px_40px_rgba(0,29,52,0.06)] relative z-10 border border-outline-variant/10">
                <h3 className="font-headline font-bold text-2xl text-primary mb-8 flex items-center gap-3">
                  Request Inspection
                  <span className="h-px flex-1 bg-outline-variant/20"></span>
                </h3>
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
                    </div>
                    <h3 className="font-headline font-bold text-2xl text-primary mb-3">Request Sent!</h3>
                    <p className="text-on-surface-variant max-w-xs">Our team has received your request and will reach out within 60 minutes.</p>
                  </div>
                ) : (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative">
                        <label className="text-[10px] uppercase tracking-widest font-extrabold text-outline mb-2 block">Full Name</label>
                        <input
                          name="full_name"
                          value={form.full_name}
                          onChange={handleChange}
                          required
                          className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-secondary py-3 px-0 text-primary font-medium transition-all placeholder:text-outline-variant/60"
                          placeholder="John Doe"
                          type="text"
                        />
                      </div>
                      <div className="relative">
                        <label className="text-[10px] uppercase tracking-widest font-extrabold text-outline mb-2 block">Phone Number</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-secondary py-3 px-0 text-primary font-medium transition-all placeholder:text-outline-variant/60"
                          placeholder="+1 (555) 000-0000"
                          type="tel"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative">
                        <label className="text-[10px] uppercase tracking-widest font-extrabold text-outline mb-2 block">Email Address</label>
                        <input
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-secondary py-3 px-0 text-primary font-medium transition-all placeholder:text-outline-variant/60"
                          placeholder="john@example.com"
                          type="email"
                        />
                      </div>
                      <div className="relative">
                        <label className="text-[10px] uppercase tracking-widest font-extrabold text-outline mb-2 block">Service Type</label>
                        <select
                          name="service_type"
                          value={form.service_type}
                          onChange={handleChange}
                          className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-secondary py-3 px-0 text-primary font-medium transition-all appearance-none"
                        >
                          <option>Water Damage</option>
                          <option>Mold Remediation</option>
                          <option>Fire &amp; Smoke</option>
                          <option>Hurricane Response</option>
                          <option>Residential Restoration</option>
                          <option>Commercial Property</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-widest font-extrabold text-outline mb-2 block">Describe Your Situation</label>
                      <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant/30 focus:ring-0 focus:border-secondary py-3 px-0 text-primary font-medium transition-all placeholder:text-outline-variant/60 resize-none"
                        placeholder="Briefly describe the damage or project needs..."
                        rows={4}
                      ></textarea>
                    </div>
                    {status === "error" && (
                      <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
                    )}
                    <button
                      className="w-full bg-secondary text-on-secondary font-headline font-extrabold py-5 rounded-md text-lg shadow-lg hover:shadow-xl hover:bg-on-secondary-container transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-60"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Sending..." : "Send Request"}
                      {status !== "loading" && <span className="material-symbols-outlined">arrow_forward</span>}
                    </button>
                  </form>
                )}
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-surface-container-highest/50 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </section>

        {/* ─── Map / Location ─── */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
            {/* Map */}
            <div className="lg:col-span-8 bg-surface-container-low rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-slate-200">
                <img
                  className="w-full h-full object-cover grayscale opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnpeC6DGugBR5KphjN1FHysOGewVzJyS4ppG1IaXC9idUiKmk2to-Y9aLoViWeczhPJSwHZIJBqYK7T1gCC3_5nnY0z1bGspbjqlIA0sboQrbV5NYjhbziLgbNFD0pWoWwA9PECt8mGnZ3bH2ydQFo-KqnzToGLik0066UBk5v-U47MRFXvCGi5796dkFGUj1Piui9swu4ROjVQBbQV0VBs3bJVoQrfQTfKv-N9U9TUBEN6GeVECu0Ay67osbNEKGMB32gcchg-9k"
                  alt="Map view of Miami"
                />
              </div>
              {/* Overlay card */}
              <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-outline-variant/20 max-w-[240px]">
                <h4 className="font-headline font-extrabold text-primary text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                  Main Headquarters
                </h4>
                <p className="text-xs text-on-surface-variant mt-2">1200 Industrial Way, Miami. Open for onsite consultations by appointment.</p>
              </div>
              {/* Hover CTA */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 backdrop-blur-[2px]">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-3 rounded-full font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">map</span>
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Side cards */}
            <div className="lg:col-span-4 grid grid-rows-2 gap-8">
              <div className="bg-primary rounded-2xl p-8 flex flex-col justify-end text-white overflow-hidden relative">
                <div className="relative z-10">
                  <h4 className="font-headline font-bold text-xl mb-2">Rapid Response Team</h4>
                  <p className="text-sm text-primary-fixed-dim leading-relaxed">Units stationed across the tri-county area for arrival under 60 minutes.</p>
                </div>
              </div>
              <div className="bg-surface-container-high rounded-2xl p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-4xl text-secondary">verified</span>
                  <div>
                    <h4 className="font-headline font-bold text-primary">Fully Insured</h4>
                    <p className="text-xs text-on-surface-variant">License #VIP-992-01</p>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">Comprehensive liability and environmental insurance coverage for every project size.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
