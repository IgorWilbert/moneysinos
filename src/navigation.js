import { Routes, Route } from "react-router-dom";

import Header from "./components/header";

import FlashCards from "./pages/flashCards";
import Home from "./pages/home";

const Navigation = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/flashcards" element={<FlashCards />} />
      </Routes>
    </>
  );
};

export default Navigation;
