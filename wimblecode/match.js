export const createMatch = (player1Name, player2Name) => {
  if (!player1Name || !player2Name) throw new Error('Add player names');

  const ROUNDS = 4;
  const MAX_ROUNDS = 7;

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
    const roundDifference = Math.abs(rounds[0] - rounds[1]);
    const maxRounds = rounds[0] === MAX_ROUNDS || rounds[1] === MAX_ROUNDS;
    if (maxRounds || roundDifference >= 2 && (rounds[0] >= ROUNDS || rounds[1] >= ROUNDS)) {
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
