"use client";

import ImageGallery from "~/gallery";
import { createContext, Fragment, useState } from "react";

const images = [
  {
    src: "image-1.jpg",
    alt: "This is first image",
  },
  {
    src: "image-2.jpg",
    alt: "This is second image",
  },
  {
    src: "image-3.jpg",
    alt: "This is third image",
  },
  {
    src: "image-4.jpg",
    alt: "This is fourth image",
  },
  {
    src: "image-5.jpg",
    alt: "This is fifth image",
  },
];

export const GalleryContext = createContext(null);

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <button className="primary-btn" onClick={() => setOpen(true)}>
        Open image gallery
      </button>

      <GalleryContext.Provider value={[open, setOpen]}>
        <ImageGallery sourcePrefix="/images/" images={images} />
      </GalleryContext.Provider>
    </Fragment>
  );
}
