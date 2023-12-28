import { crearCatalogo } from "./catalogo.js";

// Crear un catálogo
const miCatalogo = crearCatalogo();

// Ejemplo de uso
miCatalogo.agregarCancion("Canción 1", "Rock", 4);
miCatalogo.agregarCancion("Canción 2", "Pop", 3);
miCatalogo.listarCanciones();
miCatalogo.buscarPorGenero("Rock");
miCatalogo.calcularPromedioDuracion();
