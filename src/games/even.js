import { getRandomNumber } from '../utils';
import brainGames from '../brain-games';

const isEven = number =>
  number % 2 === 0;

const isRightGameInput = answer => answer === 'yes' || answer === 'no';

const getGame = () => {
  const gameQuestion = getRandomNumber(1, 100);
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer, isRightGameInput];
};

const brainEven = () => {
  const gameDescription = 'Answer "yes" if number is even otherwise answer "no"';
  brainGames(gameDescription, getGame);
};

export default brainEven;
