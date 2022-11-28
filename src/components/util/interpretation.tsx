import { Card, CardHeader, Collapse, IconButton } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { interpretation } from "./informations";

export function Intrepretation(props: interpretation) {
    const data = props;
    const [open, setOpen] = useState(false);

    return (
        <>
        <Card className="interpret-container">
          <CardHeader
            title={data.name}
            className="interpret-header"
            action={
              <IconButton
                className="interpret-header-icon"
                onClick={() => setOpen(!open)}
                aria-label="expand"
                size="small"
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            }
          >
          </CardHeader>
            <div className="interpret-content" >
                <Collapse in={open} timeout="auto" unmountOnExit className="interpret-collapse">
                    <table className="interpret-table">
                        <tr>
                            <td className="table-header">Name: </td>
                            <td className="table-text" dangerouslySetInnerHTML={{ __html: data.name }} />
                        </tr>
                        <tr>
                            <td className="table-header">Beschreibung: </td>
                            <td className="table-text" dangerouslySetInnerHTML={{ __html: data.beschreibung }} />
                        </tr>
                    </table>
                </Collapse>
            </div>
        </Card>
      </>
    )
}