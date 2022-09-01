export interface TimeLineCategory {
    tag: string;
    color: string;
}

export interface TimeLineData {
    text: string;
    index: number;
    category: TimeLineCategory
}

const TimelineItem = (props: {data: TimeLineData}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: props.data.category.color }}>
                {props.data.category.tag}
            </span>
            <time>{props.data.index}</time>
            <p>{props.data.text}</p>
            <span className="circle" />
        </div>
    </div>
);

export const TimeLine = (data: any[]) => {
    return (
        <div className="timeline-container">
            {data.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );
}