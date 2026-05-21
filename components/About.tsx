export default function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-lg lg:py-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-md items-center">
          <div>
            <h2 className="text-3xl sm:text-headline-lg text-primary mb-4 sm:mb-6">
              Experiencia que transforma espacios
            </h2>
            <p className="text-base sm:text-body-lg text-secondary mb-4 sm:mb-6">
              Con más de 15 años de experiencia en el sector de la construcción y remodelación, 
              en Mayma Construcciones nos especializamos en proyectos de gran escala que requieren 
              precisión, planificación y un equipo altamente capacitado.
            </p>
            <p className="text-base sm:text-body-lg text-secondary mb-6 sm:mb-8">
              Hemos completado más de 150 proyectos residenciales, transformando casas en hogares 
              que reflejan la visión y necesidades de nuestros clientes.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-headline-md text-primary font-bold mb-2">15+</div>
                <div className="text-sm sm:text-body-sm text-secondary">Años de experiencia</div>
              </div>
              <div>
                <div className="text-2xl sm:text-headline-md text-primary font-bold mb-2">150+</div>
                <div className="text-sm sm:text-body-sm text-secondary">Proyectos entregados</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about-img.jpg')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
