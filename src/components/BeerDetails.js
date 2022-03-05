import React from 'react';
import { useState, useEffect} from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import "./BeerDetails.css";

function BeerDetails() {

    const {BeerId} = useParams();

  const [selectedBeer, setSelectedBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${BeerId}`)
      .then((result) => {
        console.log(result.data);
        setSelectedBeer(result.data);
      })
      .catch( (ex) => {
        console.log(ex)
      });
  }, []);

  return (
    <>
    <div className="list-group">
        <div className="list-group-item list-group-item-action">
        <div><img src={selectedBeer.image_url}></img></div>
            <div></div> 
        <div className="name">{selectedBeer.name}</div>
        <div className="tagline">{selectedBeer.tagline}</div>
        <div className="firstBrewed">{selectedBeer.first_brewed}</div>
        <div className="attenuationLevel">{selectedBeer.attenuation_level}</div>
        <div className="description">{selectedBeer.description}</div>

        <div className="createdBy">created by: {selectedBeer.contributed_by}</div>
        </div>
      </div>
    </>
  );
}

export default BeerDetails;