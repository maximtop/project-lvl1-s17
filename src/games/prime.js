import { getRandomNumber } from '../utils';
import brainGames from '../brain-games';

const min = 1;
const max = 100;

const isRightGameInput = answer => answer === 'yes' || answer === 'no';

const isPrime = (number) => {
  let start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
  }
  return number > 1;
};

const getGame = () => {
  const gameQuestion = getRandomNumber(min, max);
  const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer, isRightGameInput];
};

export default () => {
  const gameDescription = 'Answer "yes" if number is prime otherwise answer "no"';
  brainGames(gameDescription, getGame);
};
