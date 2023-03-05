import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function AllBeers() {

  const [beers, setBeers] = useState([])

  const getBeers = async () => {
    try {
      let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')

      setBeers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getBeers()
  }, [])

  return (
    <div>
      <h1>All Our Beers</h1>
      {beers.map((beer) => (
        <div>
          <img src={beer.image_url} alt="picture of beer" height={"200px"} />
          <h4>{beer.name}</h4>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>See more</Link>
        </div>
      ))}{" "}
    </div>
  );
}

export default AllBeers