import React from "react";
import { OpenCard } from "./card";
import ExpandCard from "./expand-card";
import { ImageWrapper } from "./image-wrapper";
export interface TimeLineCategory {
    tag: string;
    color: string;
}

export interface TimeLineImage {
    alt: string;
    url: string;
}

export interface TimeLineData {
    header: string;
    text: string;
    index: number;
    side: string;
    expandable: boolean;
    category: TimeLineCategory;
    images?: TimeLineImage[];
}

const TimelineItem = (props: {data: TimeLineData}) => (
    <div className={props.data.side == "right" ? "timeline-item-right" : "timeline-item"}>
        <div className="timeline-item-content">
            <span className="tag" style={{ background: props.data.category.color }}>
                {props.data.category.tag}
            </span>
            <time>Seite: {props.data.index}</time>
             { props.data.expandable ? <ExpandCard header={props.data.header} text={props.data.text} /> : <OpenCard header={props.data.header} text={props.data.text} /> }
             { props.data.images ? <ImageWrapper images={props.data.images} /> : null}
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