export function printCarNames(cars) {
  console.log(cars.map((car) => car.name).join(', '));
}

export function drawTrack(position) {
  return '-'.repeat(position);
}

export function printRoundProgress(roundResult) {
  console.log(`\nRound ${roundResult.round}:`);
  roundResult.cars.forEach((car) => {
    console.log(`${car.name}: ${drawTrack(car.position)}`);
  });
}
