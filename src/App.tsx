/* eslint-disable react/react-in-jsx-scope */
import "./shared/main.scss";
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Home } from "./components/home";
import { NotFound } from "./components/not-found";
import { Header } from "./components/header";
import { PageContent } from "./components/util/page-content";
import sandmannData from "./data/sandmann.json";
import golemData from "./data/der-golem.json";
import frankensteinData from "./data/frankenstein.json";
import qualitylandData from "./data/qualityland.json";
import pragerGolemData from "./data/prager-golem.json";
import homunculusData from "./data/homunculus.json";

function App() {
  const location = useLocation();

  return (
    <div
      className={
        "app-container " +
        location.pathname
          .replace("information", "")
          .replace("time-line", "")
          .replaceAll("/", "")
      }
    >
      <Header />
      <Routes>
        <Route path={"/"} element={<Navigate to="/home" />} />
        <Route path={"/home"} element={<Home />} />
        <Route
          path={"/der-golem/*"}
          element={
            <PageContent
              header="Der Golem"
              data={golemData}
              routingName="der-golem"
            />
          }
        />
        <Route
          path={"/sandmann/*"}
          element={
            <PageContent
              header="Sandmann"
              data={sandmannData}
              routingName="sandmann"
            />
          }
        />
        <Route
          path={"/frankenstein/*"}
          element={
            <PageContent
              header="Frankenstein"
              data={frankensteinData}
              routingName="frankenstein"
            />
          }
        />
        <Route
          path={"/qualityland/*"}
          element={
            <PageContent
              header="QualityLand"
              data={qualitylandData}
              routingName="qualityland"
            />
          }
        />
        <Route
          path={"/prager-golem/*"}
          element={
            <PageContent
              header="Der Prager Golem"
              data={pragerGolemData}
              routingName="prager-golem"
            />
          }
        />
        <Route
          path={"/homunculus/*"}
          element={
            <PageContent
              header="Homunculus"
              data={homunculusData}
              routingName="homunculus"
            />
          }
        />
        <Route
          path={"/isabella/*"}
          element={
            <PageContent
              header="Isabella von Ägypten"
              data={homunculusData}
              routingName="isabella"
            />
          }
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
