import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Catalogue from '../sections/Catalogue';
import Devis from '../sections/Devis';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold text-primary font-title tracking-tight">150+</div>
              <div className="text-[10px] text-gray-500 uppercase font-black mt-1 tracking-widest">Missions réalisées</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary font-title tracking-tight">45+</div>
              <div className="text-[10px] text-gray-500 uppercase font-black mt-1 tracking-widest">Prestataires actifs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary font-title tracking-tight">24</div>
              <div className="text-[10px] text-gray-500 uppercase font-black mt-1 tracking-widest">Communes couvertes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary font-title tracking-tight">4.7/5</div>
              <div className="text-[10px] text-gray-500 uppercase font-black mt-1 tracking-widest">Note moyenne</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold uppercase tracking-widest w-full mb-2">Paiements locaux & internationaux</span>
            <span className="font-black text-xl italic">M-PESA</span>
            <span className="font-black text-xl italic">Airtel Money</span>
            <span className="font-black text-xl italic">Orange Money</span>
            <span className="font-black text-xl italic">Africell</span>
            <span className="font-black text-xl italic">Wise</span>
          </div>
        </div>
      </section>
      <Services />
      <Catalogue />
      <Devis />
      <section id="diaspora" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-gold font-title font-bold text-4xl mb-6">Espace Diaspora</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Gérez l'entretien et les travaux de la maison familiale à Kinshasa en toute sérénité.
            </p>
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gold hover:text-white transition-all shadow-xl">
              Lancer un projet à distance
            </button>
          </div>
        </div>
      </section>
    </>
  );
}