import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { PaginaConsulta } from './pages/PaginaConsulta';
import { PaginaDetalle } from './pages/PaginaDetalle';
import {datosIniciales} from './Data/datosIniciales';

function App() {

  return (
    <Routes>
      {/* Ruta principal: Consulta y resultados */}
      <Route path="/" element={<PaginaConsulta items={datosIniciales} />} />

      {/* Ruta dinámica para el detalle de cada criptomoneda */}
      <Route path="/criptomonedas/:id" element={<PaginaDetalle items={datosIniciales} />} />

      {/* Ruta para direcciones sin coincidencia (Inexistentes / 404) */}
      <Route 
        path="*" 
        element={
          <div style={{ padding: '30px', fontFamily: 'sans-serif', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ color: '#d9534f' }}>Error 404</h1>
            <p>La dirección o página solicitada no existe.</p>
            <Link to="/" style={{ color: '#007bff', textDecoration: 'none', marginTop: '15px', display: 'inline-block' }}>
              ← Volver al inicio
            </Link>
          </div>
        } 
      />
    </Routes>
  );
}

export default App; 