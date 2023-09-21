import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListBeers() {
  const [beers, setBeers] = useState(null)
  const [search, setSearch] = useState(null)

  useEffect(() => {
    if (!search) {
      console.log('no search')
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(result => {
        let myBeers = [...result.data]
        setBeers(myBeers)
      })
    } 
    else {
      console.log('a search')
      axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(result => {
        let myBeers = [...result.data]
        let filteredBeers = []
        myBeers.forEach(beer => {
          if (beer.name.includes(search)) {
            console.log(beer)
            filteredBeers.push(beer)
          }
        })
        setBeers(filteredBeers)
      })
    }
  },)

  function updateBeers(keys) {
    setSearch(keys)
  }

  return (
    <div>
      <Header></Header>
      <input onChange={e => updateBeers(e.target.value)}></input>
      {!beers && <p>Loading...</p>}
      {beers && (
        beers.map(beer => {
          return (
            <div className='listBeers'>
              <div className='listBeersLeft'>
              <Link to={`/beers/${beer._id}`}><img src={beer.image_url} alt='beer pic' /></Link>
              </div>
              <div className="listBeersRight">
              <Link to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link>
                <p>{beer.tagline}</p>
                <p><small>Contributed by: {beer.contributed_by}</small></p>
              </div>
            </div>
          )
        })
      )}
    
    </div>
  )
}

export default ListBeers