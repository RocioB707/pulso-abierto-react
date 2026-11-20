import React, { useState, useEffect } from 'react';
import { Buscador } from '../components/Buscador';
import { ListaCriptos } from '../components/ListaCriptos';
import { obtenerCriptomonedas, CriptoApi } from '../services/api';
import { ItemActividad } from '../types';
import { Link } from 'react-router-dom';

export const PaginaConsulta: React.FC = () => {
  const [criptos, setCriptos] = useState<ItemActividad[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [errorApi, setErrorApi] = useState<string | null>(null);

  const [busqueda, setBusqueda] = useState<string>('');
  const [categoria, setCategoria] = useState<string>('todos');

  // Llamada a la API al montar el componente (Punto 7)
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setCargando(true);
        const datosRemotos = await obtenerCriptomonedas();
        
        // Mapeamos los datos de la API al formato ItemActividad que veníamos usando
        const adaptados: ItemActividad[] = datosRemotos.map((item, index) => ({
          id: index + 1,
          titulo: item.name,
          descripcion: `Símbolo: ${item.symbol.toUpperCase()} - Precio: $${item.current_price} USD`,
          completado: item.current_price > 1000 // Condición de ejemplo para el estado
        }));

        setCriptos(adaptados);
        setErrorApi(null);
      } catch (error) {
        setErrorApi('No se pudieron cargar los datos de la API. Verifica tu conexión.');
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  const resultadosFiltrados = criptos.filter((item) => {
    const coincideTexto = item.titulo.toLowerCase().includes(busqueda.toLowerCase());
    if (categoria === 'completado') return coincideTexto && item.completado;
    if (categoria === 'pendiente') return coincideTexto && !item.completado;
    return coincideTexto;
  });

  if (cargando) {
    return <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>Cargando criptomonedas desde CoinGecko...</div>;
  }

  if (errorApi) {
    return <div style={{ padding: '40px', textAlign: 'center', color: 'red', fontFamily: 'sans-serif' }}>{errorApi}</div>;
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Proyecto Pulso - Actividad 2</h1>
      <p style={{ color: '#555' }}>Consulta en vivo con API de CoinGecko y React Router</p>

      <Buscador 
        busqueda={busqueda} 
        onBusquedaChange={setBusqueda} 
        categoria={categoria}
        onCategoriaChange={setCategoria}
      />

      <ListaCriptos items={resultadosFiltrados} />
    </div>
  );
};