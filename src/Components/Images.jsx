
import { useState } from "react";
import React, { useRef } from 'react';
import { photos } from "./photos";

import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import xbutton from "./assets/x128.png"
import cc from "./assets/cc_128.png"
import left from "./assets/left.png"
import right from "./assets/right.png"

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import "./Images.css";

export function Images() {
    const [index, setIndex] = useState(-1);
    const captionsRef = useRef(null);
    return (
        <>
            <div className="images_container">
                <RowsPhotoAlbum
                    photos={photos}
                    targetRowHeight={500}
                    spacing={50}
                    sizes={{
                        sizes: [
                            {
                                viewport: "(max-height: 800px)",
                                size: "calc(100vw - 32px)",
                            },
                        ],
                    }}
                    onClick={({ index }) => setIndex(index)}
                />
            </div>
            <Lightbox
                index={index}
                slides={photos}
                open={index >= 0}
                close={() => setIndex(-1)}
                plugins={[Captions]}
                captions={{ ref: captionsRef }}
                toolbar={{
                    buttons: [
                        <img src={cc}
                            onClick={() => {
                                if (captionsRef.current?.visible) {
                                  captionsRef.current.hide?.();
                                } else {
                                  captionsRef.current.show?.();
                                }
                              }}
                            width="64px" height="64px" key="my-button" type="button" alt="Caption" className="yarl__button slides_icon_cc" />,
                        "close",
                    ],
                }}
                render={{
                    iconClose: () => (
                        <img
                            src={xbutton}
                            alt="Close"
                            className="slides_icon_x"
                        />
                    ),
                    iconPrev: () => (
                        <img
                            src={left}
                            alt="Previous"
                            className="slides_icon"
                        />
                    ),
                    iconNext: () => (
                        <img
                            src={right}
                            alt="Next"
                            className="slides_icon"
                        />
                    ),
                }}
            />
        </>
    )
}