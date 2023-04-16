import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header";

import FlashCards from "./pages/flashCards";
import Home from "./pages/home";
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
]);

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
