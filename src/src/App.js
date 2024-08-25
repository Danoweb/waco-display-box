import './App.css';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { loadImages } from 'src/components/loadImages'


function App() {
  const imagePaths = loadImages(`${process.env.REACT_APP_IMAGE_FOLDER}`)
  
  return (
    <div className="App">
      <Slide>
        {imagePaths.map((path, index) => (
            <div className="each-slide" key={index}>
                <img src={path} alt={`Slide ${index}`} style={{ width: '100%'}} />
            </div>
        ))}
      </Slide>
    </div>
  );
}

export default App;
