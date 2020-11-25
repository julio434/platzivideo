import {useState, useEffect} from "react";


// const useInitialState = (API) => {
// 
  // const [videos, setVideos] = useState({ "mylist": [], "trends": [], "original": [] });
  // useEfect(() => {
      // fetch(API)
          // .then((response) => response.json())
          // .then(data => setVideos(data))
  // }, []);
  // return videos
// };
// 
const selectCategorieTitle = categorie => {
  let title
  switch (categorie) {
  case 'trends': {
      title = 'Tendencias'
      break
  }
  case 'originals': {
      title = 'Originales de Platzi Video'
      break
  }
  default: {
      title = categorie
      break
  }
  }
  return title
}

 const useInitialState = API => {
  const [videos, setVideos] = useState(null)
  useEffect(() => {
      const getVideos = () => {
          fetch(API)
              .then(videos => videos.json())
              .then(videos => {
                  const response = {}
                  Object.keys(videos).forEach(categorie => {
                      response[selectCategorieTitle(categorie)] = videos[categorie]
                  })
                  setVideos(response)
              })
      }
      getVideos()
  }, [])
  return videos
}


export default useInitialState;