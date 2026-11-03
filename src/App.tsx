// Desarrollado por: Vertice Codeium
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';

export default function App() {
  const appUrl = (import.meta as any).env?.VITE_APP_URL || "http://localhost:3000/admin";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home appUrl={appUrl} />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Home appUrl={appUrl} />} />
      </Routes>
    </BrowserRouter>
  );
}
