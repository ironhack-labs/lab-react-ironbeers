import React from 'react'
import { Link } from 'react-router-dom'

function AllBeers() {
  return (
    <div style={{ display:'flex', flexDirection:'column',width:'600px', justifyContent:'center'}}>
       <img src={require('../beers.png')} alt="beers" />
    <Link style={{color:'black', padding:'10px', textDecoration:'none', fontSize:'40px', display:'flex'}} to={'/beers'}>All Beers</Link>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatum aliquid minima, rerum necessitatibus quos, error maxime quibusdam hic eaque debitis autem vel corrupti quo ut veritatis in aperiam illo!</p>
    </div>
  )
}

export default AllBeers