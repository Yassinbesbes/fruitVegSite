import React from 'react';
import { Carousel } from 'react-bootstrap';
import MediaCard from '../cards/card.js';
import tomato from '../../assets/images/products/tomato.png';
import '../cards/style.css';

const Carouselparte = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
              <MediaCard src={tomato} title="Tomato 1" />
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
              <MediaCard src={tomato} title="Tomato 2" />
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
              <MediaCard src={tomato} title="Tomato 3" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
              <MediaCard src={tomato} title="Tomato 4" />
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
              <MediaCard src={tomato} title="Tomato 5" />
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
              <MediaCard src={tomato} title="Tomato 6" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carouselparte;
