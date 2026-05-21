export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary pt-20 sm:pt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center py-12 sm:py-0">
        <h1 className="text-4xl sm:text-5xl lg:text-headline-display text-white mb-6 font-bold leading-tight">
          Remodelaciones a gran escala
        </h1>
        <p className="text-base sm:text-body-lg text-white mb-12 sm:mb-xl max-w-2xl mx-auto">
          Remodelamos tu hogar con precisión y orgullo
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contacto" 
            className="w-full sm:w-auto bg-tertiary text-primary text-label-lg px-6 py-3 rounded-sm h-12 flex items-center justify-center hover:bg-overlay transition-colors"
          >
            Solicitar presupuesto
          </a>
          <a 
            href="#proyectos" 
            className="w-full sm:w-auto border border-white text-white text-label-lg px-6 py-3 rounded-sm h-12 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
