'use client';

import { useState, useRef, useEffect } from 'react';

export default function Hero() {
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
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Before/After Slider */}
          <div 
            ref={containerRef}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-md cursor-col-resize select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* Before Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/project2-photo1-before.jpg')" }}
            >
              <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-medium">
                Antes
              </div>
            </div>
            
            {/* After Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('/images/project2-photo1-after.jpg')",
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            >
              <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-medium">
                Después
              </div>
            </div>
            
            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary mb-6 font-bold leading-tight">
              Transformamos lo que otros no ven
            </h1>
            <p className="text-base sm:text-lg text-secondary mb-8 lg:mb-12">
              Especializados en remodelaciones residenciales, convertimos espacios en hogares extraordinarios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contacto" 
                className="bg-tertiary text-primary text-base font-medium px-8 py-4 rounded-sm hover:bg-opacity-90 transition-colors"
              >
                Solicitar presupuesto
              </a>
              <a 
                href="#proyectos" 
                className="border-2 border-primary text-primary text-base font-medium px-8 py-4 rounded-sm hover:bg-primary hover:text-white transition-colors"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
