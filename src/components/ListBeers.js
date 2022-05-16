import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom"; 

function ListBeers() {

  const [beerArr, setBeerArr] = useState([]);
  const [search, setsearch] = useState('');
  const [results, setResults] = useState([])

  useEffect(()=> {

    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response =>{
        setBeerArr(response.data)
    })
    .catch(err => console.log(err))
  }, [])

  useEffect(()=>{

    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
    .then(response =>{
      setResults(response.data)
    })
    .catch(err => console.log(err))
  }, [search])

  const handleSearch = (event) => {
    setsearch(event.target.value)
  }

  return (
    <>
      <form>
        <label>Search</label>
        <input type="text" value={search} onChange={handleSearch}/>
      </form>
      {results.map(beer => {
        return(
          <div key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
            <img className="img" src={beer.image_url} alt="beer"/>
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.contributed_by}</p>
            <hr/>
          </Link>
          </div>
        )
      })}
    </>
  )
}
export default ListBeers 