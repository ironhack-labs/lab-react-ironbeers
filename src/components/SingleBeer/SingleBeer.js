import React, { useState } from 'react';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Button } from 'antd';
import axios from 'axios';
import "./SingleBeer.css";

const SingleBeer = () => {
  const params = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        console.log('Info single-beer', response.data);
        setBeer(response.data);
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="SingleBeer">
        <Col>
          <Card style={{ width: 230, height: 300, margin: 10 }}>
            <img src={beer.image_url} height={60} alt="beer" />
            <div className="box">
              <h3>{beer.name}</h3>
              <span>{beer.attenuation_level}</span>
            </div>

            <div className="box">
              <h5>{beer.tagline}</h5>
              <span>{beer.first_brewed}</span>
            </div>

            <p>{beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default SingleBeer;


