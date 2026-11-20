// src/services/api.ts

export interface CriptoApi {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
}

export const obtenerCriptomonedas = async (): Promise<CriptoApi[]> => {
  try {
    const respuesta = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    );
    
    if (!respuesta.ok) {
      throw new Error('Error al obtener los datos de la API de CoinGecko');
    }

    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error('Error en el servicio:', error);
    throw error;
  }
};