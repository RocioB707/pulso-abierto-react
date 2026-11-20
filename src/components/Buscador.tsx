import React, { useState } from 'react';
import { esquemaBusqueda } from '../schemas/validaciones';

interface BuscadorProps {
  busqueda: string;
  onBusquedaChange: (valor: string) => void;
  categoria: string;
  onCategoriaChange: (valor: string) => void;
}

export const Buscador: React.FC<BuscadorProps> = ({
  busqueda,
  onBusquedaChange,
  categoria,
  onCategoriaChange,
}) => {
  const [error, setError] = useState<string | null>(null);

  // Manejador del cambio en el campo de texto con validación en vivo
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    onBusquedaChange(valor);

    // Validamos usando Zod
    const resultado = esquemaBusqueda.safeParse({ busqueda: valor });
    if (!resultado.success) {
      setError(resultado.error.errors[0].message);
    } else {
      setError(null);
    }
  };

  return (
    <div style={{ marginBottom: '20px', padding: '15px', background: '#fff', borderRadius: '8px', border: '1px solid #ddd' }}>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Campo de texto (Punto 4) */}
        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="input-busqueda" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
            Buscar criptomoneda:
          </label>
          <input
            id="input-busqueda"
            type="text"
            value={busqueda}
            onChange={handleInputChange}
            placeholder="Ej: Bitcoin, Ethereum..."
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: error ? '1px solid red' : '1px solid #ccc',
              fontSize: '14px'
            }}
          />
          {/* Mensaje de error comprensible próximo al campo (Punto 5) */}
          {error && <span style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{error}</span>}
        </div>

        {/* Control de selección (Punto 4) */}
        <div>
          <label htmlFor="select-categoria" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
            Filtrar por estado:
          </label>
          <select
            id="select-categoria"
            value={categoria}
            onChange={(e) => onCategoriaChange(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '14px'
            }}
          >
            <option value="todos">Todos los estados</option>
            <option value="completado">Completado</option>
            <option value="pendiente">Pendiente</option>
          </select>
        </div>
      </form>
    </div>
  );
};