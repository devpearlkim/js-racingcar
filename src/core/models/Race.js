export class Race {
  cars;
  totalRounds;
  currentRound = 1;

  constructor(cars, rounds) {
    if (!Array.isArray(cars) || cars.length === 0) {
      throw new Error('At least one car must be provided');
    }

    this.cars = cars;
    this.totalRounds = rounds;
  }

  hasNextRound() {
    return this.currentRound <= this.totalRounds;
  }

  progressRound() {
    this.cars.forEach((car) => car.move());
    this.currentRound += 1;
  }
}
