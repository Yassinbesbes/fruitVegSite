import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CarouselVegparte from "./components/carousel/carouselVeg.js";
import CarouselFruit from "./components/carousel/carouselFruit.js";

import Navbar from './components/navbar/navbar.js';

import './components/cards/style.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <CarouselVegparte />
      <CarouselFruit/>
    </div>
  );
}

export default App;
