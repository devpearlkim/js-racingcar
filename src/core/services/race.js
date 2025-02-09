import { printCars, printRoundResults } from '../../ui/output.js';
import { validateCarNames } from '../../validation.js';
import { Car } from '../models/Car.js';

export function startGame(carNames, TOTAL_ROUND) {
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
    playRound(cars, round);
    round += 1;
  }
}

export function playRound(cars, round) {
  console.log(`\nRound ${round}:`);

  cars.forEach((car) => car.move());
  printRoundResults(cars);
}
