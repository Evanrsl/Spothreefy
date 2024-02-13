import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TopTracks from "./components/TopTracks";
import Callback from "./components/Callback";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-tracks" element={<TopTracks />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
