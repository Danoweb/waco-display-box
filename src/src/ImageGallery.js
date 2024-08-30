import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const ImageGallery = ({ interval = 5000 }) => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Assuming images are stored in the public/images folder
        const importAll = (r) => r.keys().map(r);
        const images = importAll(require.context("../" + process.env.REACT_APP_IMAGE_FOLDER, false, /\.(png|jpe?g|svg)$/));

        setImages(images);

        // const timer = setInterval(() => {
        //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        // }, interval);
    
        // return () => clearInterval(timer); // Cleanup the interval on component unmount
        const intervalId = setInterval(() => {
          window.location.reload();
        }, 60000); // 60000 milliseconds = 60 seconds
    
        // Cleanup on component unmount
        return () => clearInterval(intervalId);
    }, [images.length, interval]);

    return (
        <div className="slide-container">
          <Fade 
            duration={interval}
            transitionDuration={1000}
            infinite={true}
            arrows={false}
            pauseOnHover={false}
            indicators={false}
            //defaultIndex={currentIndex}
            autoplay={true}
          >
            {images.map((image, index) => (
              <div className="each-slide" key={index}>
                <img
                    key={index}
                    src={process.env.PUBLIC_URL + image}
                    alt={`Gallery ${index}`}
                    style={{ width: process.env.REACT_APP_IMAGE_WIDTH, maxWidth: '100%', height: 'auto' }}
                    //className="full-screen-image"
                />
              </div>
            ))}
          </Fade>
        </div>
    );
};

export default ImageGallery;