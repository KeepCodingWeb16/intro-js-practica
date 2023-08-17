import { createMatch } from '../match';

describe('createMatch round tests', () => {
  it('should throw error when no players are sent', () => {
    expect(() => createMatch()).toThrow('Add player names');
  });

  it('should increment player one points and display it correctly', () => {
    const match = createMatch('Alberto', 'David');
    match.pointWonBy(1); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Alberto 15-0 David');
  });

  it('should increment player two points and display it correctly', () => {
    const match = createMatch('Alberto', 'David');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Alberto 15-15 David');
  });

  it('should display deuce when both users has score 3 times', () => {
    const match = createMatch('Alberto', 'David');
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getMatchScore()).toEqual('Alberto 0\nDavid 0');
    expect(match.getWinner()).toEqual('');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Deuce');
  });

  it('should display Advance after player 1 scores in a deuce situation', () => {
    const match = createMatch('Alberto', 'David');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    // After deuce
    match.pointWonBy(1); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Advantage Alberto');
  });

  it('should go back to deuce and display Advance after player 2 comes back from a deuce situation', () => {
    const match = createMatch('Alberto', 'David');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    // After deuce
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Deuce');
    match.pointWonBy(2); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Advantage David');
  });

  it('Player 2 games round', () => {
    const match = createMatch('Alberto', 'David');
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    // After deuce
    match.pointWonBy(1); // Player 1 scores a point
    match.pointWonBy(2); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Deuce');
    match.pointWonBy(2); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Advantage David');
    match.pointWonBy(2); // Player 1 scores a point
    expect(match.getCurrentRoundScore()).toEqual('Alberto 0-0 David');
    expect(match.getGameScore()).toEqual('Alberto 0\nDavid 1');
  });
});
