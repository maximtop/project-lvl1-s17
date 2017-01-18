import readlineSync from 'readline-sync';

import brainEven from './brain-even';
import brainCalc from './brain-calc';
import brainGcd from './brain-gcd';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const games = ['brain-even', 'brain-calc', 'brain-gcd'];
  const index = readlineSync.keyInSelect(games, 'Which game you want to play?');
  const gameName = games[index];
  let game;
  switch (gameName) {
    case 'brain-even':
      game = brainEven;
      break;
    case 'brain-calc':
      game = brainCalc;
      break;
    case 'brain-gcd':
      game = brainGcd;
      break;
    default:
      console.log('You didn\'t choose the game');
      process.exit(0);
  }
  const gameDescription = game(true);
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  let count = 0;
  let playerAnswer = '';
  while (count < 3) {
    const [gameQuestion, gameAnswer, gameInputChecker] = game();
    console.log(`Question: ${gameQuestion}`);
    playerAnswer = readlineSync.question('Your answer: ');
    if (!gameInputChecker(playerAnswer)) {
      while (!gameInputChecker(playerAnswer)) {
        console.log(`Question: ${gameQuestion}`);
        playerAnswer = readlineSync.question('Your answer: ');
      }
    }
    if (gameAnswer === playerAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer must be "${gameAnswer}"\nLet's try again, ${name}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!!!`);
  }
};

export default brainGames;
