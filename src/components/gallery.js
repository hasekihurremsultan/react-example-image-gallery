"use client";

import PropTypes from "prop-types";
import { LeftArrow, RightArrow } from "@/icons/arrows";
import Image from "next/image";
import { useContext, useState } from "react";
import styles from "&/gallery.module.css";
import { closeIcon as CloseIcon } from "@/icons/close";
import { GalleryContext } from "&/page";

const $map = (images, prefix) => {
  return images.map((image) => {
    return {
      ...image,
      src: prefix + image.src,
    };
  });
};

const Gallery = ({ images = [], sourcePrefix = null, initialIndex = 0 }) => {
  const [open, setOpen] = useContext(GalleryContext);

  if (!open) return null;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const mapImages =
    sourcePrefix && images.length ? $map(images, sourcePrefix) : images;

  const prevSlide = () =>
    setCurrentIndex((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );

  const nextSlide = () =>
    setCurrentIndex((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );

  return (
    <>
      <button className="close-btn" onClick={() => setOpen(false)}>
        <CloseIcon size={18} />
      </button>
      <div className="fixed-layer">
        <button
          className="icon-button"
          id={styles.leftArrow}
          onClick={prevSlide}
        >
          <LeftArrow />
        </button>
        <main id={styles.imageContent}>
          <div className="relative w-full h-4/5 flex items-center justify-center">
            {images.length > 0 ? (
              <Image
                src={mapImages[currentIndex]?.src}
                alt={images[currentIndex]?.alt}
                fill
                priority={true}
                className="object-contain select-none"
              />
            ) : (
              <span className="text-slate-200 text-lg">
                No images added to gallery
              </span>
            )}
          </div>
          <footer className="w-max px-6 mx-auto h-full flex items-center justify-center text-xl font-semibold tracking-tight text-gray-100 font-mono">
            {currentIndex + 1}/{images.length}
          </footer>
        </main>
        <button
          className="icon-button ml-auto"
          id={styles.rightArrow}
          onClick={nextSlide}
        >
          <RightArrow />
        </button>
      </div>
    </>
  );
};

Gallery.propTypes = {
  // visibility: PropTypes.bool.isRequired,
  images: PropTypes.array,
  sourcePrefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  initialIndex: PropTypes.number,
};

export default Gallery;
