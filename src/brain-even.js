import randomNum from './utils/random-num';

const isEven = number =>
  number % 2 === 0;

const gameInputChecker = answer => answer === 'yes' || answer === 'no';

const getGame = () => {
  const num = randomNum(1, 100);
  const answer = isEven(num) ? 'yes' : 'no';
  return [num, answer];
};

const brainEven = (gameDescription = false) => {
  if (gameDescription) {
    return 'Answer "yes" if number is even otherwise answer "no"';
  }
  const [gameQuestion, gameAnswer] = getGame();
  return [gameQuestion, gameAnswer, gameInputChecker];
};

export default brainEven;
