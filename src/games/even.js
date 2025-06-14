import getStart from '../index.js';
import randomNum from "../randomNum.js";

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = randomNum(0, 100);

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number;

  return [question, correctAnswer];
};
export default () => getStart(rule, generateRound);