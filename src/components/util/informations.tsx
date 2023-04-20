/* eslint-disable react/jsx-key */
import { Expand } from "@mui/icons-material";
import React from "react";
import ExpandSection from "./expand-section";
import { Intrepretation } from "./interpretation";
import { Person } from "./person";
import { MetaData, PersonZopef, interpretation } from "./interfaces";

export function Information(props: { data: MetaData }) {
  const { data } = props;
  return (
    <>
      <div className="information">
        <table className="information information-table">
          <tr>
            <td className="table-header">Autor: </td>
            <td className="table-text author">
              <p>{data.author}</p>
              <img src={data.authorImage} className="author-image" />
            </td>
          </tr>
          <tr>
            <td className="table-header">Meinung: </td>
            <td
              className="table-text"
              dangerouslySetInnerHTML={{ __html: data.opinion }}
            />
          </tr>
          <tr>
            <td className="table-header">Weiterempfehlung: </td>
            <td
              className="table-text"
              dangerouslySetInnerHTML={{ __html: data.recommendation }}
            />
          </tr>
          <tr>
            <td className="table-header">Relationen: </td>
            <td
              className="table-text"
              dangerouslySetInnerHTML={{ __html: data.relation }}
            />
          </tr>
        </table>
      </div>

      <div className="information">
        <div className="information-zopef">
          <div className="information-zopef information-zopef-header">
            <h1>ZOP(EF)</h1>
          </div>
          <div className="information-zopef information-zopef-content">
            <ExpandSection text={data.zopef.zeit} header={"Zeit"} />
            <ExpandSection text={data.zopef.ort} header={"Ort"} />
            <div className="information-zopef information-zopef-content information-zopef-content__person">
              <h2 className="information-zopef information-zopef-personen">
                Personen
              </h2>
              {data.zopef.personen.map((value: PersonZopef, index: number) => {
                return (
                  <Person
                    key={index}
                    name={value.name}
                    rolle={value.rolle}
                    beschreibung={value.beschreibung}
                    id={value.id}
                    wichtigsteHandlungen={value.wichtigsteHandlungen}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="information">
        <div className="information-zopef">
          <div className="information-zopef information-zopef-header">
            <h1>Interprätationsansätze</h1>
          </div>
          <div className="information-zopef information-zopef-content">
            <div className="information-zopef information-zopef-content information-zopef-content__interpretation">
              {data.interpretationen.map(
                (value: interpretation, index: number) => {
                  return (
                    <Intrepretation
                      name={value.name}
                      beschreibung={value.beschreibung}
                      key={index}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
