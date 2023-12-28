
export const crearCatalogo = () => {
  let catalogo = [];

  const agregarCancion = (nombre, genero, duracion) => {
    const cancion = {
      nombre,
      genero,
      duracion
    };
    catalogo.push(cancion);
    console.log(`Canción "${nombre}" agregada al catálogo.`);
  };

  const listarCanciones = () => {
    if (catalogo.length === 0) {
      console.log('No hay canciones en el catálogo.');
    } else {
      console.log('Canciones en el catálogo:');
      catalogo.forEach((cancion, index) => {
        console.log(`[${index + 1}] Nombre: ${cancion.nombre}, Género: ${cancion.genero}, Duración: ${cancion.duracion} minutos`);
      });
    }
  };

  const buscarPorGenero = (genero) => {
    const cancionesPorGenero = catalogo.filter(cancion => cancion.genero === genero);

    if (cancionesPorGenero.length === 0) {
      console.log(`No hay canciones del género "${genero}" en el catálogo.`);
    } else {
      console.log(`Canciones del género "${genero}":`);
      cancionesPorGenero.forEach((cancion, index) => {
        console.log(`[${index + 1}] Nombre: ${cancion.nombre}, Duración: ${cancion.duracion} minutos`);
      });
    }
  };

  const calcularPromedioDuracion = () => {
    if (catalogo.length === 0) {
      console.log('No se puede calcular el promedio de duración, el catálogo está vacío.');
    } else {
      const duraciones = catalogo.map(cancion => cancion.duracion);
      const promedio = duraciones.reduce((acc, duracion) => acc + duracion, 0) / duraciones.length;
      console.log(`El promedio de duración de las canciones en el catálogo es: ${promedio.toFixed(2)} minutos.`);
    }
  };

  return {
    agregarCancion,
    listarCanciones,
    buscarPorGenero,
    calcularPromedioDuracion
  };
};
