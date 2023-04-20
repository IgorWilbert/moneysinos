import QuizData from "../../data/quiz";

import Quiz from "../../components/quiz";
import Title from "../../components/title";

import "./styles.css";

const QuizTest = () => {
  return (
    <div className="quiz-test">
      <div className="quiz-test-content">
        <Title name="Quiz" />
        <Quiz quizData={QuizData} />
      </div>
    </div>
  );
};

export default QuizTest;
