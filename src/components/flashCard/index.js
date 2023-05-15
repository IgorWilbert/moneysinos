import { useState } from "react";

import ArrowButton from "../arrowButton";

import FlipButton from "../flipButton";

import "./styles.css";

const FlashCard = ({
  question,
  answer,
  imageUrl,
  onClickForward,
  onClickBackward,
  references,
}) => {
  const [faceUp, setFaceUp] = useState(true);

  return (
    <div className="flash-card">
      <div className="flash-card--image">
        <img className="flash-card--image-style" src={imageUrl}></img>
      </div>

      <div className="flash-card--content">
        <div className="flash-card--functions">
          <div className="flash-card--text">
            {faceUp && (
              <>
                <h2 className="flash-card--title">Pergunta</h2>
                <p className="flash-card--description">{question}</p>
              </>
            )}
            {!faceUp && (
              <>
                <h2 className="flash-card--title">Resposta</h2>
                <p className="flash-card--description">{answer}</p>
                <div className="flash-card--references">
                  <p>Fontes:</p>
                  {references.map((r) => (
                    <a className="flash-card--link" href={r.url}>
                      {r.name}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flash-card--button">
            <ArrowButton isForward={false} onClick={onClickBackward} />
            <FlipButton onClick={() => setFaceUp(!faceUp)} />
            <ArrowButton onClick={onClickForward} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
