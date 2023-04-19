import { useEffect, useState } from "react";

import ArrowButton from "../arrowButton";
import Button from "../button";
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
          <div className="question-navigation">
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
          <h1>Parabéns!</h1>
          <p>{`Sua pontuação foi de ${getScore(
            quizData
          )} e você acertou ${getQuestionsRight(quizData)} de ${
            quizData.length
          } questões`}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
