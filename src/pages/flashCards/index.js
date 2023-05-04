import { useState } from "react";

import FlashCardsData from "../../data/flashCards";

import FlashCard from "../../components/flashCard";
import Title from "../../components/title";

import "./styles.css";

const FlashCards = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const onClickBackward = (i, lastIdx) => {
    if (i - 1 >= 0) {
      return i - 1;
    } else {
      return lastIdx;
    }
  };

  return (
    <div className="flash-cards">
      <Title name="Flash Cards" />
      <div>
        {FlashCardsData.map((card, index) => (
          <>
            {index === cardIndex && (
              <FlashCard
                imageUrl={card.imageUrl}
                question={card.question}
                answer={card.answer}
                onClickForward={() =>
                  setCardIndex((cardIndex + 1) % FlashCardsData.length)
                }
                onClickBackward={() =>
                  setCardIndex(
                    onClickBackward(cardIndex, FlashCardsData.length - 1)
                  )
                }
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default FlashCards;
