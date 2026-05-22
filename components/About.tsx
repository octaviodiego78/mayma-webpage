export default function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-lg lg:py-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-md items-center">
          <div>
            <h2 className="text-3xl sm:text-headline-lg text-primary mb-4 sm:mb-6">
              Nuestra visión
            </h2>
            <p className="text-base sm:text-body-lg text-secondary mb-4 sm:mb-6">
              En Mayma Construcciones somos un equipo especializado en remodelaciones residenciales. 
              Mientras otros ven espacios limitados o casas descuidadas, nosotros vemos oportunidades 
              de transformación. Nuestro enfoque personalizado y atención al detalle convierte cada 
              proyecto en una historia de éxito única.
            </p>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-md overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/project2-photo2-after.jpg')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
