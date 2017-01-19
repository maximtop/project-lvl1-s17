import { isInteger, getRandomNumber } from '../utils';
import brainGames from '../brain-games';

const max = 10;
const min = 1;

const getRandomOperator = () => {
  const operators = ['+', '-', '*', '/'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const isRightGameInput = answer => isInteger(parseInt(answer, 10));

const getAnswer = (num1, num2, sign) => {
  let answer;
  if (sign === '+') {
    answer = num1 + num2;
  } else if (sign === '-') {
    answer = num1 - num2;
  } else if (sign === '*') {
    answer = num1 * num2;
  } else if (sign === '/') {
    answer = num1 / num2;
  }
  return answer;
};

const getGame = () => {
  let [num1, num2] = [getRandomNumber(min, max), getRandomNumber(min, max)];
  let sign = getRandomOperator();
  let answer = getAnswer(num1, num2, sign);
  while (!isInteger(answer)) {
    [num1, num2] = [getRandomNumber(min, max), getRandomNumber(min, max)];
    sign = getRandomOperator();
    answer = getAnswer(num1, num2, sign);
  }
  const gameQuestion = `${num1} ${sign} ${num2}`;
  const gameAnswer = `${answer}`;
  return [gameQuestion, gameAnswer, isRightGameInput];
};

const brainCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  brainGames(gameDescription, getGame);
};

export default brainCalc;
