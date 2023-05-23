import { randomizer } from '../math.js';
import game from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = randomizer();
  const question = `${number}`;
  if (number === 1) {
    const correctAnswer = 'no';
    return [question, correctAnswer];
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      const correctAnswer = 'no';
      return [question, correctAnswer];
    }
  }
  const correctAnswer = 'yes';
  return [question, correctAnswer];
};

export default () => {
  game(gameRules, getQuestionAndAnswer);
};