import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoViport from "@/assets/logo_viport.png";

const services = [
  { label: "Water Damage Restoration", href: "/water-damage-restoration", icon: "water_drop" },
  { label: "Fire Damage Recovery", href: "/fire-damage-recovery", icon: "local_fire_department" },
  { label: "Hurricane & Storm Repair", href: "/hurricane-storm-repair", icon: "cyclone" },
  { label: "Mold Remediation", href: "/mold-remediation", icon: "science" },
  { label: "Commercial Services", href: "/commercial-services", icon: "corporate_fare" },
  { label: "Residential Services", href: "/residential-services", icon: "home_work" },
];

const serviceRoutes = services.map((s) => s.href);

export default function Navbar() {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive = serviceRoutes.some((r) => location.pathname.startsWith(r));

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Urgency Banner */}
      <div className="bg-tertiary-container text-on-tertiary-container py-2 px-8 flex justify-between items-center z-[60] relative">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-headline flex items-center gap-2">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-on-tertiary-container"></span>
          </span>
          Emergency 24/7 Response Available Across Florida
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:block">Call Now: (800) VIP-REST</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 glass-nav shadow-[0px_8px_32px_rgba(0,29,52,0.08)]">
        <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-8xl mx-auto">

          {/* Logo */}
          <Link
            to="/"
            className="hover:opacity-90 transition-opacity flex-shrink-0"
          >
            <img src={logoViport} alt="VIPORT RESTORATION" className="h-20 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 font-headline font-bold tracking-tight transition-colors text-sm ${
                  isServicesActive || servicesOpen
                    ? "text-amber-600 dark:text-amber-500"
                    : "text-slate-700 dark:text-slate-300 hover:text-amber-600"
                }`}
              >
                Services
                <span
                  className={`material-symbols-outlined text-base transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>

              {/* Dropdown Panel */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white dark:bg-slate-900 rounded-2xl shadow-[0px_24px_60px_rgba(0,29,52,0.12)] border border-outline-variant/20 p-4 animate-fade-up origin-top">
                  <p className="text-[10px] font-black uppercase tracking-widest text-outline px-4 pb-3">
                    Our Services
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((svc) => (
                      <Link
                        key={svc.href}
                        to={svc.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container-low transition-colors group"
                      >
                        <div className="w-9 h-9 bg-surface-container rounded-lg flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors flex-shrink-0">
                          <span className="material-symbols-outlined text-lg">{svc.icon}</span>
                        </div>
                        <span className="font-headline font-bold text-sm text-primary group-hover:text-secondary transition-colors">
                          {svc.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-outline-variant/20 px-4">
                    <Link
                      to="/contact"
                      className="flex items-center justify-between text-secondary font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all group"
                    >
                      Request a Free Inspection
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`font-headline font-bold tracking-tight transition-colors text-sm ${
                location.pathname === "/contact"
                  ? "text-amber-600 border-b-2 border-amber-600 pb-0.5"
                  : "text-slate-700 dark:text-slate-300 hover:text-amber-600"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <span className="text-slate-700 text-xs font-bold tracking-widest cursor-pointer hover:text-amber-600 transition-all hidden lg:block">
              EN/ES
            </span>
            <Link
              to="/contact"
              className="bg-secondary text-on-secondary px-5 py-2.5 rounded-lg font-bold text-sm tracking-tight scale-95 active:scale-90 transition-transform shadow-lg hover:bg-on-secondary-container"
            >
              Emergency 24/7
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-outline-variant/20 px-6 pb-6 space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-outline pt-4 pb-2">Services</p>
            {services.map((svc) => (
              <Link
                key={svc.href}
                to={svc.href}
                className="flex items-center gap-3 py-3 border-b border-outline-variant/10"
              >
                <span className="material-symbols-outlined text-secondary text-lg">{svc.icon}</span>
                <span className="font-headline font-bold text-sm text-primary">{svc.label}</span>
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Link to="/contact" className="block font-bold text-primary py-2">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
