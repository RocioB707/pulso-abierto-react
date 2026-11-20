import { z } from 'zod';

// Definimos el esquema de validación con Zod para los controles de consulta
export const esquemaBusqueda = z.object({
  busqueda: z
    .string()
    .trim()
    .min(2, { message: 'El término de búsqueda debe tener al menos 2 caracteres.' }),
});