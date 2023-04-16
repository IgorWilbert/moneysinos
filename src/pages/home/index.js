import Module from "../../components/module";
import "./styles.css";

const Home = () => (
  <div className="home">
    <Module
      title="FlashCards"
      imageUrl={"https://source.unsplash.com/random/300×300"}
      description="Amplie seu conhecimento sobre investimentos"
      linkUrl="/flashcards"
    />
  </div>
);

export default Home;
