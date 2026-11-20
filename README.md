## Mejora de mantenibilidad realizada

* **Problema identificado:** El arreglo `datosIniciales` estaba definido dentro de `src/App.tsx`, mezclando datos iniciales con la configuración de rutas.
* **Cambio realizado:** Se movió `datosIniciales` a `src/data/datosIniciales.ts` y se importó en `src/App.tsx`.
* **Comprobación sin regresiones:** Se verificó en VS Code y en el navegador que compile sin errores y que las funciones principales sigan andando igual.