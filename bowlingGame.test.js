import { Game } from './bowlingGame'

let game;

beforeEach(() => {
  return game = new Game()
});

const rollMany = (totalRolls, pins) => {
  let rollCount = 1;

  while(rollCount <= totalRolls) {
    game.roll(pins);
    rollCount++;
  }
}

test('making game instance does not throw', () => {
  expect(() => { const mockGame = new Game() }).not.toThrow();
});

test('can roll a game of all spares', () => {  
  rollMany(20, 0)

  expect(game.getScore()).toEqual(0);
});

test('can roll a game of all 1s', () => {
  rollMany(20, 1)

  expect(game.getScore()).toEqual(20);
});


test('can handle a spare', () => {
  game.roll(5)
  game.roll(5)
  rollMany(18, 0)

  expect(game.getScore()).toEqual(10);
});


test('can handle a spare bonus', () => {
  game.roll(5)
  game.roll(5)
  game.roll(3)
  rollMany(17, 0)

  expect(game.getScore()).toEqual(16);
});
