import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritosState {
  favoritos: number[];
  toggleFavorito: (id: number) => void;
  esFavorito: (id: number) => boolean;
}

export const useFavoritosStore = create<FavoritosState>()(
  persist(
    (set, get) => ({
      favoritos: [],
      toggleFavorito: (id) => {
        const actuales = get().favoritos;
        const existe = actuales.includes(id);
        set({
          favoritos: existe
            ? actuales.filter((itemId) => itemId !== id)
            : [...actuales, id],
        });
      },
      esFavorito: (id) => get().favoritos.includes(id),
    }),
    {
      name: 'pulso-abierto-favoritos',
    }
  )
);