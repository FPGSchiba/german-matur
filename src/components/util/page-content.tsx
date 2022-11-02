import React, { useEffect, useState } from "react";
import timeLineDataRaw from '../../data/der-golem.json';
import { TimeLine, TimeLineData } from './timeline';
import { Switch } from "@mui/material";
import { Information, MetaData } from "./informations";

export function PageContent(props: {header: string}) {
    const [timeLineData, setTimeLineData] = useState<TimeLineData[]>([]);
    const [informationData, setInformationData] = useState<MetaData>({} as MetaData);
    const [timeLineOpen, setTimeLineOpen] = useState(true);
    const  { header } = props;

    const label = { inputProps: { 'aria-label': 'Switch' } };

    const onChangeSwitch = () => {
        setTimeLineOpen(!timeLineOpen);
    }

    useEffect(() => {
        const timeLine = timeLineDataRaw.timeLine;
        const information = timeLineDataRaw.meta;
        setTimeLineData(timeLine);
        setInformationData(information);
    }, [timeLineDataRaw])

    return (
        <>
            <h1 className="pages-heading">{header}</h1>
            <div className="page-container">
                <div className="page-container page-container__switch">
                    <div className="page-container page-container__label">
                        <p>Inforamtionen</p>
                        <p>Time Line</p>
                    </div>
                    <Switch {...label} checked={timeLineOpen} onChange={onChangeSwitch} />
                </div>
                { timeLineOpen ? (
                    <TimeLine data={timeLineData} />
                ): (
                    <Information data={informationData} />
                )}
                
            </div>
        </>
    )
}