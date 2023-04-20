import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";

export function Home() {
  return (
    <div className="home">
      <Typography variant="h1" component="h1" className="home home-header">
        Hauptseite
      </Typography>
      <Typography variant="h3" component="h3" className="home home-sub">
        Willkommen auf in der Maturleseliste von: Jann Erhardt
      </Typography>
      <Typography variant="body1" component="p" className="home home-body">
        <strong>
          Diese Leselist widmet sich dem Thema: Künstliche Intelligenz &
          Künstliches Leben.
        </strong>
        <br />
        Um Tiefer ins Thema einzutauchen, bitte einfach ein oben gelistet Buch
        wählen und die Zusammenfassung oder und die Informationen dazu lesen.
        Dise Bücher wurden ausgewählt, um einen Literarischen und möglichst
        ausgeglichenes Bild zu geben, was genau Künstliche Intelligenz oder
        Leben in der Literatur für einen Stellenwert und Bedeutung hat.
      </Typography>
      <Typography variant="body2" component="p" className="home home-footer">
        Diese Seite wurde erstellt von: Jann Erhardt. Nichts darauf ist Copy
        Righted, da nicht originelle Informationen sind ;)
      </Typography>
    </div>
  );
}
