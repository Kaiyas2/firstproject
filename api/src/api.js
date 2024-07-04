import axios from 'axios';


const searchImages = async (term) =>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID dchWXE8aSlML_O0xlLjOgTDtnLKvvFuLc1_ftbJ_rSA'
      },
      params:{
        query:term
      }
    })
    debugger;
    return response.data.results;


  };

  export default searchImages;