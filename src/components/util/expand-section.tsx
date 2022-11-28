import { Card, CardHeader, Collapse, IconButton } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ExpandSection(props: {text: string, header: string}) {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Card className="section-container">
          <CardHeader
            title={props.header}
            className="section-header"
            action={
              <IconButton
                className="section-header-icon"
                onClick={() => setOpen(!open)}
                aria-label="expand"
                size="small"
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            }
          >
          </CardHeader>
            <div className="section-content" >
                <Collapse in={open} timeout="auto" unmountOnExit className="section-collapse">
                    <p dangerouslySetInnerHTML={{ __html: props.text }} />
                </Collapse>
            </div>
        </Card>
      </>
    );
  }