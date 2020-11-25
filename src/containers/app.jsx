import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Carouselitem from "../components/Carouselitem";
import "../assets/styles/App.scss";
import Footer from "../components/Footer"
import useInitialState from "../Hooks/useInitialState"

const API ="http://localhost:3000/initalState"

// const App = () => {
//   
    // const initialState = useInitialState(API);
//   
    // return initialState.length === 0 ? <h1>Cargando...</h1> : 
//   (
    //   <div className="App">
        {/* <Header /> */}
        {/* <Search /> */}
{/*    */}
        {/* {initialState.mylist.length > 0 && */}
        //   <Categories title="Mi lista">
          {/* <Carousel> */}
          {/* {initialState.mylist.map(item => */}
            // <Carouselitem key={item.id} {...item} />
            // )}
          {/* </Carousel> */}
          {/* </Categories> */}
        // }
{/*    */}
        {/* <Categories title="Tendencias"> */}
          {/* <Carousel> */}
          {/* {initialState.trends.map(item => */}
            // <Carouselitem key={item.id} {...item} />                                      
            // )}
          {/* </Carousel> */}
        {/* </Categories> */}
{/*    */}
        {/* <Categories title="Originales de Platzi Video"> */}
        {/* <Carousel> */}
        {/* {initialState.originals.map(item => */}
        //   <Carouselitem key={item.id} {...item} />
        //   )}
        {/* </Carousel> */}
        {/* </Categories> */}
        {/* <Footer /> */}
      {/* </div> */}
    // );
//   };
// 

export const App = () => {
    const videos = useInitialState(API)

    return (
        <div>
            <Header/>
            <Search/>
            {videos && Object.keys(videos).map(categorie => {
                if (videos[categorie].length) {
                    return (
                        <Categories
                            title={categorie}
                            key={categorie}
                        >
                            <Carousel>
                                {videos[categorie].map(video => {
                                    return (
                                        <Carouselitem
                                            image={video.cover}
                                            alt={video.title}
                                            key={video.id}
                                            year={video.year}
                                            title={video.title}
                                            content={video.contentRating}
                                            duration={video.duration}
                                        />
                                    )
                                })}
                            </Carousel>
                        </Categories>
                    )
                }
                return null
            })}
            <Footer/>
        </div>
    )
}   
        export default App;