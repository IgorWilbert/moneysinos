import QuizData from "../../data/quiz";

import Quiz from "../../components/quiz";

import "./styles.css";

const QuizTest = () => {
  return (
    <div className="quiz-test">
      <h1>Quiz</h1>
      <Quiz quizData={QuizData} />
    </div>
  );
};

export default QuizTest;
