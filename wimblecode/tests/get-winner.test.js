import { getWinner } from '../tournament';

test('getWinner match', () => {
  const log = jest.spyOn(console, 'log').mockImplementation(() => {});
  const players = ['Alberto', 'David'];
  const winner = getWinner(players[0], players[1]);
  expect(players.includes(winner)).toBeTruthy();
  expect(log).toHaveBeenCalled();
});
