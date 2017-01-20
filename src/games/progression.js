import { isInteger, getRandomNumber } from '../utils';
import brainGames from '../brain-games';

const min = 1;
const max = 10;
const seqLength = 10;

const isRightGameInput = answer => isInteger(parseInt(answer, 10));

const getGame = () => {
  const difference = getRandomNumber(min, max);
  let beginElement = getRandomNumber(min, max);
  const missNumIndex = getRandomNumber(min, max) - 1;
  const generatedSeq = [];
  while (generatedSeq.length <= seqLength) {
    generatedSeq.push(beginElement);
    beginElement += difference;
  }
  const gameAnswer = generatedSeq[missNumIndex].toString();
  generatedSeq[missNumIndex] = '..';
  const gameQuestion = generatedSeq.join(' ');
  return [gameQuestion, gameAnswer, isRightGameInput];
};

export default () => {
  const gameDescription = 'What number is missing in this progression?';
  brainGames(gameDescription, getGame);
};
