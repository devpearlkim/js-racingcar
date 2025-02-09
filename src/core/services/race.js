export function startGame(carNames, TOTAL_ROUND) {
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
