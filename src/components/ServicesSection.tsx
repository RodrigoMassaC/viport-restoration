import commercialImg from "@/assets/commercial-remodel.jpg";
import residentialImg from "@/assets/residential-remodel.jpg";
import { Building2, Home, Paintbrush, Wrench, Ruler, Lightbulb } from "lucide-react";

const services = [
  { icon: Building2, title: "Oficinas Corporativas", desc: "Espacios de trabajo modernos y funcionales que impulsan la productividad." },
  { icon: Home, title: "Cocinas & Baños", desc: "Renovaciones completas con acabados de primera calidad." },
  { icon: Paintbrush, title: "Diseño Interior", desc: "Conceptualización y ejecución de ambientes únicos." },
  { icon: Wrench, title: "Restaurantes & Retail", desc: "Espacios comerciales que atraen y retienen clientes." },
  { icon: Ruler, title: "Ampliaciones", desc: "Expansión de espacios con integración arquitectónica perfecta." },
  { icon: Lightbulb, title: "Iluminación & Eléctrico", desc: "Soluciones eléctricas modernas y eficientes." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-accent font-semibold tracking-widest uppercase text-sm mb-3">Nuestros Servicios</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Soluciones Integrales
          </h2>
        </div>

        {/* Two main categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="group relative overflow-hidden rounded-lg">
            <img src={commercialImg} alt="Remodelación comercial" width={800} height={600} loading="lazy" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-8">
              <div>
                <h3 className="font-display text-3xl text-primary-foreground mb-2">Comercial</h3>
                <p className="font-body text-primary-foreground/70">Oficinas, restaurantes, retail y más</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img src={residentialImg} alt="Remodelación residencial" width={800} height={600} loading="lazy" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-8">
              <div>
                <h3 className="font-display text-3xl text-primary-foreground mb-2">Residencial</h3>
                <p className="font-body text-primary-foreground/70">Cocinas, baños, ampliaciones y renovaciones</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card p-8 rounded-lg shadow-warm hover:shadow-elevated transition-shadow duration-300 group">
              <s.icon className="w-10 h-10 text-accent mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
