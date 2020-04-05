export class Game {
  constructor() {
    this.rolls = [];
  }

  roll(pinsStruck) {
    this.rolls.push(pinsStruck);
  }

  isPrevFrameStrike(rollIndex) {
    return this.rolls[rollIndex - 1] === 10 || this.rolls[rollIndex - 2] === 10;
  }

  arePrevFramesStrikes(rollIndex) {
    return this.rolls[rollIndex - 1] === 10 && this.rolls[rollIndex - 2] === 10;
  }

  isSpareBonus(rollIndex) {
    const prevFrameSpare = (this.rolls[rollIndex - 2] + this.rolls[rollIndex - 1]) === 10;
    return prevFrameSpare 
  }

  isNotFinalFrame(rollIndex) { 
    return rollIndex !== this.rolls.length-1 && rollIndex !== this.rolls.length-2 && rollIndex !== this.rolls.length-3;
  }

  getScore() {
    let score = 0;

    score = this.rolls.reduce((acc, cur, rollIndex) => {

      if (this.arePrevFramesStrikes(rollIndex) && this.isNotFinalFrame(rollIndex)) {
        return acc + cur * 3;
      }

      if (this.isPrevFrameStrike(rollIndex) || this.isSpareBonus(rollIndex)) {
        return acc + cur * 2;
      }

      return acc + cur;
    })
    return score;
  }
}

