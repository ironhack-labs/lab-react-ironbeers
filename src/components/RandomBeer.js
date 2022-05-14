// a page to display a random beer 

import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'

function RandomBeer(props)  {

const beerArr = props.beersList

function randomBeer(beer) {
    return (beer[Math.floor(Math.random() * beerArr.length)])
}


const beer = randomBeer(beerArr)
console.log("The beer details are .....", beer)

const renderBeerDetails = () =>{
    return(
        <div class="card mb-3 " style={{ maxwidth: "540px" }} key={beer._id}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={beer.image_url}
              class="img-fluid rounded-start"
              alt={beer.name}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
            <div className="card-titles"><h5 class="card-title-right text-muted">{beer.attenuation_level}</h5>             
              <h6 class="card-title-right text-muted">{beer.first_brewed}</h6></div>
              <h5 class="card-title">{beer.name}{beer.attenuation_level}</h5> 
              <p class="card-text">{beer.tagline}</p>
              
              <p class="card-text">{beer.description}                
              </p><small class="text-muted">Contributed By{beer.contributed_by}</small>
              <br />
              <Link to={`/beers`}>Back to Beers</Link>
            </div>
          </div>
        </div>
      </div>
    )
}


  return (
    <>
      <Header/>
        <div>{beer ? renderBeerDetails() : <p> Loading.....</p>}</div>
     
    </>
  )
}

export default RandomBeer