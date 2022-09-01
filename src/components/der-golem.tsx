import React, { useEffect } from "react";
import timeLineData from '../data/der-golem.json';
import { TimeLine } from './util/timeline';

export function DerGolem() {

    useEffect(() => {
        console.log(timeLineData);
    })
    return (
        <>
            <h1>Der Golem</h1>
        </>
    )
}