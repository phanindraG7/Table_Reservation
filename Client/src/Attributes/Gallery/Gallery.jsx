import React from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';
import image from '../../constant/image';

const Gallery = () => {
  const images = [
    { id: 1, src: image.Image1, alt: 'Image 1' },
    { id: 6, src: image.Image6, alt: 'Image 6' },
    { id: 2, src: image.Image2, alt: 'Image 2' },
    { id: 3, src: image.Image3, alt: 'Image 3' },
    { id: 4, src: image.Image4, alt: 'Image 4' },
    { id: 5, src: image.Image5, alt: 'Image 5' },
    { id: 7, src: image.Image7, alt: 'Image 1' },
    { id: 8, src: image.Image8, alt: 'Image 8' },
    { id: 9, src: image.Image9, alt: 'Image 9' },
    { id: 10, src: image.Image10, alt: 'Image 10' },
    { id: 11, src: image.Image11, alt: 'Image 11' },
    { id: 12, src: image.Image12, alt: 'Image 12' },
    { id: 13, src: image.Image13, alt: 'Image 13' },
    { id: 14, src: image.Image14, alt: 'Image 14' },
    { id: 15, src: image.Image15, alt: 'Image 15' },
    { id: 15, src: image.Image16, alt: 'Image 16' },
  ];

  return (
    <motion.section
      className="gallery"
      initial={{ opacity: 0, scale: 0.2 }} // Initial state: opacity 0 and scale 0.5 (smaller size)
      animate={{ opacity: 1, scale: 1 }} // Animation state: opacity 1 and scale 1 (original size)
      transition={{ duration: 0.5, delay: 0.2 }} // Transition duration and delay
    >
      <div className="gallery__container">
        <div className="gallery__images">
          {images.map((img1) => (
            <img
              id="img1"
              key={img1.id}
              src={img1.src}
              alt={img1.alt}
              className={`gallery__image ${img1.id === 5 ? 'gallery__image--center' : ''}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;