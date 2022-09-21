import { Card, CardHeader } from "@mui/material";
import React from "react";

export function OpenCard(props: {header: string, text: string}) {
    return(
    <>
        <Card className="card-container">
            <CardHeader title={props.header} className="card-header" />
            <div className="card-content">
                <p dangerouslySetInnerHTML={{ __html: props.text }} />
            </div>
        </Card>
    </>);
}