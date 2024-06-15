import React from 'react';
import MediaCard from './components/cards/card.js';
import fennet from './assets/images/products/fennet.png';
import './components/cards/style.css';

function App() {
    return (
        <div className="App">
            
            <MediaCard
        title="fennet"
        src={fennet}
      />
        </div>
    );
}

export default App;
