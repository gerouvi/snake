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

export default getPairOfWordsGame;
