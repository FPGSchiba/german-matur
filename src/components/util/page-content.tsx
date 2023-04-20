import React, { useEffect, useState } from "react";
import { TimeLine } from "./timeline";
import { Switch } from "@mui/material";
import { Information } from "./informations";
import { Route, Routes, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IBookData, TimeLineData, MetaData } from "./interfaces";

export function PageContent(props: {
  header: string;
  data: IBookData;
  routingName: string;
}) {
  const [timeLineData, setTimeLineData] = useState<TimeLineData[]>([]);
  const [informationData, setInformationData] = useState<MetaData>(
    {} as MetaData
  );
  const [timeLineOpen, setTimeLineOpen] = useState(true);
  const navigate = useNavigate();
  const { header, data, routingName } = props;
  const location = useLocation();

  const label = { inputProps: { "aria-label": "Switch" } };

  const onChangeSwitch = () => {
    setTimeLineOpen(!timeLineOpen);
    if (timeLineOpen) {
      navigate("information");
    } else {
      navigate("time-line");
    }
  };

  useEffect(() => {
    const timeLine = data.timeLine;
    const information = data.meta;
    setTimeLineData(timeLine);
    setInformationData(information);
    const path = location.pathname.replace(routingName, "").replaceAll("/", "");
    if (path != "") {
      if (path == "time-line") {
        setTimeLineOpen(true);
      } else {
        setTimeLineOpen(false);
      }
    } else {
      navigate("time-line");
    }
  }, [data, location]);

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
        <Routes>
          <Route path={"/"} element={<TimeLine data={timeLineData} />} />
          <Route
            path={"time-line"}
            element={<TimeLine data={timeLineData} />}
          />
          <Route
            path={"information"}
            element={<Information data={informationData} />}
          />
        </Routes>
      </div>
    </>
  );
}
