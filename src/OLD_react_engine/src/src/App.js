import React from 'react';
import './App.css';

import ImageGallery from './ImageGallery';


function App() {
  // const imagePaths = loadImages(`${process.env.REACT_APP_IMAGE_FOLDER}`)
  
  return (
    // <div className="App">
    //   <Slide>
    //     {imagePaths.map((path, index) => (
    //         <div className="each-slide" key={index}>
    //             <img src={path} alt={`Slide ${index}`} style={{ width: '100%'}} />
    //         </div>
    //     ))}
    //   </Slide>
    // </div>
    <div>
      <ImageGallery />
    </div>
  );
}

export default App;
