import { useState } from 'react';
import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api.js';
import ImageList from './component/ImageList.js';

function App() {

  const [images, setimages] = useState([])
  
   const handleSubmit = async (term) =>{
    const result= await searchImages(term);
    setimages(result);

   }
  return (
    <div className="App">
     <SearchHeader search={handleSubmit}/>
     <ImageList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
