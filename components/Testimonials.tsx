export default function Testimonials() {
  const testimonials = [
    {
      quote: "El equipo de Mayma transformó completamente nuestra cocina. El nivel de profesionalismo y atención al detalle superó nuestras expectativas. Cada día disfrutamos del espacio que crearon.",
      author: "María García",
      location: "Madrid"
    },
    {
      quote: "Necesitábamos ampliar nuestra casa para dar espacio a nuestra familia en crecimiento. Mayma gestionó todo el proyecto de principio a fin, incluyendo permisos. El resultado es impecable.",
      author: "Carlos Rodríguez",
      location: "Barcelona"
    },
    {
      quote: "La remodelación integral de nuestra vivienda fue un proyecto ambicioso. Mayma Construcciones cumplió con los plazos y el presupuesto acordado. Recomendamos su trabajo sin dudarlo.",
      author: "Ana Martínez",
      location: "Valencia"
    }
  ];

  return (
    <section className="py-16 sm:py-lg lg:py-xl bg-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-lg">
          <h2 className="text-3xl sm:text-headline-lg text-primary mb-3 sm:mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-md">
              <div className="text-tertiary mb-3 sm:mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-sm sm:text-body-md text-secondary mb-5 sm:mb-6">
                {testimonial.quote}
              </p>
              
              <div>
                <div className="text-base sm:text-label-lg text-primary">
                  {testimonial.author}
                </div>
                <div className="text-sm sm:text-body-sm text-secondary">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
