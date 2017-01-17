import readlineSync from 'readline-sync';
import randomNum from './utils/randomNum';

const max = 10;
const min = 1;

const randSign = () => {
  const operators = ['+', '-', '*', '/'];
  return operators[Math.floor(Math.random() * operators.length)];
};

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

const isInt = data => data === parseInt(data, 10);

const getGame = () => {
  let [num1, num2, sign] = [randomNum(min, max), randomNum(min, max), randSign()];
  let answer = getAnswer(num1, num2, sign);
  while (!isInt(answer)) {
    [num1, num2, sign] = [randomNum(min, max), randomNum(min, max), randSign()];
    answer = getAnswer(num1, num2, sign);
  }
  return [num1, sign, num2, answer];
};

const brainCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  let count = 0;
  let playerAnswer = '';
  while (count < 3) {
    const [num1, sign, num2, taskAnswer] = getGame();
    console.log(`Give me answer of this expression: ${num1} ${sign} ${num2} = ...`);
    playerAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    if (!isInt(playerAnswer)) {
      while (!isInt(playerAnswer)) {
        console.log(`Give me answer of this expression: ${num1} ${sign} ${num2} = ...`);
        playerAnswer = parseInt(readlineSync.question('Your answer: '), 10);
      }
    }
    if (taskAnswer === playerAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer must be ${taskAnswer}\nLet's try again, ${name}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}. You answered ${count} answers correct`);
  }
};

export default brainCalc;
