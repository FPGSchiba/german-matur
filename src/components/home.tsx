import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Typography } from "@mui/material";

export function Home() {
    const [value, setValue] = useState();

    return (
        <div>
            <Typography variant="h1" component="h2">Home</Typography>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </div>
    )
}