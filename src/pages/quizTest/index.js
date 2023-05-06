import QuizData from "../../data/quiz";
import Utils from "../../data/utils";

import Quiz from "../../components/quiz";
import Title from "../../components/title";

import "./styles.css";

const QuizTest = () => {
  const RandomQuizData = QuizData.map((question) => {
    question.options = Utils.shuffle(question.options);

    return question;
  });

  return (
    <div className="quiz-test">
      <div className="quiz-test-content">
        <Title name="Quiz" />
        <Quiz quizData={RandomQuizData} />
      </div>
    </div>
  );
};

export default QuizTest;
