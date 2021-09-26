import React, { useEffect, useState } from 'react'
import Header from './elements/Header';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import '../App.css';



export default function BeerDetails(props) {
  const [beer, setBeer] = useState([]);


  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
      .then(response => {
        
        setBeer(response.data)
      })
      .catch(err => console.log(err))
  }, [props.match.params.id])


    return (
      <>
        <Header/> 
        <Card className="card border-primary mb-3 text-dark bg-light" style={{"maxWidth": "400px"}} key={beer._id}>
          <Card.Img className="img-fluid rounded-start" src={beer.image_url} alt="beers" style={{"height": "300px", "width": "200px"}}/>
          <Card.Body>
            <Card.Title>
            {beer.name}
            </Card.Title>
            <Card.Text>
            <small class="text-muted">
            {beer.attenuation_level}
            </small>
            
            {beer.tagline}
            
            {beer.first_brewed}
            
            {beer.description}
            
            <small class="text-muted">{beer.contributed_by}</small>
            </Card.Text>
          </Card.Body>
        </Card>
    </>
    )} 