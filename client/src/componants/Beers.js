import React, { useEffect, useState } from 'react'
import Header from './elements/Header';
import axios from "axios";
import { Link } from "react-router-dom";
import {Form} from 'react-bootstrap';


export default function Beers() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState('');


  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => {
        
        setBeers(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then(res => {
        setBeers(res.data);
      })
      .catch(err => console.log(err));
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
  };

    return ( 
    <div>
        <Header/>
        <Form>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="query">Search Beers</Form.Label>
              <Form.Control 
              type="search" value={query} name="query" id="query"
              onChange={handleSearch} 
              />
            </Form.Group>
          </Form>
        <div>
            {beers.map(beer => (
            <div key={beer._id}>
                <div>
                    <img  height='200px' src={beer.image_url} alt={beer.name} />
                </div>
                <div>             
                  <Link to={`/beers/${beer._id}`}>
                      <h3>{beer.name}</h3>
                  </Link>
                  <h4><small className="text-muted">{beer.tagline}</small></h4>
                  <p>Created by: {beer.contributed_by}</p>                 
                </div>
            </div>
                )
            )}
        </div>
    </div>
    )
} 