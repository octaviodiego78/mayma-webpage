'use client';

import { useState, useRef, useEffect } from 'react';

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  label: string;
  className?: string;
}

function ImageSlider({ beforeImage, afterImage, label, className = '' }: ImageSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(75);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg cursor-col-resize select-none group ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Before Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${beforeImage}')` }}
      ></div>
      
      {/* After Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${afterImage}')`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      ></div>
      
      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-col-resize z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Después
      </div>
      <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Antes
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
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
        },
        {
          before: "/images/project2-photo4-before.jpg",
          after: "/images/project2-photo4-after.jpg",
          label: "Detalle adicional"
        }
      ]
    },
    {
      title: "Proyecto 2",
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
        },
        {
          before: "/images/project1-photo4-before.jpg",
          after: "/images/project1-photo4-after.jpg",
          label: "Vista final"
        }
      ]
    }
  ];

  return (
    <section id="proyectos" className="py-16 sm:py-20 lg:py-28 bg-muted-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 font-bold">
            Nuestros proyectos
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto">
            Transformaciones que hablan por sí mismas. Arrastra para revelar el antes y después
          </p>
        </div>
        
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {projects.map((project, projectIndex) => (
            <div key={projectIndex}>
              {/* Project Header */}
              <div className="mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-primary mb-3 font-bold">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg text-secondary">
                  {project.description}
                </p>
              </div>
              
              {/* 2x2 Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {project.photos.map((photo, photoIndex) => (
                  <ImageSlider
                    key={photoIndex}
                    beforeImage={photo.before}
                    afterImage={photo.after}
                    label={photo.label}
                    className="aspect-square"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
