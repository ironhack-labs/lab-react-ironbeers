import React, { useEffect, useState } from 'react';
import Header from './elements/Header';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import '../App.css';



export default function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        setBeer(response.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header />
      <Card className="card border-primary mb-3 text-dark bg-light" style={{"maxWidth": "400px"}} key={beer._id}>
          <Card.Img className="img-fluid rounded-start" src={beer.image_url} alt="beers" style={{"height": "300px", "width": "200px"}}/>
          <Card.Body>
            <Card.Title>
            {beer.name}
            </Card.Title>
            <Card.Text>
            <div>
            <small class="text-muted">
            {beer.attenuation_level}
            </small>
            </div>
            
            <div>
            {beer.tagline}
            </div>
            
            
            {beer.first_brewed}
            
            {beer.description}
            
            <small class="text-muted">{beer.contributed_by}</small>
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
} 