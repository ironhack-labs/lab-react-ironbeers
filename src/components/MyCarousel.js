import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/allBeers.PNG"
          alt="list of beers"
        />
        <Carousel.Caption>
          <Image className="App-logo" src="/images/cheers.jpg" roundedCircle />
          <h2>Welcome to Ironbeers!</h2>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/beers">
            <h3>Take a look at the beers here</h3>
          </Link>
          <p>A full list of all the beers that are available.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/randombeer.PNG"
          alt="random beer"
        />

        <Carousel.Caption>
          <Image className="App-logo" src="/images/cheers.jpg" roundedCircle />
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to="/random-beer"
          >
            <h3>Random Beer here</h3>
          </Link>
          <p>Try your luck! We will choose a beer for you. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/newBeer.PNG"
          alt="new beer"
        />

        <Carousel.Caption>
          <Image className="App-logo" src="/images/cheers.jpg" roundedCircle />
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to="/new-beer"
          >
            <h3>Add a beer here</h3>
          </Link>
          <p>
            Brewers and beer lovers, you can add your beer to our list here.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
