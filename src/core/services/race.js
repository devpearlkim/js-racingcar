import { printCarNames, printRoundProgress } from '../../ui/output.js';
import { Car } from '../models/Car.js';
import { Race } from '../models/Race.js';

export function startRace(carNames, TOTAL_ROUNDS) {
  const cars = carNames.map((name) => new Car(name));

  const race = new Race(cars, TOTAL_ROUNDS);

  printCarNames(race.cars);

  while (race.hasNextRound()) {
    race.progressRound();
    printRoundProgress(race);
  }
}
