import React from 'react';
import { Carousel } from 'react-bootstrap';
import MediaCard from '../cards/card.js';
import tomato from '../../assets/images/products/vegetables/tomato.png';
import fennet from '../../assets/images/products/vegetables/fennet.png';
import spring_onion from '../../assets/images/products/vegetables/spring_onion.png';
import'./style.css';

import '../cards/style.css';

const CarouselVegparte = () => {
  const cards = [
    { src: tomato, title: "Tomato" },
    { src: fennet, title: "fennet" },
    { src: spring_onion, title: "spring onion" },
    { src: tomato, title: "Tomato" },
    { src: fennet, title: "fennet" },
    { src: spring_onion, title: "spring onion" },
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
    <Carousel className='carousel'>
      <Carousel.Item>
        <div className="container">
          {renderCards(0)}
          {renderCards(3)}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          {renderCards(0)}
          {renderCards(3)}
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="container">
          {renderCards(0)}
          {renderCards(3)}
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselVegparte;
