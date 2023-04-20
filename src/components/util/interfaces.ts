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
    zopef: string;
    side: string;
    expandable: boolean;
    kapitel: TimeLineCategory;
    images?: TimeLineImage[];
}

export interface PersonZopef {
    name: string;
    rolle: string;
    beschreibung: string;
    wichtigsteHandlungen: string;
    id: string;
}
export interface Zopef {
    zeit: string;
    ort: string;
    personen: PersonZopef[];
}

export interface interpretation {
    name: string;
    beschreibung: string
}
export interface MetaData {
    author: string;
    authorImage: string;
    opinion: string;
    recommendation: string;
    relation: string;
    zopef: Zopef;
    interpretationen: interpretation[];
}


export interface IBookData {
  meta: MetaData;
  timeLine: TimeLineData[];
}