import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom'
import axios from 'axios'
import ListCard from '../components/ListCard'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

export default function AllBeers(){
  const [beers, setBeers] = useState(null)

  useEffect(() => {
    async function getBeers(){
      const { data: results} = await axios.get(baseURL)
      console.log (results)
      setBeers(results)
    }
    getBeers()
    }, [])

  return (
    <div style={{padding: '5px 20px'}}>
      <h1>Beers</h1>
      {beers ? <div className='list-group'>
        {beers.map(beer => <Link to={`/beers/${beer._id}`} className='list-group-item list-group-item-action' key={beer._id}>
            <div style={{display:'flex', flexDirection: 'row', alignContent: 'center'}}>
              <div style={{width:'10%', minWidth: '100px', textAlign: 'center'}}>
                <img style={{height: '150px'}} src={beer.image_url} alt="beer"/>
              </div>
              <div>
                <h4>{beer.name}</h4>
                <br/>
                <p className='text-muted'>{beer.tagline}</p>
                <small><b>Created by: </b>{beer.contributed_by}</small>
              </div>
            </div>
          </Link>)}
      </div> : <p>Loading...</p>}
      {/* {beers ? <div className='list-group'>
        {beers.map(beer => <Link 
          to={`/beers/${beer._id}`} className='list-group-item list-group-item-action'>
        <ListCard 
          key={beer._id}
          name={beer.name}
          image={beer.image}
          tagline={beer.tagline}
          contributed_by={beer.contributed_by}
        />
        </Link>)}
        </div> : <p>Loading...</p>} */}
    </div>
  )
}