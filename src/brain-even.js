import readlineSync from 'readline-sync';

const isEven = number =>
  number % 2 === 0;

const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - (min + 1))) + min;

const checkAnswer = (answer, number) =>
  (isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no');

const game = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number odd otherwise answer "no"\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(name);
  let count = 0;
  let answer = '';
  while (count < 3) {
    const number = randomNum(1, 100);
    while (answer !== 'yes' || answer !== 'no') {
      console.log(`Is number: ${number} even?`);
      answer = readlineSync.question('Your answer: ');
      if (answer === 'yes' || answer === 'no') {
        break;
      }
    }
    if (checkAnswer(answer, number)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer must be ${isEven(number) ? '"yes"' : '"no"'}\nLet's try again, ${name}`);
      break;
    }
    if (count === 3) {
      console.log(`Congratulations, ${name}`);
    }
  }
};

export default game;
