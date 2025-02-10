import { printCars, printRoundResults } from '../../ui/output.js';
import { validateCarNames } from '../../validation.js';
import { Car } from '../models/Car.js';
import { Race } from '../models/Race.js';

export function startRace(carNames, TOTAL_ROUNDS) {
  try {
    validateCarNames(carNames);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  const cars = carNames.map((name) => new Car(name));

  const race = new Race(cars, TOTAL_ROUNDS);

  printCars(race.cars);

  while (race.hasNextRound()) {
    race.progressRound();
    printRoundResults(race);
  }
}
