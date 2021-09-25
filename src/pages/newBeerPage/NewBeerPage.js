import React from 'react';
import BeerForm from '../../components/beerForm/BeerForm';
import { Container } from 'react-bootstrap';

import './NewBeerPage.css';

import NavBar from '../../components/navbar/NavBar';

function NewBeerPage() {
  return (
    <section id="new-beer-form">
      <NavBar />
      <Container className="form-wrapper">
        <BeerForm />
      </Container>
    </section>
  );
}

export default NewBeerPage;
