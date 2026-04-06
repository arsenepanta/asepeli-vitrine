import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Comment ça marche", href: "#process" },
    { name: "Diaspora", href: "#diaspora" },
    { name: "Rejoindre le réseau", href: "#footer" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-3 px-6 md:px-12 flex items-center justify-between">
      {/* SECTION LOGO : Texte supprimé, seule l'image reste */}
      <a href="#" className="flex items-center group">
        <img 
          src="/asepeli.jpeg" 
          alt="Logo ASEPELI" 
          className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
          onError={(e) => {
            console.error("Le fichier /public/asepeli.jpeg est introuvable");
          }}
        />
      </a>

      {/* NAVIGATION DESKTOP */}
      <div className="hidden lg:flex items-center gap-8 font-body text-sm font-medium text-gray-700">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="hover:text-gold transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* BOUTON DEVIS & MENU MOBILE */}
      <div className="flex items-center gap-4">
        <a 
          href="#devis" 
          className="hidden sm:block bg-gold hover:bg-yellow-600 text-white px-6 py-2.5 rounded-md font-bold text-sm transition-all shadow-md active:scale-95"
        >
          Devis gratuit
        </a>
        
        <button 
          className="lg:hidden text-primary p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t p-6 flex flex-col gap-4 lg:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-semibold text-primary py-2" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#devis" 
            onClick={() => setIsOpen(false)} 
            className="bg-gold text-white text-center py-4 rounded-md font-bold"
          >
            Devis gratuit
          </a>
        </div>
      )}
    </nav>
  );
}