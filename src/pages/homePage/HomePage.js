import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import './HomePage.css';

import allBeersImg from '../../assets/beers.png';
import randpmBeerImg from '../../assets/new-beer.png';
import newBeerImg from '../../assets/random-beer.png';

import Divider from '../../components/divider/Divider';

function HomePage() {
  return (
    <section id="home">
      <Link to="/beers">
        <Card>
          <Card.Img variant="top" src={allBeersImg} />
          <Card.Body>
            <Card.Title>
              <i className="fas fa-star"></i> All Beers{' '}
              <i className="fas fa-star"></i>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pharetra pellentesque augue. Quisque rutrum a justo rutrum
              accumsan. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Ut sed sapien elit. Curabitur
              interdum erat et congue vulputate.
            </Card.Text>
            <Divider />
          </Card.Body>
        </Card>
      </Link>
      <Link to="/random-beer">
        <Card>
          <Card.Img variant="top" src={randpmBeerImg} />
          <Card.Body>
            <Card.Title>
              <i className="fas fa-star"></i> Random Beer{' '}
              <i className="fas fa-star"></i>
            </Card.Title>
            <Card.Text>
              Praesent dapibus lobortis volutpat. Fusce ut lacus nec elit
              efficitur eleifend ac non libero. Duis vulputate tristique
              sodales. Aenean non ornare velit, non volutpat mauris. Cras
              facilisis consequat dictum. Morbi quis odio id nulla ornare
              egestas pellentesque quis lectus. Praesent iaculis rutrum arcu,
              vel consectetur odio venenatis sit amet. Phasellus tempus nisl non
              tristique maximus.
            </Card.Text>
            <Divider />
          </Card.Body>
        </Card>
      </Link>
      <Link to="/new-beer">
        <Card>
          <Card.Img variant="top" src={newBeerImg} />
          <Card.Body>
            <Card.Title>
              <i className="fas fa-star"></i> New Beer{' '}
              <i className="fas fa-star"></i>
            </Card.Title>
            <Card.Text>
              Sed at condimentum enim. Nulla facilisi. Morbi ultricies at lectus
              in fringilla. Donec a lobortis justo. Vestibulum sodales ipsum nec
              consectetur blandit. Suspendisse eget arcu at tellus blandit
              lobortis. Ut a mauris in tortor pellentesque consequat. Sed
              interdum non sapien ultrices sodales. Maecenas porta a massa et
              lacinia. Mauris sit amet tortor lectus.
            </Card.Text>
            <Divider />
          </Card.Body>
        </Card>
      </Link>
    </section>
  );
}

export default HomePage;
