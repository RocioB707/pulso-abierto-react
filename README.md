# Pulso Abierto

Aplicación web desarrollada en React y TypeScript para consultar en vivo información de criptomonedas (mediante la API de CoinGecko), buscar por nombre, filtrar por estado y gestionar favoritos.

## Tecnologías principales

* React
* TypeScript
* Vite
* React Router
* Zustand
* Vitest y Testing Library

## Instalación de dependencias

```bash
npm install
## Ejecucion en desarrollo 
npm run dev
## Ejecucion de pruebas 
npm run test
## Generar el build 
npm run build 
##Ccomprobar el build mediante preview 
npm run preview 
## Mejora de mantenibilidad realizada

* **Problema identificado:** El arreglo `datosIniciales` estaba definido dentro de `src/App.tsx`, mezclando datos iniciales con la configuración de rutas.
* **Cambio realizado:** Se movió `datosIniciales` a `src/data/datosIniciales.ts` y se importó en `src/App.tsx`.
* **Comprobación sin regresiones:** Se verificó en VS Code y en el navegador que compile sin errores y que las funciones principales sigan andando igual.
https://pulso-abierto-react-sigma.vercel.app/
