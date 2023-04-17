import { useEffect, useState } from "react";

import ArrowButton from "../arrowButton";
import Question from "../question";

import "./styles.css";

const Quiz = ({ quizData }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

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

  return (
    <div className="quiz">
      <div>
        {quizData.map(
          (question, index) =>
            index === questionIndex && (
              <Question
                question={question}
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
        <ArrowButton
          onClick={() =>
            setQuestionIndex((questionIndex + 1) % quizData.length)
          }
        />
      </div>
      {isFinished && <h1>DONE!!!!!</h1>}
    </div>
  );
};

export default Quiz;
