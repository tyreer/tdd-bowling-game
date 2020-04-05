export class Game {
  constructor() {
    this.rolls = Array(20).fill(0);
    this.currentRole = 0;
  }

  roll(pinsStruck) {
    this.rolls[this.currentRole] = pinsStruck;
    this.currentRole++;
  }

  isSpareBonus(rollIndex) {
    const isFirstRoll = rollIndex % 2 === 0;
    const prevFrameSpare = (this.rolls[rollIndex - 2] + this.rolls[rollIndex - 1]) === 10;
    return isFirstRoll && prevFrameSpare;    
  }

  getScore() {
    let score = 0;
    score = this.rolls.reduce((acc, cur, rollIndex) => {
      if (this.isSpareBonus(rollIndex)) {
        return acc + cur * 2
      }
      return acc + cur
    })
    return score
  }
}

