import React, { useState } from 'react';
import { TimeLineImage } from './timeline';
import ImageGallery from 'react-image-gallery';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Card, CardHeader, Collapse, IconButton } from '@mui/material';

export function ImageWrapper(props: {images: TimeLineImage[]}) {
    const [open, setOpen] = useState(false);
    const { images } = props;
    const items = images.map((value, index) => {
        let url
        try {
          url = new URL(value.url);
          return {original: value.url, originalAlt: value.alt, originalClass: 'timeline-gallery-image'};
        } catch (_) {
          return {original: require(`../../data/${value.url}`).default, originalAlt: value.alt, originalClass: 'timeline-gallery-image'};
        }
    })

    const onSlide = (currentIndex: number) => {
      console.log(currentIndex);
    }

    return (
        <Card className="card-container">
          <CardHeader
            title='Bilder'
            className="card-header"
            action={
              <IconButton
                className="card-header-icon"
                onClick={() => setOpen(!open)}
                aria-label="expand"
                size="small"
              >
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            }
          >
          </CardHeader>
          <div className="card-content">
            <Collapse in={open} timeout="auto" unmountOnExit className="card-collapse">
                <ImageGallery
                    items={items}
                    showFullscreenButton={false}
                    infinite={true}
                    showThumbnails={false}
                    disableThumbnailScroll={true}
                    additionalClass='timeline-image-gallery'
                    showPlayButton={false}
                    renderRightNav={(onClick, disabled) => {return (
                        <IconButton
                            onClick={onClick}
                            disabled={disabled}
                            className='image-gallery-icon image-gallery-right-nav'
                            color='primary'
                        >
                            <KeyboardArrowRightIcon />
                        </IconButton>);}}
                    renderLeftNav={(onClick, disabled) => {return (
                        <IconButton
                            onClick={onClick}
                            disabled={true}
                            className='image-gallery-icon image-gallery-left-nav'
                            color='primary'
                        >
                            <KeyboardArrowLeft />
                        </IconButton>);}}
                    onSlide={onSlide}
                />
              </Collapse>
          </div>
      </Card>
    )
}