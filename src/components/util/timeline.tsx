import React from "react";
import ExpandCard from "./expand-card";
export interface TimeLineCategory {
    tag: string;
    color: string;
}

export interface TimeLineData {
    header: string;
    text: string;
    index: number;
    side: string;
    category: TimeLineCategory;
}

const TimelineItem = (props: {data: TimeLineData}) => (
    <div className={props.data.side == "right" ? "timeline-item-right" : "timeline-item"}>
        <div className="timeline-item-content">
            <span className="tag" style={{ background: props.data.category.color }}>
                {props.data.category.tag}
            </span>
            <time>Seite: {props.data.index}</time>
            <ExpandCard header={props.data.header} text={props.data.text} />
            <span className="circle" />
        </div>
    </div>
);

export const TimeLine = (props: { data: TimeLineData[]}) => {
    const { data } = props;
    return (
        <div className="timeline-container">
            {data.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );
}