import { TOTAL_ROUND } from './constants.js';
import { startGame } from './core/services/race.js';
import readLineAsync from './utils/readLineAsync.js';

// 입출력 예시
async function play() {
  const input = await readLineAsync(
    '자동차 이름을 입력하세요 (쉼표로 구분해주세요) > '
  );
  const carNames = input.split(',').map((name) => name.trim());
  // TODO 자동차 이름 유효성 검사 로직 추가

  startGame(carNames, TOTAL_ROUND);
}

play();
