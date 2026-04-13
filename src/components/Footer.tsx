const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" className="font-display text-xl text-primary-foreground">
          Remodela<span className="text-accent">Pro</span>
        </a>
        <p className="font-body text-sm text-primary-foreground/50">
          © 2026 RemodelaPro. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
