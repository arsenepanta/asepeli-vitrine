import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'asepeli2026') { // Ton mot de passe secret
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      alert('Accès refusé : Mot de passe incorrect');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/asepeli.jpeg" alt="Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-primary">Espace Administration</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Mot de passe</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-gold outline-none"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full bg-gold text-white py-4 rounded-xl font-bold hover:bg-yellow-600 transition-all">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}