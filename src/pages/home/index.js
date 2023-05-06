import Module from "../../components/module";
import "./styles.css";

const Home = () => (
  <div className="home">
    <Module
      title="FlashCards"
      imageUrl={`${process.env.PUBLIC_URL}/home/flashcards.jpg`}
      description="Amplie seu conhecimento sobre investimentos"
      linkUrl="#/flashcards"
    />
    <Module
      title="Quiz"
      imageUrl={`${process.env.PUBLIC_URL}/home/quiz.jpg`}
      description="Teste seu conhecimento sobre investimentos"
      linkUrl="#/quiz"
    />
    <Module
      title="Mercado Atual"
      imageUrl={`${process.env.PUBLIC_URL}/home/mercado-atual.jpg`}
      description="Principais índices e tendências para ajudar você a investir"
      linkUrl="#/mercado-atual"
    />
  </div>
);

export default Home;
