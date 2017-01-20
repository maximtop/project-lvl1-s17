import { isInteger, getRandomNumber } from '../utils';
import brainGames from '../brain-games';

const min = 1;
const max = 100;

const getGcd = (num1, num2) => {
  if (num2) {
    return getGcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const isRightGameInput = answer => isInteger(parseInt(answer, 10));

const getGame = () => {
  const [num1, num2] = [getRandomNumber(min, max), getRandomNumber(min, max)];
  const gameAnswer = getGcd(num1, num2).toString();
  const gameQuestion = `${num1} ${num2}`;
  return [gameQuestion, gameAnswer, isRightGameInput];
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  return brainGames(gameDescription, getGame);
};
