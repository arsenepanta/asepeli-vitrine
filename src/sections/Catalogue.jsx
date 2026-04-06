import { useState } from 'react';
import { 
  Droplets, Shovel, Hammer, Wrench, Trash2, Home, 
  Wind, Shield, PenTool, Zap, Waves, Drill 
} from 'lucide-react';

export default function Catalogue() {
  const [filter, setFilter] = useState('Tous');

  const services = [
    { name: "Nettoyage pro", pack: "Basique", icon: <Droplets /> },
    { name: "Débroussaillage", pack: "Basique", icon: <Shovel /> },
    { name: "Serrurerie", pack: "Basique", icon: <Shield /> },
    { name: "Plomberie (Dépannage)", pack: "Basique", icon: <Wrench /> },
    { name: "Fosses septiques", pack: "Standard", icon: <Trash2 /> },
    { name: "Climatisation", pack: "Standard", icon: <Wind /> },
    { name: "Rénovation", pack: "Standard", icon: <Home /> },
    { name: "Domotique", pack: "Standard", icon: <Zap /> },
    { name: "Architecture", pack: "Premium", icon: <PenTool /> },
    { name: "Électricité Ind.", pack: "Premium", icon: <Hammer /> },
    { name: "Forage & Pompage", pack: "Premium", icon: <Waves /> },
    { name: "Ingénierie", pack: "Premium", icon: <Drill /> },
  ];

  const filteredServices = filter === 'Tous' 
    ? services 
    : services.filter(s => s.pack === filter);

  return (
    <section id="catalogue" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-primary text-3xl font-title font-bold">Nos Domaines d'Expertise</h2>
            <p className="text-gray-500 mt-2">Cliquez sur un pack pour filtrer les services inclus.</p>
          </div>
          
          {/* Filtres style Onglets Maquette */}
          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
            {['Tous', 'Basique', 'Standard', 'Premium'].map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
                  filter === p ? 'bg-primary text-white' : 'text-gray-500 hover:text-primary'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gold transition-all group shadow-sm">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                service.pack === 'Basique' ? 'bg-secondary/10 text-secondary' : 
                service.pack === 'Standard' ? 'bg-primary/10 text-primary' : 'bg-gold/10 text-gold'
              }`}>
                {service.icon}
              </div>
              <h3 className="font-title font-bold text-primary group-hover:text-gold transition-colors">{service.name}</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2 block">
                {service.pack}
              </span>
              <button className="mt-4 text-xs font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                Détails <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}