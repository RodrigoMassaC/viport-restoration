import heroImg from "@/assets/hero-remodel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Remodelación de cocina de lujo con encimeras de mármol"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <p className="font-body text-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up">
            Excelencia en cada detalle
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Remodelación Comercial & Residencial
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Transformamos espacios con diseño innovador, materiales premium y artesanía impecable. Su visión, nuestra pasión.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <a href="#contacto" className="bg-accent text-accent-foreground px-8 py-4 font-body font-semibold tracking-wide hover:brightness-110 transition-all">
              Solicitar Cotización
            </a>
            <a href="#servicios" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-body font-semibold tracking-wide hover:bg-primary-foreground/10 transition-all">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
