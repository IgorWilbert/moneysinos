import { useState } from "react";

import FlashCard from "../../components/flashCard";

import "./styles.css";

const FlashCardsData = [
  {
    imageUrl: "https://source.unsplash.com/random/300×300",
    question: "Qual é o nome da taxa que mede o valor da inflação no Brasil?",
    answer:
      "O nome da taxa que mede a inflação no Brasil é Índice Nacional de Preços ao Consumidor Amplo (IPCA)",
  },
  {
    imageUrl: "https://source.unsplash.com/random/300×300",
    question: "texto da pergunta 2",
    answer: "texto da resposta 2",
  },
  {
    imageUrl: "https://source.unsplash.com/random/300×300",
    question: "texto da pergunta 3",
    answer: "texto da resposta 3",
  },
  {
    imageUrl: "https://source.unsplash.com/random/300×300",
    question: "texto da pergunta 4",
    answer: "texto da resposta 4",
  },
  {
    imageUrl: "https://source.unsplash.com/random/300×300",
    question: "texto da pergunta 5",
    answer: "texto da resposta 5",
  },
  {
    imageUrl: "https://source.unsplash.com/random/300×300",
    question: "texto da pergunta 6",
    answer: "texto da resposta 6",
  },
];

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
      Flash Cards
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
