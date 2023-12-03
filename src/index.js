import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { AllCharacters } from "./Pages/AllCharacters/AllCharacters";
import { PaginationProvider } from "./Components/Pagination/PaginationContext";
import AllEpisodes from "./Pages/AllEpisodes/AllEpisodes";
import PageDetail from "./Pages/Details/PageDetail";
import CharacterDetail from "./Pages/Details/CharacterDetail";

ReactDOM.render(
  <PaginationProvider>
    <BrowserRouter>
      <App />
      <Routes>
        {/* <Route  path='/' element={<Home />}/> */}
        <Route path="allCharacters" element={<AllCharacters />} />
        <Route path="/" element={<AllEpisodes />} />
        <Route path="/pageDetail/:id" element={<PageDetail />} />
        <Route path="/characterDetail/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  </PaginationProvider>,
  document.getElementById("root")
);
