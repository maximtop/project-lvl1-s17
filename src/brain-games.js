import readlineSync from 'readline-sync';

import brainEven from './brain-even';
import brainCalc from './brain-calc';
import brainGcd from './brain-gcd';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const games = ['brain-even', 'brain-calc', 'brain-gcd'];
  const index = readlineSync.keyInSelect(games, 'Which game you want to play?');
  const game = games[index];
  switch (game) {
    case 'brain-even':
      brainEven();
      break;
    case 'brain-calc':
      brainCalc();
      break;
    case 'brain-gcd':
      brainGcd();
      break;
    default:
      console.log('You didn\'t choose the game');
  }
};

export default brainGames;
