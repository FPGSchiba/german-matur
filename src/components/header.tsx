import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(value);
  }, [value]);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={"header header-container"}
    >
      <BottomNavigationAction
        label="Hauptseite"
        value={"/home"}
        className="header header-action"
      />
      <BottomNavigationAction
        label="Der Golem"
        value={"/der-golem"}
        className="header header-action"
      />
      <BottomNavigationAction
        label="Sandmann"
        value={"/sandmann"}
        className="header header-action"
      />
      <BottomNavigationAction
        label="Frankenstein"
        value={"/frankenstein"}
        className="header header-action"
      />
      <BottomNavigationAction
        label="QualityLand"
        value={"/qualityland"}
        className="header header-action"
      />
      <BottomNavigationAction
        label="Prager Golem"
        value={"/prager-golem"}
        className="header header-action"
      />
      <BottomNavigationAction
        label="Homunculus"
        value={"/homunculus"}
        className="header header-action"
      />
      <BottomNavigationAction
        label="Isabella von Ägypten"
        value={"/isabella"}
        className="header header-action"
      />
    </BottomNavigation>
  );
}
