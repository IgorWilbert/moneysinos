import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createHashRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header";

import FlashCards from "./pages/flashCards";
import Home from "./pages/home";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/flashcards",
    element: <FlashCards />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
