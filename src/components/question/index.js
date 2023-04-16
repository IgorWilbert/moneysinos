import { useState } from "react";

import Radio from "@mui/material/Radio";

import "./styles.css";

const Question = ({ question }) => {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="question">
      <div>{question.heading}</div>
      <ul style={{ listStyleType: "none" }}>
        {question.options.map((option, index) => (
          <li className="question-options-item">
            <Radio
              checked={selected === index}
              onChange={() => setSelected(index)}
            />
            <p>{option.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
