import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



function AllBeers() {
    const [allbeers, setBeers] = useState([]);
  
    useEffect(() => {
      
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
          setBeers(response.data);
        })
        .catch(error => {
          console.error('Error fetching beers:', error);
        });
    }, []);


  
    return (
      <div>
        <ul>
          {allbeers.map(beer => (
            <div>
            <ul key={beer._id}> 
                <img src={beer.image_url} alt="beerimage" style={{width:"50px"}}/>
                <ul>{beer.name}</ul>
                <ul>{beer.tag}</ul>
                <ul>{beer.contributed_by}</ul>
            </ul>
            <br></br>
                <div>
                    <Link to={`/beers/${beer._id}`}>Details</Link>
                </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
  
  export default AllBeers;



