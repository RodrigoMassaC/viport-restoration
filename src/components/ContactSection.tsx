import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-accent font-semibold tracking-widest uppercase text-sm mb-3">Contacto</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Comencemos Su Proyecto
            </h2>
            <p className="font-body text-muted-foreground mb-10 max-w-md">
              Cuéntenos sobre su proyecto y le proporcionaremos una cotización personalizada sin compromiso.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-body text-foreground">1855-VIPORT1 / 1855-8476781</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-body text-foreground">info@remodelacionespro.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-body text-foreground">3105 NW 107th Ave Ste 400, Doral, FL 33172</span>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 md:p-10 rounded-lg shadow-elevated">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">¡Mensaje Enviado!</h3>
                <p className="font-body text-muted-foreground">Nos pondremos en contacto pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Nombre</label>
                  <input required className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Correo Electrónico</label>
                  <input required type="email" className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Tipo de Proyecto</label>
                  <select className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50">
                    <option>Remodelación Residencial</option>
                    <option>Remodelación Comercial</option>
                    <option>Diseño Interior</option>
                    <option>Ampliación</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Mensaje</label>
                  <textarea required rows={4} className="w-full bg-secondary border border-border px-4 py-3 font-body text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" />
                </div>
                <button type="submit" className="w-full bg-accent text-accent-foreground py-4 font-body font-semibold tracking-wide hover:brightness-110 transition-all">
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
