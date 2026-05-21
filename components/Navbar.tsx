"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-sm flex items-center justify-between">
        <a href="#" className="text-xl sm:text-headline-sm font-bold text-primary">
          MAYMA
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-body-md text-primary hover:text-tertiary transition-colors">
            Servicios
          </a>
          <a href="#proyectos" className="text-body-md text-primary hover:text-tertiary transition-colors">
            Proyectos
          </a>
          <a href="#proceso" className="text-body-md text-primary hover:text-tertiary transition-colors">
            Proceso
          </a>
          <a href="#contacto" className="text-body-md text-primary hover:text-tertiary transition-colors">
            Contacto
          </a>
          
          <a 
            href="#contacto" 
            className="bg-tertiary text-primary text-label-lg px-5 py-3 rounded-sm h-10 flex items-center hover:bg-overlay transition-colors"
          >
            Solicitar presupuesto
          </a>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#servicios" 
              className="block text-body-md text-primary hover:text-tertiary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#proyectos" 
              className="block text-body-md text-primary hover:text-tertiary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </a>
            <a 
              href="#proceso" 
              className="block text-body-md text-primary hover:text-tertiary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proceso
            </a>
            <a 
              href="#contacto" 
              className="block text-body-md text-primary hover:text-tertiary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <a 
              href="#contacto" 
              className="block w-full bg-tertiary text-primary text-label-lg px-5 py-3 rounded-sm text-center hover:bg-overlay transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
