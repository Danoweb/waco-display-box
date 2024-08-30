import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Assuming images are stored in the public/images folder
        const importAll = (r) => r.keys().map(r);
        const images = importAll(require.context("../" + process.env.REACT_APP_IMAGE_FOLDER, false, /\.(png|jpe?g|svg)$/));

        setImages(images);
    }, []);

    return (
        <div className="slide-container">
          <Slide easing="ease" autoplay={true} duration={5000}>
            {images.map((image, index) => (
              <div className="each-slide" key={index}>
                <img
                    key={index}
                    src={process.env.PUBLIC_URL + image}
                    alt={`Gallery ${index}`}
                    style={{ width: process.env.REACT_APP_IMAGE_WIDTH, maxWidth: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </Slide>
        </div>
    );
};

export default ImageGallery;