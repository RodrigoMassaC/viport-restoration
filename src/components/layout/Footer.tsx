import { Link } from "react-router-dom";
import logoViport from "@/assets/logo_viport.png";

const serviceLinks = [
  { label: "Hurricane", href: "/hurricane-storm-repair" },
  { label: "Water", href: "/water-damage-restoration" },
  { label: "Mold", href: "/mold-remediation" },
  { label: "Fire", href: "/fire-damage-recovery" },
];

const companyLinks = [
  { label: "Commercial", href: "/commercial-services" },
  { label: "Residential", href: "/residential-services" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 bg-slate-100 dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <div className="text-2xl font-black text-blue-950 dark:text-white mb-6 font-headline uppercase tracking-tighter">
            VIPORT RESTORATION
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-body">
            Premier architectural restoration firm. Protecting homes and businesses with precision engineering and 24/7 rapid response.
          </p>
          <div className="flex gap-4">
            <span className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-primary cursor-pointer hover:bg-secondary hover:text-white transition-all">
              <span className="material-symbols-outlined text-lg">share</span>
            </span>
            <span className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-primary cursor-pointer hover:bg-secondary hover:text-white transition-all">
              <span className="material-symbols-outlined text-lg">mail</span>
            </span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-headline font-bold text-primary dark:text-white mb-6 uppercase tracking-widest text-xs">
            Services
          </h4>
          <ul className="space-y-4">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-slate-600 dark:text-slate-400 text-sm hover:text-blue-900 dark:hover:text-blue-200 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-headline font-bold text-primary dark:text-white mb-6 uppercase tracking-widest text-xs">
            Company
          </h4>
          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-slate-600 dark:text-slate-400 text-sm hover:text-blue-900 dark:hover:text-blue-200 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Request Info */}
        <div>
          <h4 className="font-headline font-bold text-primary dark:text-white mb-6 uppercase tracking-widest text-xs">
            Request Info
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
            Need an immediate inspection? Contact our central dispatch.
          </p>
          <Link
            to="/contact"
            className="w-full block bg-primary text-white py-3 rounded-lg font-bold text-sm tracking-tight hover:bg-secondary transition-all text-center"
          >
            Request Inspection
          </Link>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 dark:text-slate-400 text-xs">
          © 2024 VIPORT RESTORATION. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="/terms" className="text-slate-600 dark:text-slate-400 text-xs hover:underline">Terms of Service</a>
          <a href="/accessibility" className="text-slate-600 dark:text-slate-400 text-xs hover:underline">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
