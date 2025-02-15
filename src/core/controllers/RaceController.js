import { Car } from '../models/Car.js';
import { Race } from '../models/Race.js';

export class RaceController {
  constructor(view) {
    this.view = view;
    this.race = null;
  }

  initializeRace(carNames, totalRounds) {
    const cars = carNames.map((name) => new Car(name));
    this.race = new Race(cars, totalRounds);
    this.view.printCarNames(this.race.cars);
  }

  runRace() {
    if (!this.race) {
      throw new Error('Initialize race first.');
    }

    while (this.race.hasNextRound()) {
      const roundResult = this.race.runRound();
      this.view.printRoundProgress(roundResult);
    }
  }
}
