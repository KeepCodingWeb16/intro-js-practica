import { createMatch } from './match.js';

/**
 * Funcion que se ejecuta hasta que tenemos un jugador ganador
 * @param {string} jugador1 nombre jugador 1
 * @param {string} jugador2 nombre jugador 2
 * @returns nombre del jugador ganador de un partido
 */
export const getWinner = (jugador1, jugador2) => {
  let winner = '';
  const game = createMatch(jugador1, jugador2);
  while (!winner) {
    const randomPoint = Math.floor(Math.random() * 2) + 1;
    game.pointWonBy(randomPoint);
    console.log(`

Partido ${jugador1} vs ${jugador2}
Juegos ganados (Se necesitas 2 para ganar el partido):
${game.getMatchScore()}

Juego actual (Se necesitas 4 y diferencia de 2 para ganar un juego)
${game.getGameScore()}

Ronda en curso:
${game.getCurrentRoundScore()}
`);
    winner = game.getWinner();
  }
  return winner;
}

/**
 * Muestra por pantalla el desarrollo del torneo
 * @param {string[]} jugadores nombre de los jugadores
 */
export const tournament = (jugadores) => {
  if (jugadores.length !== 4) {
    console.log('El número de jugadores debe ser 8.');
    return;
  }

  let ronda = 1;
  let ganadores = jugadores;

  while (ganadores.length > 1) {
    console.log(`Ronda ${ronda}:`);
    const enfrentamientos = [];

    for (let i = 0; i < ganadores.length; i += 2) {
      const jugador1 = ganadores[i];
      const jugador2 = ganadores[i + 1];
      const ganador = getWinner(jugador1, jugador2);

      enfrentamientos.push(ganador);
      console.log(`${jugador1} vs ${jugador2} => Ganador: ${ganador}`);
    }

    ganadores = enfrentamientos;
    ronda++;
  }

  console.log(`Ganador final: ${ganadores[0]}`);
}
