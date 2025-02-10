export function printCars(cars) {
  console.log(cars.map((car) => car.name).join(', '));
}

export function getTrack(car) {
  return '-'.repeat(car.position);
}

export function printRoundResults(race) {
  console.log(`\nRound ${race.currentRound - 1}:`);
  race.cars.forEach((car) => {
    console.log(`${car.name}: ${getTrack(car)}`);
  });
}
