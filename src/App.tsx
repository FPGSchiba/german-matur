import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/home';
import { NotFound } from './components/not-found';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/home"} element={<Home />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
