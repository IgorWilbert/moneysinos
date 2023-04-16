import { useState } from "react";

import ArrowButton from "../arrowButton";
import Question from "../question";

import "./styles.css";

const Quiz = ({ quizData }) => {
  const [questionIndex, setQuestionIndex] = useState(0);

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
            index === questionIndex && <Question question={question} />
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
    </div>
  );
};

export default Quiz;
