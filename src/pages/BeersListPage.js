import Header from "../components/Header";

import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import axios from "axios";

function BeersListPage(){

  const [beerArray, setBeerArray] = useState([])

  useEffect(() => {

    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response.data)
        setBeerArray(response.data)
      })
      .catch(err => console.log(err))

  }, [])

  return (
    <>
      <Header />
      <h1>All the beers</h1>
      {beerArray.map(individualBeer => {
        return (
          <Link 
            to={`/beers/${individualBeer._id}`}
            style={{
              textDecoration: 'none'
            }}
            key={individualBeer._id}
          >
            <div style={{
              display: 'flex',
              padding: '20px 10px'
            }}>
              <div
                style={{
                  backgroundImage: `url(${individualBeer.image_url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  height: '150px',
                  flex: 1
                }}
              ></div>
              <div style={{
                flex: 3,
                textAlign: 'left',
                paddingLeft: '10px'
              }}>
                <h3 style={{
                  color: 'black'
                }}>{individualBeer.name}</h3>
                <p
                  style={{
                    color: 'gray'
                  }}
                >{individualBeer.tagline}</p>
                <small
                  style={{
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                >Created by: {individualBeer.contributed_by}</small>
              </div>
            </div>
          </Link>
          
        )
      })}
    </>
    
  );
}

export default BeersListPage;