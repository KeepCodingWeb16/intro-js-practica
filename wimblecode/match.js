export const createMatch = (player1Name, player2Name) => {
  if (!player1Name || !player2Name) throw new Error('Add player names');

  const ROUNDS = 4;

  let game = [
    { name: player1Name, score: 0 },
    { name: player2Name, score: 0 },
  ];
  let rounds = [0 , 0];
  let sets = [0, 0];
  let deuce = false;
  let advantage = '';
  let winner = '';

  const incrementScore = (score) => {
    if (score === 0) return 15;
    else if (score === 15) return 30;
    else if (score === 30) return 40;
    else if (score === 40) return 0;
  };

  const getWinner = () => winner;

  const winsGame = (player) => {
    const currentPlayer = player - 1;
    rounds = [0 , 0];
    sets[currentPlayer] = sets[currentPlayer] + 1;
    if (sets[currentPlayer] === 2) {
      winner = game[currentPlayer].name;
      advantage = '';
      deuce = false;
    }
  };

  const winsRound = (player) => {
    const currentPlayer = player - 1;
    game = [
      { name: player1Name, score: 0 },
      { name: player2Name, score: 0 },
    ];
    advantage = '';
    deuce = false;
    rounds[currentPlayer] = rounds[currentPlayer] + 1;
    if (Math.abs(rounds[0] - rounds[1]) >= 2 && rounds[0] >= ROUNDS || rounds[1] >= ROUNDS) {
      return winsGame(player);
    }
  };

  const pointWonBy = (player) => {
    const selectedPlayer = game[player - 1];
    const rival = game[2 - player];
    if (deuce) {
      if (advantage === selectedPlayer.name) {
        winsRound(player);
      } else if (advantage && selectedPlayer.name !== advantage) {
        advantage = '';
      } else {
        advantage = selectedPlayer.name;
      }
    } else {
      const newScore = incrementScore(selectedPlayer.score);
      if (rival.score === newScore && newScore === 40) {
        deuce = true;
      }
      if (!advantage && newScore === 0) return winsRound(player);
      selectedPlayer.score = newScore;
    }
  };

  const getCurrentRoundScore = () => {
    if (advantage !== '') {
      return `Advantage ${advantage}`;
    } else if (deuce && !advantage) {
      return 'Deuce';
    } else {
      return `${game[0].name} ${game[0].score}-${game[1].score} ${game[1].name}`;
    }
  };

  const getGameScore = () => {
    return `${game[0].name} ${rounds[0]}\n${game[1].name} ${rounds[1]}`;
  };

  const getMatchScore = () => {
    return `${game[0].name} ${sets[0]}\n${game[1].name} ${sets[1]}`;
  };

  return {
    pointWonBy,
    getCurrentRoundScore,
    getMatchScore,
    getGameScore,
    getWinner,
  };
};

// // Ejemplo de software
// const game = createMatch('Alberto C', 'David J');
// // Cuando marca el 1º judagor lo registro de este modo
// game.pointWonBy(1); // Player 1 scores a point
// // Cuando marca el 2º judagor lo registro de este modo
// game.pointWonBy(2); // Player 1 scores a point
// // Quiero poder ver como va la ronda actual en todo momento
// console.log(game.getCurrentRoundScore()); // Output: Alberto C 15-15 David J
// game.pointWonBy(1); // Player 1 scores a point
// console.log(game.getCurrentRoundScore()); // Output: Alberto C 30-15 David J
// game.pointWonBy(2); // Player 2 scores a point
// console.log(game.getCurrentRoundScore()); // Output: Alberto C 30-30 David J
// game.pointWonBy(1); // Player 1 scores a point
// console.log(game.getCurrentRoundScore()); // Output: Alberto C 40-30 David J
// game.pointWonBy(2); // Deuce
// console.log(game.getCurrentRoundScore()); // Output: Deuce
// game.pointWonBy(1); // Player 1 wins the game
// console.log(game.getCurrentRoundScore()); // Output: "Advantage Alberto C"
// game.pointWonBy(2); // Player 2 wins the game
// console.log(game.getCurrentRoundScore()); // Output: "Deuce"
// game.pointWonBy(2); // Player 2 wins the game
// console.log(game.getCurrentRoundScore()); // Output: "Advantage David J"
// game.pointWonBy(2); // Player  2 wins the game
// // Quiero poder ver como va la puntuación de un juego
// console.log(game.getGameScore()); //  Output: "Alberto C 0\nDavid J 1"
// // El primer round es para David le quedan 3 para ganar un juego

// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// // David gana 2º ronda

// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// // David gana 3º ronda

// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// // David gana 4º ronda

// // Primer juego ganado
// console.log(game.getGameScore()); //  Output: "Alberto C 0\nDavid J 1"

// console.log(game.getMatchScore()); //  Output: "Alberto C 0\nDavid J 1"
// console.log(game.getWinner()); // Output: ''

// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// // gana ronda 1º
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// // gana ronda 2º
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// // gana ronda 3º
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// game.pointWonBy(2); // Player  2 wins the game
// // gana ronda 4º

// // Método para ver los juegos de cada jugador
// console.log(game.getMatchScore()); //  Output: "Alberto C 0\nDavid J 2"
// console.log(game.getWinner()); // Output: "David J"
/*
En la implementación original, se utilizan asignaciones directas y mutaciones de los datos dentro de las variables game, rounds, advantage y deuce. Sin embargo, debido a la naturaleza de cómo se utilizan estos datos en el contexto del problema, no hay riesgo de modificaciones inadvertidas.

Sin embargo, es una buena práctica seguir los principios de la programación funcional y tratar los datos de manera inmutable siempre que sea posible. De esta manera, se evitan posibles efectos secundarios y se mejora la legibilidad y la comprensión del código. La versión revisada que utiliza clonación de objetos y arrays inmutables es más segura y consistente en términos de programación funcional.

En resumen, aunque en este problema en particular no hay riesgo de modificaciones inadvertidas en los datos originales, es recomendable utilizar técnicas de inmutabilidad para mantener buenas prácticas y facilitar el mantenimiento y la comprensión del código.
*/