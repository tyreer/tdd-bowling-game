export class Game {
  constructor() {
    this.rolls = [];
  }

  isFirstRoll(rollIndex) { 
   return rollIndex % 2 === 0;
  }

  roll(pinsStruck) {
    if (this.rolls.length === 20) {throw 'Game is over'}
    this.rolls.push(pinsStruck);

    const isStrike = this.isFirstRoll(this.rolls.length - 1) && pinsStruck === 10
    
    if(isStrike) {
      this.rolls.push(0);
    }
  }

  isSpareBonus(rollIndex) {
    
    const prevFrameSpare = (this.rolls[rollIndex - 2] + this.rolls[rollIndex - 1]) === 10;
    return this.isFirstRoll(rollIndex) && prevFrameSpare;    
  }

  getScore() {
    if (this.rolls.length < 20) {throw 'Game is not finished'}

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

