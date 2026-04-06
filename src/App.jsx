import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DevisProvider } from './context/DevisContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

// --- COMPOSANT FOOTER ---
function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* SECTION LOGO : Correction du chemin pour le rafraîchissement */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/asepeli.jpeg" 
                alt="Logo ASEPELI" 
                className="h-16 w-auto block object-contain bg-white p-1 rounded-lg shadow-md"
                // On s'assure que l'image ne s'efface pas
                style={{ display: 'block', minHeight: '64px' }} 
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre partenaire confiance pour tous les services à l'habitat à Kinshasa. 
              Vérifié, Garanti, Professionnel.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-bold text-xs uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="#catalogue" className="hover:text-gold transition">Pack Basique</a></li>
              <li><a href="#catalogue" className="hover:text-gold transition">Pack Standard</a></li>
              <li><a href="#catalogue" className="hover:text-gold transition">Pack Premium</a></li>
            </ul>
          </div>

          {/* Société */}
          <div>
            <h4 className="text-gold font-bold text-xs uppercase tracking-widest mb-6">Société</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="#services" className="hover:text-gold transition">Comment ça marche</a></li>
              <li><a href="#" className="hover:text-gold transition">Rejoindre le réseau</a></li>
              <li><a href="#devis" className="hover:text-gold transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold text-xs uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>Kinshasa, RDC</li>
              <li>contact@asepeli.cd</li>
              <li className="font-bold text-white text-lg tracking-tight">+243 XXX XXX XXX</li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright conforme à tes captures */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase font-medium tracking-widest">
          <div>© 2026 ASEPELI — HERVÉ TAMFUMU</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Mentions Légales</a>
            <a href="#" className="hover:text-white transition">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Protection de la route Admin
const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  return isAdmin ? children : <Navigate replace to="/login" />;
};

function App() {
  return (
    <DevisProvider>
      <Router>
        <Routes>
          {/* ROUTE CLIENT (HOME) */}
          <Route path="/" element={
            <div className="min-h-screen bg-white flex flex-col font-body antialiased">
              <Navbar />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
              
              {/* Bulle WhatsApp Flottante */}
              <a 
                href="https://wa.me/243XXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center justify-center"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.44-9.89 9.886-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.743-.981z"/>
                </svg>
              </a>
            </div>
          } />

          {/* ROUTE LOGIN */}
          <Route path="/login" element={<Login />} />

          {/* ROUTE ADMIN */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </DevisProvider>
  );
}

export default App;