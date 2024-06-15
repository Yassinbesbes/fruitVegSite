import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carouselparte from "./components/carousel/carousel.js";
import Webapp from './components/page/webapp.js';

import './components/cards/style.css';



function App() {
  return (
    <div className="App">
      <Webapp />
      <Carouselparte />
    </div>
  );
}

export default App;
