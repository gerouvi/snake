import { useEffect, useMemo, useState } from 'react';
import { DATA } from '../constants/data';

const getPairOfWordsGame = (data) => {
  const indexRandom = Math.floor(Math.random() * data.length);
  let indexRandom2;

  do {
    indexRandom2 = Math.floor(Math.random() * data.length);
  } while (indexRandom === indexRandom2);

  const words = data[indexRandom];
  const wordsFake = data[indexRandom2];

  const languages = Object.keys(words);

  const indexAnswer = Math.floor(Math.random() * 2);
  const indexQuestion = indexAnswer ? 0 : 1;

  const languageAnswer = languages[indexAnswer];
  const languageQuestion = languages[indexQuestion];

  const randomColorAnswerCorrect = Math.floor(Math.random() * 2);

  const correctColor = randomColorAnswerCorrect ? 'blue' : 'green';

  const wrongColor = randomColorAnswerCorrect ? 'green' : 'blue';

  return {
    question: words[languageQuestion],
    correctAnswer: words[languageAnswer],
    wrongAnswer: wordsFake[languageAnswer],
    correctColor,
    wrongColor,
  };
};

const useGameOpt = () => {
  const [gameOpt, setGameOpt] = useState({
    question: undefined,
    correctAnswer: undefined,
    wrongAnswer: undefined,
    correctColor: undefined,
    result: undefined,
    nextGame: 1,
  });

  const setNextQuestion = () => {
    setGameOpt((prev) => ({ ...prev, nextGame: prev.nextGame + 1 }));
  };

  const setNewQuestion = () => {
    const { question, correctAnswer, wrongAnswer, correctColor, wrongColor } =
      getPairOfWordsGame(DATA);

    setGameOpt((prev) => ({
      question,
      correctAnswer,
      wrongAnswer,
      correctColor,
      wrongColor,
      result: undefined,
      randomNumber: Math.floor(Math.random() * 2),
      nextGame: prev.nextGame,
    }));
  };

  useEffect(() => {
    setNewQuestion();
  }, [gameOpt.nextGame]);

  return {
    gameOpt,
    setNextQuestion,
    setNewQuestion,
  };
};

export default useGameOpt;
