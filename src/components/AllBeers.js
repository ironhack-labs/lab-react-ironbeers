import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeers() {

  const [selectedBeers, setSelectedBeers] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        console.log(result.data);
        setSelectedBeers(result.data);
      })
      .catch( (ex) => {
        console.log(ex)
      });
  }, []);

  return (
    <>
    <header className="App-header">
    </header>
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
    <div className="list-group">
      {/* { 
        selectedBeers.map( (element, index) => {
          return (
            <>
            <div>
            <div><img src={element.image_url}></img></div>
              <div><a key={index} className="list-group-item list-group-item-action" href='/{element.id}'></a></div> {element.name}</div>
            <div>{element.tagline}</div>
            <div>Created by: {element.contributed_by}</div>
            </>
          )
        })
      } */}
      </div>
    </div>
    </>
  );
}

export default AllBeers;