import { Car } from './core/models/Car.js';
import { printCars, printRoundResults } from './ui/output.js';
import readLineAsync from './utils/readLineAsync.js';

// 입출력 예시
async function play() {
  const input = await readLineAsync(
    '자동차 이름을 입력하세요 (쉼표로 구분해주세요) > '
  );
  const carNames = input.split(',').map((name) => name.trim());
  const cars = carNames.map((name) => new Car(name));

  // 자동차 이름 컴마로 구분하여 출력
  printCars(cars);

  console.log('실행결과');

  cars.map((car) => car.move());
  printRoundResults(cars);
}

play();
