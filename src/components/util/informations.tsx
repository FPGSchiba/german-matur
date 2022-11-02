import React from "react";
export interface MetaData {
    author: string;
    authorImage: string;
    opinion: string;
    recommendation: string;
    relation: string;
}

export function Information(props: {data: MetaData}) {
    const { data } = props;
    return (
        <div className="information">
            <table className="information information-table">
                <tr>
                    <td className="table-header">Autor: </td>
                    <td className="table-text" dangerouslySetInnerHTML={{ __html: data.author }} />
                </tr>
                <tr>
                    <td className="table-header">Meinung: </td>
                    <td className="table-text" dangerouslySetInnerHTML={{ __html: data.opinion }} />
                </tr>
                <tr>
                    <td className="table-header">Weiterempfehlung: </td>
                    <td className="table-text" dangerouslySetInnerHTML={{ __html: data.recommendation }} />
                </tr>
                <tr>
                    <td className="table-header">Relationen: </td>
                    <td className="table-text" dangerouslySetInnerHTML={{ __html: data.relation }} />
                </tr>
            </table>
        </div>
    )
}