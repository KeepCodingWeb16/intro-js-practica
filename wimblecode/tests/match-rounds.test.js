import { createMatch } from '../match';

describe('createMatch winning rounds logic', () => {
  it('Player 1 should win a 2 rounds', () => {
    const match = createMatch('Alberto', 'David');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Alberto 0-0 David');
    expect(match.getGameScore()).toEqual('Alberto 1\nDavid 0');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Alberto 0-0 David');
    expect(match.getGameScore()).toEqual('Alberto 2\nDavid 0');
  });

  it('Player 2 should win a 2 rounds', () => {
    const match = createMatch('Alberto', 'David');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Alberto 0-0 David');
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 1');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Alberto 0-0 David');
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 2');
  });

  it('Player 1 should not win a game if round score is 4-3', () => {
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
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getGameScore()).toEqual('Alberto 3\nDavid 4');
  });

  it('Player 2 should win a game if round score is 3-5', () => {
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
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getGameScore()).toEqual('Alberto 3\nDavid 4');
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    match.pointWonBy(2); // Player 2 scores a point
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 1');
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 0');
  });

  it('Player 1 should win a game if round score is 7-6', () => {
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
  });
});
