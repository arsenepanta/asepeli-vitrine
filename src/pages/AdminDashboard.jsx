import { useState } from 'react';
import { useDevis } from '../context/DevisContext';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ClipboardList, Users, 
  LogOut, MoreVertical, ArrowUpRight 
} from 'lucide-react';

export default function AdminDashboard() {
  const { devisList } = useDevis();
  const navigate = useNavigate();
  
  // Navigation interne (Tabs)
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-body text-slate-700">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-[#1E3A8A] text-white p-8 hidden lg:flex flex-col shadow-2xl h-screen sticky top-0">
        
        {/* SECTION LOGO : Agrandie et centrée */}
        <div className="mb-14 flex flex-col items-center gap-4">
          <div className="bg-white p-3 rounded-[1.5rem] shadow-xl shadow-black/20 flex items-center justify-center">
            <img 
              src="/asepeli.jpeg" 
              alt="Logo ASEPELI" 
              className="h-20 w-auto object-contain block"
            />
          </div>
          <div className="text-center">
            <span className="font-title font-bold text-xl tracking-tighter uppercase block">Admin Panel</span>
            <div className="h-1 w-12 bg-[#D4A017] mx-auto mt-2 rounded-full"></div>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-grow space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
              activeTab === 'dashboard' ? 'bg-[#D4A017] text-white shadow-lg translate-x-2' : 'hover:bg-white/5 text-white/70'
            }`}
          >
            <LayoutDashboard size={20}/> <span className="font-bold text-sm">Tableau de bord</span>
          </button>

          <button 
            onClick={() => setActiveTab('demandes')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
              activeTab === 'demandes' ? 'bg-[#D4A017] text-white shadow-lg translate-x-2' : 'hover:bg-white/5 text-white/70'
            }`}
          >
            <ClipboardList size={20}/> <span className="font-bold text-sm">Demandes</span>
          </button>

          <button 
            onClick={() => setActiveTab('prestataires')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
              activeTab === 'prestataires' ? 'bg-[#D4A017] text-white shadow-lg translate-x-2' : 'hover:bg-white/5 text-white/70'
            }`}
          >
            <Users size={20}/> <span className="font-bold text-sm">Prestataires</span>
          </button>
        </nav>

        {/* DECONNEXION */}
        <button 
          onClick={handleLogout} 
          className="mt-auto flex items-center gap-3 p-4 text-red-400 hover:bg-red-500/10 rounded-xl transition-all font-bold group"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          <span>Déconnexion</span>
        </button>
      </aside>

      {/* CONTENU PRINCIPAL */}
      <main className="flex-grow p-10 max-w-7xl mx-auto w-full overflow-y-auto">
        
        {/* Header de page */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-black text-[#1E3A8A] font-title tracking-tight">
              {activeTab === 'dashboard' && "Vue d'ensemble"}
              {activeTab === 'demandes' && "Toutes les demandes"}
              {activeTab === 'prestataires' && "Gestion des Prestataires"}
            </h2>
            <p className="text-slate-500 mt-1 font-medium">Système de gestion ASEPELI v1.0</p>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-[#D4A017] rounded-xl flex items-center justify-center font-black text-white shadow-inner">
              HT
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-[#1E3A8A] leading-none">Hervé Tamfumu</p>
              <p className="text-[10px] text-slate-400 uppercase font-black mt-1 tracking-widest">Super Admin</p>
            </div>
          </div>
        </header>

        {/* --- CONTENU DYNAMIQUE --- */}

        {activeTab === 'dashboard' && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <StatCard label="Nouveaux Devis" value={devisList.length} color="text-[#D4A017]" />
              <StatCard label="Missions en cours" value="08" color="text-blue-500" />
              <StatCard label="Prestataires" value="52" color="text-purple-500" />
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
               <div className="p-8 border-b flex justify-between items-center bg-slate-50/50">
                  <h3 className="font-bold text-lg text-[#1E3A8A]">Demandes récentes</h3>
                  <button 
                    onClick={() => setActiveTab('demandes')} 
                    className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 text-[#D4A017] text-xs font-bold hover:bg-gold hover:text-white transition-all flex items-center gap-2"
                  >
                    Voir tout l'historique <ArrowUpRight size={14}/>
                  </button>
               </div>
               <Table devis={devisList.slice(0, 5)} />
            </div>
          </div>
        )}

        {activeTab === 'demandes' && (
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-bold text-lg text-[#1E3A8A]">Journal complet des devis</h3>
              <span className="bg-[#1E3A8A] text-white text-[10px] px-3 py-1 rounded-full font-bold">
                {devisList.length} TOTAL
              </span>
            </div>
            <Table devis={devisList} />
          </div>
        )}

        {activeTab === 'prestataires' && (
          <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[2rem] border-2 border-dashed border-slate-200 text-slate-400 animate-in fade-in">
            <div className="bg-slate-50 p-6 rounded-full mb-6">
              <Users size={60} className="opacity-20 text-[#1E3A8A]" />
            </div>
            <p className="text-xl font-bold text-slate-600">Module Prestataires</p>
            <p className="text-sm mt-2">La base de données des techniciens est en cours de synchronisation...</p>
          </div>
        )}

      </main>
    </div>
  );
}

// Composant StatCard
function StatCard({ label, value, color }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2">{label}</p>
      <p className={`text-5xl font-black ${color} font-title`}>{value}</p>
    </div>
  );
}

// Composant Table
function Table({ devis }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-[11px] font-black uppercase text-slate-400 border-b bg-slate-50/30">
            <th className="px-8 py-5">ID</th>
            <th className="px-8 py-5">Client</th>
            <th className="px-8 py-5">Service</th>
            <th className="px-8 py-5">Commune</th>
            <th className="px-8 py-5 text-right">Statut</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {devis.map((item) => (
            <tr key={item.id} className="hover:bg-blue-50/30 transition-colors group">
              <td className="px-8 py-5 text-xs font-mono text-slate-300 group-hover:text-[#D4A017] transition-colors">{item.id}</td>
              <td className="px-8 py-5 font-bold text-slate-700">{item.client}</td>
              <td className="px-8 py-5 text-sm font-medium text-slate-600">{item.service}</td>
              <td className="px-8 py-5 text-sm text-slate-400 uppercase tracking-tighter">{item.commune}</td>
              <td className="px-8 py-5 text-right">
                <span className="px-4 py-2 rounded-xl text-[10px] font-black uppercase bg-orange-50 text-orange-600 border border-orange-100">
                  {item.statut}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {devis.length === 0 && (
        <div className="p-20 text-center text-slate-400 font-medium">
          Aucune donnée disponible pour le moment.
        </div>
      )}
    </div>
  );
}