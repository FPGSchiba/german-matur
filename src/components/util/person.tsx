import { Card, CardHeader, Collapse, IconButton } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PersonZopef } from "./informations";

export function Person(props: PersonZopef) {
    const data = props;
    const [open, setOpen] = useState(false);

    return (
        <>
        <Card className="person-container" id={data.id}>
          <CardHeader
            title={data.name}
            className="person-header"
            action={
              <IconButton
                className="person-header-icon"
                onClick={() => setOpen(!open)}
                aria-label="expand"
                size="small"
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            }
          >
          </CardHeader>
            <div className="person-content" >
                <Collapse in={open} timeout="auto" unmountOnExit className="person-collapse">
                    <table className="person-table">
                        <tr>
                            <td className="table-header">Name: </td>
                            <td className="table-text" dangerouslySetInnerHTML={{ __html: data.name }} />
                        </tr>
                        <tr>
                            <td className="table-header">Rolle: </td>
                            <td className="table-text" dangerouslySetInnerHTML={{ __html: data.rolle }} />
                        </tr>
                        <tr>
                            <td className="table-header">Beschreibung: </td>
                            <td className="table-text" dangerouslySetInnerHTML={{ __html: data.beschreibung }} />
                        </tr>
                        <tr>
                            <td className="table-header">Wichtigste Handlungen: </td>
                            <td className="table-text" dangerouslySetInnerHTML={{ __html: data.wichtigsteHandlungen }} />
                        </tr>
                    </table>
                </Collapse>
            </div>
        </Card>
      </>
    )
}