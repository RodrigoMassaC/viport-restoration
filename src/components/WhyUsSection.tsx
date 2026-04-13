import { Shield, Clock, Award, Users } from "lucide-react";

const reasons = [
  { icon: Shield, number: "15+", label: "Años de Experiencia", desc: "Trayectoria sólida en el mercado de la construcción y remodelación." },
  { icon: Clock, number: "98%", label: "Entregas a Tiempo", desc: "Cumplimos con los plazos establecidos sin comprometer la calidad." },
  { icon: Award, number: "500+", label: "Proyectos Completados", desc: "Cientos de clientes satisfechos avalan nuestro trabajo." },
  { icon: Users, number: "50+", label: "Profesionales", desc: "Equipo multidisciplinario altamente capacitado." },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-accent font-semibold tracking-widest uppercase text-sm mb-3">¿Por Qué Elegirnos?</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Compromiso con la Excelencia
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r) => (
            <div key={r.label} className="text-center group">
              <r.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <p className="font-display text-4xl text-accent mb-1">{r.number}</p>
              <p className="font-body font-semibold text-lg mb-2">{r.label}</p>
              <p className="font-body text-primary-foreground/60 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
