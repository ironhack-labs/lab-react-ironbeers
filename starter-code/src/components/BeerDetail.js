import React from 'react'
import Header from './Header'

export default function BeerDetail (props) {


const showDetails = () => {
  const beer = props.beers.find(beer =>{
    return beer._id === props.match.params.id
  })


  return(
    <div>
      <img style={{width:'100px'}} src={beer.image_url} alt=""/>
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>{beer.contributed_by}</p>
    </div>
  )
}
    return (
      <div>
        <Header/>
        {showDetails()}
      </div>
    )
  
}
