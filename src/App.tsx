import React from 'react';
import "./shared/main.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from './components/home';
import { NotFound } from './components/not-found';
import { Header } from './components/header';
import { DerGolem } from './components/der-golem';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/der-golem"} element={<DerGolem />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
