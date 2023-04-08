import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Col } from "antd";


export default function ListBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/`)
      .then((response) => {
        setBeers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log("error getting beers from API", err));
  }, []);

  return (
    <div>
      <h1>Beers List</h1>
      <ul>
      
        {beers ? (
          beers.map((beer) => {

            return (
               
                      <Col key={beer._id}>
                      <Card >
                        <img src={beer.image_url} alt={beer.name} />
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>Created by {beer.contributed_by}</p>

                        <Link to={`/beers/${beer._id}`}> More Details </Link>
                        </Card>
                      </Col>
                 
            );
          })
        ) : (
          <p>Loading beers...</p>
        )}
    
      </ul>
    </div>
  );
}
