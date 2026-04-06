import { useState } from 'react';
import { useDevis } from '../context/DevisContext';
import { Send, User, Phone, MapPin, Wrench, CheckCircle2 } from 'lucide-react';

export default function Devis() {
  const { addDevis } = useDevis();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    service: '',
    commune: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérification dans la console (F12)
    console.log("Tentative d'envoi du devis pour:", formData.nom);

    // On appelle la fonction du Context qui enregistre dans le localStorage
    addDevis({
      client: formData.nom,
      service: formData.service || "Général",
      commune: formData.commune,
      telephone: formData.telephone
    });

    // Effet visuel de succès
    setSubmitted(true);
    
    // On réinitialise le formulaire après 3 secondes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nom: '', telephone: '', service: '', commune: '', details: '' });
    }, 3000);
  };

  return (
    <section id="devis" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          {/* COLONNE INFO (GRISE/BLEUE) */}
          <div className="bg-primary p-12 text-white md:w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl font-title font-bold mb-6 text-gold">Estimation gratuite</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Décrivez votre besoin. Nos experts vous recontactent sous 24h pour Kinshasa et la Diaspora.
            </p>
            <div className="space-y-4">
              {["Intervention Rapide", "Prix Transparents", "Artisans Vérifiés"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/60">
                  <CheckCircle2 size={16} className="text-gold" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* COLONNE FORMULAIRE */}
          <div className="p-12 md:w-2/3 relative">
            {submitted && (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-10 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Demande envoyée !</h3>
                <p className="text-slate-500">Consultez maintenant votre onglet Admin pour la voir.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-4 text-slate-400" size={18} />
                  <input 
                    type="text" required placeholder="Votre nom"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all"
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-4 text-slate-400" size={18} />
                  <input 
                    type="tel" required placeholder="Téléphone WhatsApp"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all"
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Wrench className="absolute left-4 top-4 text-slate-400" size={18} />
                  <select 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all appearance-none text-slate-600"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                  >
                    <option value="">Quel type de travaux ?</option>
                    <option value="Plomberie">Plomberie</option>
                    <option value="Électricité">Électricité</option>
                    <option value="Climatisation">Climatisation</option>
                    <option value="Nettoyage">Nettoyage Pro</option>
                    <option value="Rénovation">Rénovation complète</option>
                  </select>
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 text-slate-400" size={18} />
                  <input 
                    type="text" required placeholder="Votre commune"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all"
                    value={formData.commune}
                    onChange={(e) => setFormData({...formData, commune: e.target.value})}
                  />
                </div>
              </div>

              <textarea 
                placeholder="Dites-nous en plus sur votre besoin..." 
                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-gold focus:bg-white transition-all min-h-[100px]"
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
              ></textarea>

              <button 
                type="submit" 
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
              >
                Valider ma demande <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}