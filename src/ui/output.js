export const RaceView = {
  printCarNames(cars) {
    console.log(cars.map((car) => car.name).join(', '));
  },

  drawTrack(position) {
    return '-'.repeat(position);
  },

  printRoundProgress(roundResult) {
    console.log(`\nRound ${roundResult.round}:`);
    roundResult.cars.forEach((car) => {
      console.log(`${car.name}: ${this.drawTrack(car.position)}`);
    });
  },
};
