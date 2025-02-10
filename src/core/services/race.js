import { printCars, printRoundResults } from '../../ui/output.js';
import { validateCarNames } from '../../validation.js';
import { Car } from '../models/Car.js';

export function startRace(carNames, TOTAL_ROUND) {
  try {
    validateCarNames(carNames);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  const cars = carNames.map((name) => new Car(name));
  printCars(cars);

  let round = 1;

  while (round <= TOTAL_ROUND) {
    progressRound(cars, round);
    round += 1;
  }
}

export function progressRound(cars, round) {
  console.log(`\nRound ${round}:`);

  cars.forEach((car) => car.move());
  printRoundResults(cars);
}
