import randomNum from './utils/random-num';
import isInt from './utils/is-int';

const max = 100;
const min = 1;

const getGcd = (num1, num2) => {
  if (num2) {
    return getGcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const gameInputChecker = answer => isInt(parseInt(answer, 10));

const getGame = () => {
  const [num1, num2] = [randomNum(min, max), randomNum(min, max)];
  const answer = getGcd(num1, num2).toString();
  return [num1, num2, answer];
};

const brainGcd = (getDescription = false) => {
  if (getDescription) {
    return 'Find the greatest common divisor of given numbers.';
  }
  const [num1, num2, gameAnswer] = getGame();
  const gameQuestion = `${num1} ${num2}`;
  return [gameQuestion, gameAnswer, gameInputChecker];
};

export default brainGcd;
