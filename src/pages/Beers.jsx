import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const BeerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const BeerCard = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  background-color: #f7f7f7;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1rem;
    color: #777;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;


function Beers() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                setBeers(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <Header></Header>
            <BeerListContainer>
            {beers.map((oneBeer) => {
                return (
                    <BeerCard key={oneBeer._id}>

                    <Link to={oneBeer._id}>
                        <ul>
                            <img src={oneBeer.image_url} alt="" style={{ width: 60 }} />
                            <h2>{oneBeer.name}</h2>
                            <h3>{oneBeer.tagline}</h3>
                            <p>Created by: {oneBeer.contributed_by}</p>
                        </ul>
                    </Link>

                    </BeerCard>
                )
            })}
            </BeerListContainer>
        </>
    )
}

export default Beers