import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ItemActividad } from '../types';

interface PaginaDetalleProps {
  items: ItemActividad[];
}

export const PaginaDetalle: React.FC<PaginaDetalleProps> = ({ items }) => {
  const { id } = useParams<{ id: string }>();
  
  // Buscamos el elemento que coincida con el ID de la URL
  const cripto = items.find((item) => item.id === Number(id));

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Detalle de la Criptomoneda</h1>
      
      {cripto ? (
        <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #ddd', marginTop: '20px' }}>
          <h2>{cripto.titulo}</h2>
          <p>{cripto.descripcion}</p>
          <p><strong>Estado:</strong> {cripto.completado ? 'Completado' : 'Pendiente'}</p>
          <p><strong>ID del recurso:</strong> {cripto.id}</p>
        </div>
      ) : (
        <p style={{ color: 'red', marginTop: '20px' }}>
          El recurso solicitado no existe o el identificador es inválido.
        </p>
      )}

      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
          ← Volver al listado principal
        </Link>
      </div>
    </div>
  );
};