import { useEffect, useState } from "react";

import ArrowButton from "../arrowButton";
import Button from "../button";
import FilledQuestion from "../filledQuestion";
import Question from "../question";

import "./styles.css";

const Quiz = ({ quizData }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (!quizData.map((q) => q.selectedOption).includes(-1)) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
  }, [quizData.map((q) => q.selectedOption)]);

  const onClickBackward = (i, lastIdx) => {
    if (i - 1 >= 0) {
      return i - 1;
    } else {
      return lastIdx;
    }
  };

  const getQuestionsRight = (quizData) =>
    quizData.filter(
      (q) => q.selectedOption === q.options.findIndex((o) => o.correct)
    ).length;

  const getScore = (quizData) =>
    quizData
      .filter((q) => q.selectedOption === q.options.findIndex((o) => o.correct))
      .reduce((acc, q) => {
        return acc + q.value;
      }, 0);

  const resetQuiz = (quizData) => {
    quizData.forEach((q) => (q.selectedOption = -1));
    setShowScore(false);
    setIsFinished(false);
  };

  return (
    <div className="quiz">
      {!showScore && (
        <>
          <div>
            {quizData.map(
              (question, index) =>
                index === questionIndex && (
                  <Question
                    question={question}
                    number={index + 1}
                    onSelect={(n) => {
                      quizData[index].selectedOption = n;
                    }}
                  />
                )
            )}
          </div>
          <div className="quiz-navigation">
            <ArrowButton
              isForward={false}
              onClick={() =>
                setQuestionIndex(
                  onClickBackward(questionIndex, quizData.length - 1)
                )
              }
            />
            {isFinished && (
              <Button label="Enviar Teste" onClick={() => setShowScore(true)} />
            )}
            <ArrowButton
              onClick={() =>
                setQuestionIndex((questionIndex + 1) % quizData.length)
              }
            />
          </div>
        </>
      )}
      {showScore && (
        <div>
          <h1>{`${
            getQuestionsRight(quizData) > quizData.length / 2
              ? "Parabéns!"
              : "Todo começo é difícil..."
          }`}</h1>
          <p>{`Sua pontuação foi de ${getScore(
            quizData
          )} pontos e você acertou ${getQuestionsRight(quizData)} de ${
            quizData.length
          } questões`}</p>
          <div className="quiz-result-buttons">
            <Button
              label="Tentar Novamente"
              onClick={() => resetQuiz(quizData)}
            />
            <a
              href="#/"
              style={{ textDecoration: "none" }}
              onClick={() => resetQuiz(quizData)}
            >
              <Button label="Voltar à Home" />
            </a>
          </div>
          <div>
            {quizData.map((question, index) => (
              <FilledQuestion question={question} number={index + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
