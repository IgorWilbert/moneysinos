import Radio from "@mui/material/Radio";

import "./styles.css";

const FilledQuestion = ({ question, number }) => {
  return (
    <div className="filled-question">
      <div className="filled-question-header">
        <p className="filled-question-header-number">{`Pergunta ${number}`}</p>
        <p className="filled-question-header-points">{`Vale ${question.value} pontos`}</p>
      </div>
      <p>{question.heading}</p>
      <ul className="filled-question-options-list">
        {question.options.map((option, index) => (
          <li className="filled-question-options-item">
            <Radio
              checked={question.selectedOption === index}
              disabled={true}
            />
            <p
              className={`${
                question.selectedOption === index
                  ? "filled-question-selected"
                  : ""
              } ${option.correct ? "filled-question-correct" : ""} `}
            >
              {option.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilledQuestion;
