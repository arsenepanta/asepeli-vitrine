export default function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="text-gold font-title font-bold tracking-widest text-sm uppercase">Kinshasa · RDC</span>
          <h1 className="font-title text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Votre habitat entre <br/> <span className="text-gold">de bonnes mains</span>
          </h1>
          <p className="font-body text-gray-300 mt-6 text-lg max-w-lg">
            Professionnels vérifiés à Kinshasa — Packs Basique, Standard & Premium.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* Lien vers l'ID #devis */}
            <a href="#devis" className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg text-center">
              Demander un devis gratuit
            </a>
            <a href="https://wa.me/243XXXXXXXXX" target="_blank" className="border-2 border-white hover:bg-white hover:text-primary px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all">
              WhatsApp ASEPELI
            </a>
          </div>
        </div>
        <div className="relative aspect-video lg:aspect-square bg-blue-900/30 rounded-2xl flex items-center justify-center border border-white/10">
          <span className="text-white/20 italic">[Photo Habitat]</span>
          <div className="absolute top-6 right-6 bg-success text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
             ✓ Prestataires vérifiés
          </div>
        </div>
      </div>
    </section>
  );
}