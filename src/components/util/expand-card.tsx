import { Card, CardContent, CardHeader, Collapse, Container, IconButton } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ExpandCard(props: {text: string, header: string}) {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Card className="card-container">
          <CardHeader
            title={props.header}
            className="card-header"
            action={
              <IconButton
                className="card-header-icon"
                onClick={() => setOpen(!open)}
                aria-label="expand"
                size="small"
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            }
          >
          </CardHeader>
          <div className="card-content">
            <Collapse in={open} timeout="auto" unmountOnExit className="card-collapse">
                <p dangerouslySetInnerHTML={{ __html: props.text }} />
            </Collapse>
          </div>
        </Card>
      </>
    );
  }