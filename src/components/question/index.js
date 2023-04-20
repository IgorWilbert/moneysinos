import { useState } from "react";

import Radio from "@mui/material/Radio";

import "./styles.css";

const Question = ({ question, number, onSelect }) => {
  const [selected, setSelected] = useState(question.selectedOption);

  return (
    <div className="question">
      <div className="question-header">
        <p className="question-header-number">{`Pergunta ${number}`}</p>
        <p className="question-header-points">{`Vale ${question.value} pontos`}</p>
      </div>
      <p>{question.heading}</p>
      <ul className="question-options-list">
        {question.options.map((option, index) => (
          <li className="question-options-item">
            <Radio
              checked={selected === index}
              onChange={() => {
                setSelected(index);
                onSelect(index);
              }}
            />
            <p>{option.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
