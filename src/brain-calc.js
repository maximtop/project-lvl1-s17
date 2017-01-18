import randomNum from './utils/random-num';
import isInt from './utils/is-int';

const max = 10;
const min = 1;

const randSign = () => {
  const operators = ['+', '-', '*', '/'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const gameInputChecker = answer => isInt(parseInt(answer, 10));

const getAnswer = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case ('*'):
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return undefined;
  }
};

const getGame = () => {
  let [num1, num2, sign] = [randomNum(min, max), randomNum(min, max), randSign()];
  let answer = getAnswer(num1, num2, sign);
  while (!isInt(answer)) {
    [num1, num2, sign] = [randomNum(min, max), randomNum(min, max), randSign()];
    answer = getAnswer(num1, num2, sign);
  }
  return [num1, sign, num2, answer];
};

const brainCalc = (getDescription = false) => {
  if (getDescription) {
    return 'What is the result of the expression?';
  }
  const [num1, sign, num2, answer] = getGame();
  const gameQuestion = `${num1} ${sign} ${num2}`;
  const gameAnswer = answer.toString();
  return [gameQuestion, gameAnswer, gameInputChecker];
};

export default brainCalc;
