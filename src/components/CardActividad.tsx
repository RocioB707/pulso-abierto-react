import React from 'react';
import { ItemActividad } from '../types';
import { useFavoritosStore } from '../store/useFavoritosStore';

interface Props {
  item: ItemActividad;
}

export const CardActividad: React.FC<Props> = ({ item }) => {
  const favoritos = useFavoritosStore((state) => state.favoritos);
  const toggleFavorito = useFavoritosStore((state) => state.toggleFavorito);
  const esFavorito = favoritos.includes(item.id);

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>{item.titulo}</h3>
      <p>{item.descripcion}</p>
      <span>Estado: {item.completado ? 'Completado' : 'Pendiente'}</span>
      <div style={{ marginTop: '10px' }}>
        <button type="button" onClick={() => toggleFavorito(item.id)}>
          {esFavorito ? '★ En favoritos' : '☆ Agregar a favorito'}
        </button>
      </div>
    </div>
  );
};