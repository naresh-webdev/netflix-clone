import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route index element={<App />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
