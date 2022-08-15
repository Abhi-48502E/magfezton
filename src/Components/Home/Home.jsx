import React from 'react'
import BackgroundImg from '../Background/BackgroundImg'
import CarouselSlider from '../Carousel/MyCom'
import ApiFech from '../Api/ApiFech'
import  { useEffect, useState } from "react";


import './home.css'
const API_URL =
  "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars/api_key=4afbb47f11msh7a35f40c40c3ab5p1b8a25jsnc13c514baf00";
function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URL)

      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <div>
      <BackgroundImg/>
      <h1>New Cars in India 2022</h1>
      <p id='parah'>Caroxia brings a complete range of cars in India. Search cars by applying filters such as by price range, by transmission type, by bodytype, by brand, by engine cc, and more features. Also, stay updated with upcoming cars in India, compare four-wheelers in your price range and stay tuned to the latest car news.</p>
      <CarouselSlider/>
      {movies.map((movieReq) => (
          <ApiFech key={movieReq.id} {...movieReq} />

        ))}
  </div>
  )
}

export default Home
