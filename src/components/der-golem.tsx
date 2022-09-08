import React, { useEffect, useState } from "react";
import timeLineDataRaw from '../data/der-golem.json';
import { TimeLine, TimeLineData } from './util/timeline';

export function DerGolem() {
    const [timeLineData, setTimeLineData] = useState<TimeLineData[]>([]);

    useEffect(() => {
        const data = timeLineDataRaw.timeLine;
        setTimeLineData(data);
    }, [timeLineDataRaw])

    return (
        <>
            <h1>Der Golem</h1>
            <TimeLine data={timeLineData} />
        </>
    )
}