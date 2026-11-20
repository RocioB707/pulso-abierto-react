import React from 'react';
import { ItemActividad } from '../types';
import { CardActividad } from './CardActividad';

interface ListaCriptosProps {
  items: ItemActividad[];
}

export const ListaCriptos: React.FC<ListaCriptosProps> = ({ items }) => {
  if (items.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666' }}>No se encontraron resultados.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <CardActividad key={item.id} item={item} />
      ))}
    </div>
  );
};