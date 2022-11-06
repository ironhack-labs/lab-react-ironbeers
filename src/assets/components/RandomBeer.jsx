import React from 'react'
import { Link } from 'react-router-dom'

function RandomBeer() {
  return (
    <div style={{ display:'flex', flexDirection:'column',width:'600px', justifyContent:'center'}}>
    <img src={require('../random-beer.png')} alt="RandomBeer" />
    <Link style={{color:'black', padding:'10px', textDecoration:'none', fontSize:'40px', display:'flex'}} to={'/random-beer'}>Random Beer</Link>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt obcaecati ut eum iusto reiciendis, error non sed dignissimos autem ipsum delectus mollitia nisi fuga tenetur beatae repudiandae iure blanditiis?</p>
    </div>
  )
}

export default RandomBeer