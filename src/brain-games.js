import readlineSync from 'readline-sync';

const questionsCount = 3;

const brainGames = (gameDescription, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  let count = 0;
  let playerAnswer = '';
  while (count < questionsCount) {
    const [gameQuestion, gameAnswer, isRightGameInput] = game();
    do {
      console.log(`Question: ${gameQuestion}`);
      playerAnswer = readlineSync.question('Your answer: ');
    } while (!isRightGameInput(playerAnswer));
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
