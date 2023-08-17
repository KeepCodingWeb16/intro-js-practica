import { createMatch } from '../match';

describe('createMatch winning games and match logic', () => {
  it('player 2 should win 2 games and win the match', () => {
    const match = createMatch('Alberto', 'David');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 1');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 2');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 3');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    expect(match.getGameScore()).toEqual('Alberto 1\nDavid 3');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    expect(match.getGameScore()).toEqual('Alberto 2\nDavid 3');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    expect(match.getGameScore()).toEqual('Alberto 3\nDavid 3');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getGameScore()).toEqual('Alberto 4\nDavid 3');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getGameScore()).toEqual('Alberto 4\nDavid 4');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getGameScore()).toEqual('Alberto 4\nDavid 5');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getGameScore()).toEqual('Alberto 5\nDavid 5');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getGameScore()).toEqual('Alberto 6\nDavid 5');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getGameScore()).toEqual('Alberto 6\nDavid 6');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 1');
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 0');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 1');
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 1');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 1');
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 2');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 1');
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 3');
    expect(match.getWinner()).toEqual('');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 2');
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getWinner()).toEqual('David');
  });
});
