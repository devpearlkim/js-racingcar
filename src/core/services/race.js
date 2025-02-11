import { printCarNames, printRoundProgress } from '../../ui/output.js';
import { Car } from '../models/Car.js';
import { Race } from '../models/Race.js';

export function startRace(carNames, totalRounds) {
  const cars = carNames.map((name) => new Car(name));
  const race = new Race(cars, totalRounds);

  printCarNames(race.cars);

  while (race.hasNextRound()) {
    const roundResult = race.runRound();
    printRoundProgress(roundResult);
  }
}
