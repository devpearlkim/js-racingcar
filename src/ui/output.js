export function printCars(cars) {
  console.log(cars.map((car) => car.name).join(', '));
}

export function getTrack(car) {
  return '-'.repeat(car.position);
}

export function printRoundResults(cars) {
  cars.forEach((car) => {
    console.log(`${car.name}: ${getTrack(car)}`);
  });
}
