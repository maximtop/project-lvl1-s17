import { getRandomNumber } from '../utils';
import brainGames from '../brain-games';

const min = 1;
const max = 100;

const isEven = number =>
  number % 2 === 0;

const isRightGameInput = answer => answer === 'yes' || answer === 'no';

const getGame = () => {
  const gameQuestion = getRandomNumber(min, max);
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer, isRightGameInput];
};

export default () => {
  const gameDescription = 'Answer "yes" if number is even otherwise answer "no"';
  brainGames(gameDescription, getGame);
};
