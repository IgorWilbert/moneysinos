import { useState } from "react";

import Radio from "@mui/material/Radio";

import "./styles.css";

const Question = ({ question, onSelect }) => {
  const [selected, setSelected] = useState(question.selectedOption);

  return (
    <div className="question">
      <div>{question.heading}</div>
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
