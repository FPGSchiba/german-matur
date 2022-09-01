import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        navigate(value);
    }, [value])
    
    return (
        <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                className={'header header-container'}
            >
                <BottomNavigationAction label="Hauptseite" value={'/home'} className="header header-action" />
                <BottomNavigationAction label="Der Golem" value={'/der-golem'} className="header header-action" />
                <BottomNavigationAction label="Fill" value={'/book2'} className="header header-action" />
                <BottomNavigationAction label="Fill" value={'/book3'} className="header header-action" />
                <BottomNavigationAction label="Fill" value={'/book4'} className="header header-action" />
                <BottomNavigationAction label="Fill" value={'/book5'} className="header header-action" />
                <BottomNavigationAction label="Fill" value={'/book6'} className="header header-action" />
                <BottomNavigationAction label="Fill" value={'/book7'} className="header header-action" />
                <BottomNavigationAction label="Fill" value={'/book8'} className="header header-action" />
        </BottomNavigation>
    )
}