import { crearCatalogo } from '../catalogo';

describe('crearCatalogo', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  it('debería crear un catálogo vacío', () => {
    const miCatalogo = crearCatalogo();
    miCatalogo.listarCanciones();
    expect(consoleSpy).toHaveBeenCalledWith('No hay canciones en el catálogo.');
  });

  it('Agregar canciones al catálogo', () => {
    const miCatalogo = crearCatalogo();
    miCatalogo.agregarCancion('Canción 1', 'Rock', 4);
    miCatalogo.agregarCancion('Canción 2', 'Pop', 3);
    miCatalogo.listarCanciones();
    expect(consoleSpy).toHaveBeenCalledWith('Canciones en el catálogo:');
    expect(consoleSpy).toHaveBeenCalledWith('[1] Nombre: Canción 1, Género: Rock, Duración: 4 minutos');
    expect(consoleSpy).toHaveBeenCalledWith('[2] Nombre: Canción 2, Género: Pop, Duración: 3 minutos');
  });

  it('Buscar canciones por género', () => {
    const miCatalogo = crearCatalogo();
    miCatalogo.agregarCancion('Canción 1', 'Rock', 4);
    miCatalogo.agregarCancion('Canción 2', 'Pop', 3);
    miCatalogo.agregarCancion('Canción 3', 'Rock', 5);
    miCatalogo.buscarPorGenero('Rock');
    expect(consoleSpy).toHaveBeenCalledWith('Canciones del género "Rock":');
    expect(consoleSpy).toHaveBeenCalledWith('[1] Nombre: Canción 1, Duración: 4 minutos');
    expect(consoleSpy).toHaveBeenCalledWith('[2] Nombre: Canción 3, Duración: 5 minutos');
  });

  it('Calcular promedio de duración', () => {
    const miCatalogo = crearCatalogo();
    miCatalogo.agregarCancion('Canción 1', 'Rock', 4);
    miCatalogo.agregarCancion('Canción 2', 'Pop', 3);
    miCatalogo.agregarCancion('Canción 3', 'Rock', 5);
    miCatalogo.calcularPromedioDuracion();
    expect(consoleSpy).toHaveBeenCalledWith('El promedio de duración de las canciones en el catálogo es: 4.00 minutos.');
  });
});
