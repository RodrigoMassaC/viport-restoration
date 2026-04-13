import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl text-primary-foreground tracking-wide">
          Remodela<span className="text-accent">Pro</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">Servicios</a>
          <a href="#contacto" className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contacto</a>
          <a href="#contacto" className="bg-accent text-accent-foreground px-5 py-2 font-body text-sm font-semibold hover:brightness-110 transition-all">
            Cotización Gratis
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-foreground/95 border-t border-primary-foreground/10 px-6 py-4 space-y-3">
          <a href="#servicios" onClick={() => setOpen(false)} className="block font-body text-primary-foreground/70 hover:text-accent">Servicios</a>
          <a href="#contacto" onClick={() => setOpen(false)} className="block font-body text-primary-foreground/70 hover:text-accent">Contacto</a>
          <a href="#contacto" onClick={() => setOpen(false)} className="block bg-accent text-accent-foreground px-5 py-2 font-body text-sm font-semibold text-center">
            Cotización Gratis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
