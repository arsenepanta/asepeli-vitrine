import { createContext, useState, useContext, useEffect } from 'react';

const DevisContext = createContext();

export function DevisProvider({ children }) {
  // On initialise avec ce qui est dans le localStorage, sinon une liste vide
  const [devisList, setDevisList] = useState(() => {
    const saved = localStorage.getItem('asepeli_devis');
    return saved ? JSON.parse(saved) : [
      { id: "DEV-001", client: "M. Kabange", service: "Plomberie", commune: "Gombe", date: "06/04/2026", statut: "En attente", montant: "45$" }
    ];
  });

  // Chaque fois que la liste change, on l'enregistre dans le navigateur
  useEffect(() => {
    localStorage.setItem('asepeli_devis', JSON.stringify(devisList));
  }, [devisList]);

  const addDevis = (nouveau) => {
    const idGenere = `DEV-${Math.floor(Math.random() * 899) + 100}`;
    const dateJour = new Date().toLocaleDateString('fr-FR');
    
    const complet = {
      ...nouveau,
      id: idGenere,
      date: dateJour,
      statut: "En attente",
      montant: "À chiffrer"
    };

    setDevisList(prev => [complet, ...prev]);
  };

  return (
    <DevisContext.Provider value={{ devisList, addDevis }}>
      {children}
    </DevisContext.Provider>
  );
}

export const useDevis = () => useContext(DevisContext);