import { Menu, X } from 'lucide-react';
import { useState } from 'react';
const logo = "https://i.imgur.com/L7UlK6v.jpeg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <img src={logo} alt="Decor. Lar" className="h-20 sm:h-28 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-black hover:text-red-600 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-black hover:text-red-600 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-black hover:text-red-600 transition-colors">
              Contato
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="text-black hover:text-red-600 transition-colors">
              Localização
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-black hover:text-red-600 transition-colors">
              Galeria
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 text-black hover:text-red-600">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 text-black hover:text-red-600">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left py-2 text-black hover:text-red-600">
              Contato
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="block w-full text-left py-2 text-black hover:text-red-600">
              Localização
            </button>
            <button onClick={() => scrollToSection('galeria')} className="block w-full text-left py-2 text-black hover:text-red-600">
              Galeria
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}