import React from "react";

import { Routes, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} exact />
        <Route path="/article/:slug" element={<Article />} exact />
        <Route path="/category/:slug" element={<Category />} exact />
      </Routes>
    </div>
  );
}

export default App;
