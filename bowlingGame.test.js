import { Game } from './bowlingGame'

let game;



beforeEach(() => {
  return game = new Game()
});

const rollMany = (totalRolls, pins) => {
  let rollCount = 1;

  while (rollCount <= totalRolls) {
    game.roll(pins);
    rollCount++;
  }
}

test('cannot get score before game is over', () => {
  expect(() => {game.getScore()}).toThrow('Game is not finished');
});

test('cannot role more than 10 frames', () => {
  expect(() => {rollMany(100, 0)}).toThrow('Game is over');
});

test('can roll a game of all gutters', () => {
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

test('can handle a strike', () => {
  game.roll(10)
  rollMany(18, 0)

  expect(game.getScore()).toEqual(10);
});

test('can handle a strike bonus', () => {
  game.roll(10)
  game.roll(3)
  game.roll(3)
  rollMany(16, 0)

  expect(game.getScore()).toEqual(22);
});

test('can handle a strike bonus with an first-roll gutter', () => {
  game.roll(10)
  game.roll(0)
  game.roll(3)
  rollMany(16, 0)

  expect(game.getScore()).toEqual(16);
});

test('can handle a strike bonus with an second-roll gutter', () => {
  game.roll(10)
  game.roll(3)
  game.roll(0)
  rollMany(16, 0)

  expect(game.getScore()).toEqual(16);
});