import { randomizer } from '../math.js';
import playGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const leftOperand = randomizer();
  const rightOperand = randomizer();
  const operator = operators[randomizer(3)];
  // const question = `${leftOperand} ${operator} ${rightOperand}`;
  if (operator === '+') {
    const question = `${leftOperand} + ${rightOperand}`;
    const correctAnswer = leftOperand + rightOperand;
    return [question, String(correctAnswer)];
  }
  if (operator === '-') {
    const question = `${leftOperand} - ${rightOperand}`;
    const correctAnswer = leftOperand - rightOperand;
    return [question, String(correctAnswer)];
  }
  const question = `${leftOperand} * ${rightOperand}`;
  const correctAnswer = leftOperand * rightOperand;
  return [question, String(correctAnswer)];
};

export default () => {
  playGame(gameRules, getQuestionAndAnswer);
};
