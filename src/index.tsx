import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import FlashCards from "./pages/flashCards";
import Home from "./pages/home";
import Market from "./pages/market";
import QuizTest from "./pages/quizTest";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/flashcards",
    element: <FlashCards />,
  },
  {
    path: "/quiz",
    element: <QuizTest />,
  },
  {
    path: "/mercado-atual",
    element: <Market />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
