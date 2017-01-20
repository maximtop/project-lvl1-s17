import { isInteger, getRandomNumber } from '../utils';
import brainGames from '../brain-games';

const min = 10;
const max = 10000;

const isRightGameInput = answer => isInteger(parseInt(answer, 10));

const sortArrayOfNumbers = arrayOfNumbers => arrayOfNumbers.sort((a, b) => a - b);

const getAnswer = (num) => {
  const arrayOfStrings = Array.from(num.toString());
  const arrayNum = arrayOfStrings.map(item => parseInt(item, 10));
  let sortedArray = sortArrayOfNumbers(arrayNum);
  let minNum = sortedArray[0];
  let maxNum = sortedArray[sortedArray.length - 1];
  while (maxNum - minNum > 1) {
    maxNum -= 1;
    minNum += 1;
    sortedArray[0] = minNum;
    sortedArray[sortedArray.length - 1] = maxNum;
    sortedArray = sortArrayOfNumbers(sortedArray);
    minNum = sortedArray[0];
    maxNum = sortedArray[sortedArray.length - 1];
  }
  return sortedArray.join('');
};

const getGame = () => {
  const num = getRandomNumber(min, max);
  const answer = getAnswer(num);
  const gameQuestion = `${num}`;
  const gameAnswer = `${answer}`;
  return [gameQuestion, gameAnswer, isRightGameInput];
};

export default () => {
  const gameDescription = 'Balance the given number.';
  brainGames(gameDescription, getGame);
};
