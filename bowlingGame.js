export class Game {
  constructor() {
    this.score = 0;
  }

  roll(pinsStruck) {
    this.score += pinsStruck;    
  }

  getScore() {
    return this.score
  }
}

