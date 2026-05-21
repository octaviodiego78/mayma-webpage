export default function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Remodelación integral de vivienda",
      photos: [
        {
          before: "/images/project1-photo1-before.jpg",
          after: "/images/project1-photo1-after.jpg",
          label: "Vista principal"
        },
        {
          before: "/images/project1-photo2-before.jpg",
          after: "/images/project1-photo2-after.jpg",
          label: "Detalle interior"
        },
        {
          before: "/images/project1-photo3-before.jpg",
          after: "/images/project1-photo3-after.jpg",
          label: "Acabados"
        }
      ]
    },
    {
      title: "Proyecto 2",
      description: "Ampliación y renovación completa",
      photos: [
        {
          before: "/images/project2-photo1-before.jpg",
          after: "/images/project2-photo1-after.jpg",
          label: "Vista general"
        },
        {
          before: "/images/project2-photo2-before.jpg",
          after: "/images/project2-photo2-after.jpg",
          label: "Espacio remodelado"
        },
        {
          before: "/images/project2-photo3-before.jpg",
          after: "/images/project2-photo3-after.jpg",
          label: "Detalles finales"
        }
      ]
    }
  ];

  return (
    <section id="proyectos" className="py-16 sm:py-lg lg:py-xl bg-muted-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-lg">
          <h2 className="text-3xl sm:text-headline-lg text-primary mb-3 sm:mb-4">
            Nuestros proyectos
          </h2>
          <p className="text-base sm:text-body-lg text-secondary max-w-2xl mx-auto px-4">
            Transformaciones que hablan por sí mismas
          </p>
        </div>
        
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, projectIndex) => (
            <div key={projectIndex} className="bg-white rounded-md p-6 sm:p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-headline-md text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-base sm:text-body-lg text-secondary">
                  {project.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {project.photos.map((photo, photoIndex) => (
                  <div key={photoIndex} className="bg-overlay rounded-md overflow-hidden">
                    <div className="grid grid-cols-2 gap-px bg-white">
                      <div className="relative h-48 sm:h-64 overflow-hidden group">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url('${photo.before}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-end p-3">
                          <span className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Antes
                          </span>
                        </div>
                      </div>
                      
                      <div className="relative h-48 sm:h-64 overflow-hidden group">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url('${photo.after}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-end p-3">
                          <span className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Después
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {photo.label && (
                      <div className="p-3 bg-white">
                        <p className="text-sm sm:text-body-sm text-secondary text-center">
                          {photo.label}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
