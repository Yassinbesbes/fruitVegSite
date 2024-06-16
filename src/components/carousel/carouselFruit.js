import React from 'react';
import Image from 'react-bootstrap/Image';
import MediaCard from '../cards/card.js';
import background from '../../assets/images/background/backgound.png'; 
import avocados from '../../assets/images/products/fruit/avocados.png';
import apple from '../../assets/images/products/fruit/apple.png';
import banane from '../../assets/images/products/fruit/banane.png';

import '../cards/style.css';

const CarouselFruit = () => {
  const cards = [
    { src: avocados, title: "Avocados" },
    { src: apple, title: "Apple" },
    { src: banane, title: "Banane" },
    { src: avocados, title: "Avocados" },
    { src: apple, title: "Apple" },
    { src: banane, title: "Banane" },
  ];

  const renderCards = (startIndex) => {
    return (
      <div className="row">
        {cards.slice(startIndex, startIndex + 3).map((card, index) => (
          <div key={index} className="col-12 col-md-4 d-flex justify-content-center mb-3">
            <MediaCard src={card.src} title={card.title} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="background-container">
        <Image src={background} alt="FruitImage" fluid className="background-image" />
      </div>
      <div className="FruitParte">
        <div className="FruitTitle">Fruit</div>
        <div className="container">
          {renderCards(0)}
          {renderCards(3)}
        </div>
      </div>
    </>
  );
};

export default CarouselFruit;
