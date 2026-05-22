export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consulta",
      description: "Reunión inicial para entender tu visión, necesidades y presupuesto. Visitamos el espacio y evaluamos la viabilidad del proyecto."
    },
    {
      number: "02",
      title: "Diseño",
      description: "Creamos planos detallados, renders, seleccionamos materiales y desarrollamos un cronograma. Obtenemos todos los permisos necesarios."
    },
    {
      number: "03",
      title: "Obra",
      description: "Nuestro equipo ejecuta el proyecto con supervisión constante, comunicación transparente y atención al detalle en cada fase."
    },
    {
      number: "04",
      title: "Entrega",
      description: "Inspección final, limpieza completa y recorrido del espacio terminado. Tu satisfacción es nuestra prioridad."
    }
  ];

  return (
    <section id="proceso" className="py-16 sm:py-lg lg:py-xl bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-lg">
          <h2 className="text-3xl sm:text-headline-lg text-primary mb-3 sm:mb-4">
            Nuestro proceso
          </h2>
          <p className="text-base sm:text-body-lg text-secondary max-w-2xl mx-auto px-4">
            Un método probado para garantizar resultados excepcionales
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2"></div>
              )}
              
              <div className="relative z-10">
                <div className="text-3xl sm:text-headline-lg text-primary font-bold mb-3 sm:mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl sm:text-headline-sm text-primary mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-body-md text-secondary">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
