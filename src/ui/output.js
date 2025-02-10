export function printCarNames(cars) {
  console.log(cars.map((car) => car.name).join(', '));
}

export function generateTrackForCar(car) {
  return '-'.repeat(car.position);
}

export function printRoundProgress(race) {
  console.log(`\nRound ${race.currentRound - 1}:`);
  race.cars.forEach((car) => {
    console.log(`${car.name}: ${generateTrackForCar(car)}`);
  });
}
