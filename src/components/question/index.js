import { useState } from "react";

import Radio from "@mui/material/Radio";

import "./styles.css";

const Question = ({ question, number, onSelect }) => {
  const [selected, setSelected] = useState(question.selectedOption);

  return (
    <div className="question">
      <p>{`Pegunta ${number}:`}</p>
      <p>{`Vale ${question.value} pontos`}</p>
      <p>{question.heading}</p>
      <ul style={{ listStyleType: "none" }}>
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
