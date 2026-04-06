import { CheckCircle } from 'lucide-react';

export default function Services() {
  const packs = [
    { name: "Pack Basique", tag: "ESSENTIEL", price: "10$ - 17 000$", color: "border-secondary", button: "bg-secondary" },
    { name: "Pack Standard", tag: "CONFORT", price: "10$ - 250 000$", color: "border-primary", button: "bg-primary", popular: true },
    { name: "Pack Premium", tag: "INGÉNIERIE", price: "25$ - 500 000$", color: "border-gold", button: "bg-gold" }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {packs.map((pack, index) => (
            <div key={index} className={`relative border-2 ${pack.color} rounded-2xl p-8 flex flex-col hover:shadow-xl transition-all`}>
              <h3 className="text-2xl font-title font-bold text-primary mt-2">{pack.name}</h3>
              <p className="text-gold font-bold text-xl mt-1">{pack.price}</p>
              <a href="#devis" className={`${pack.button} text-white text-center mt-8 py-4 rounded-xl font-bold`}>
                Demander ce pack
              </a>
            </div>
          ))}
        </div>

        {/* AJOUT DE L'ID PROCESS ICI */}
        <div id="process" className="bg-gray-50 rounded-3xl p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-primary text-3xl font-title font-bold">Comment ça marche</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Étapes ... */}
            <div><div className="w-12 h-12 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">1</div><p className="font-bold">Décrivez</p></div>
            <div><div className="w-12 h-12 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">2</div><p className="font-bold">Devis</p></div>
            <div><div className="w-12 h-12 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">3</div><p className="font-bold">Intervention</p></div>
            <div><div className="w-12 h-12 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">4</div><p className="font-bold">Payez</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}