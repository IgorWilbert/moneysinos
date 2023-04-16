import { Routes, Route } from "react-router-dom";

import Header from "./components/header";

import FlashCards from "./pages/flashCards";
import Home from "./pages/home";

const Navigation = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="moneysinos/" element={<Home />} />
        <Route path="moneysinos/flashcards" element={<FlashCards />} />
      </Routes>
    </>
  );
};

export default Navigation;
