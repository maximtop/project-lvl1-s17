import readlineSync from 'readline-sync';
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

const getGame = () => {
  const [num1, num2] = [randomNum(min, max), randomNum(min, max)];
  const answer = getGcd(num1, num2);
  return [num1, num2, answer];
};

const brainGcd = () => {
  console.log('Welcome to the Brain Games!\n' +
    'Find the greatest common divisor of given numbers.\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  let count = 0;
  let playerAnswer = '';
  while (count < 3) {
    const [num1, num2, taskAnswer] = getGame();
    console.log(`Answer me what is GCD of these two numbers: ${num1} ${num2}`);
    playerAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    if (!isInt(playerAnswer)) {
      while (!isInt(playerAnswer)) {
        console.log(`Answer me what is GCD of these two numbers: ${num1} ${num2}`);
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

export default brainGcd;
