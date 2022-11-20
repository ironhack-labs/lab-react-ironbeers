import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Header from '../component/Header'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './Search';



function Beers() {
  const [initialBeers, setInitialBeers] = useState([]);
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');

      setBeers(response.data);
      setInitialBeers(response.data);
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBeers();
  }, []);

  const filterBeers = (searchQuery) => {
    const filteredBeers = initialBeers.filter((beer) =>
      beer.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setBeers(filteredBeers)
  }

  return (
    <div>
      <Header />
      <Search filter={filterBeers} />
      {beers.map((beer) => (
        <div key={beer._id}>
          <Container>
            <Row>
              <Col xs={3} className="d-flex align-items-center d-flex justify-content-center">
                <Image fluid="true" style={{ height: '90px' }} src={beer.image_url} alt="beer" />
              </Col>
              <Col className="text-start">
                <Link to={`/beer/${beer._id}`} className="h2 text-decoration-none text-dark" >{beer.name}</Link>
                <p className="h6 text-secondary text-opacity-50">{beer.tagline}</p>
                <p><small><b>Created by:</b> {beer.name}</small></p>
              </Col>
              <hr />
            </Row>
          </Container>
        </div>
      ))}
    </div>
  )
}

export default Beers