import { useEffect, useState } from 'react';
import axios from 'axios';

// Definiere den Typ für die Entwickler
interface Entwickler {
  entwicklerID: number;
  FirstName: string;
  LastName: string;
  Email: string;
  YearOfBirth: number;
  Details: string;
  entwicklerFotoID: number;
}

const Home = () => {
  const [entwickler, setEntwickler] = useState<Entwickler[]>([]); // Zustand für Entwickler
  const [loading, setLoading] = useState<boolean>(true); // Zustand für Ladeindikator
  const [error, setError] = useState<string | null>(null); // Zustand für Fehler

  useEffect(() => {
    // API-Aufruf an dein NestJS-Backend
    axios.get<Entwickler[]>('http://localhost:3001/entwickler')
      .then(response => {
        setEntwickler(response.data); // Setze die Entwickler-Daten
        setLoading(false); // Ladeindikator auf false setzen, wenn die Daten geladen sind
      })
      .catch(error => {
        setError('Es gab einen Fehler bei der Datenabfrage.');
        setLoading(false); // Ladeindikator auf false setzen, auch bei Fehlern
        console.error("Fehler:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Ladeanzeige, solange die Daten noch geladen werden
  }

  if (error) {
    return <div>{error}</div>; // Anzeige des Fehlers, falls ein Fehler auftritt
  }

  return (
    <div>
      <h1>Entwickler Liste</h1>
      <ul>
        {entwickler.map((dev) => (
          <li key={dev.entwicklerID}>
            {dev.Details} {dev.YearOfBirth}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


