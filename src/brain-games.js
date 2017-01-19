import readlineSync from 'readline-sync';

const brainGames = (gameDescription, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  let count = 0;
  let playerAnswer = '';
  while (count < 3) {
    const [gameQuestion, gameAnswer, isRightGameInput] = game();
    console.log(`Question: ${gameQuestion}`);
    playerAnswer = readlineSync.question('Your answer: ');
    if (!isRightGameInput(playerAnswer)) {
      while (!isRightGameInput(playerAnswer)) {
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
