import React, { useEffect, useState } from 'react';
import "./shared/main.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from './components/home';
import { NotFound } from './components/not-found';
import { Header } from './components/header';
import { DerGolem } from './components/der-golem';

function App() {
  const location = useLocation();
  console.log(location.pathname.replace('/', ''))

  return (
    <div className={'app-container ' + location.pathname.replace('/', '')}>
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
