import React from 'react'
import { Link } from 'react-router-dom'

function NewBeer() {
  return (
    <div style={{ display:'flex', flexDirection:'column',width:'600px', justifyContent:'center'}}>
    <img src={require('../new-beer.png')} alt="NewBeer" />
    <Link style={{color:'black', padding:'10px', textDecoration:'none', fontSize:'40px', display:'flex'}} to={'/new-beer'}>New Beer</Link>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic odio dolores rerum molestiae architecto sint officia praesentium ea saepe ipsum nemo ullam quidem quod animi, rem quo quis molestias.</p>
    </div>
  )
}

export default NewBeer