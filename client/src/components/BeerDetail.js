import React from 'react'
// import queryString from 'query-string'
import Nav from './Nav';
import Beers from './Beers';

const BeerDetail = props => {

  let foundBeer = props.match.params.id
  console.log(props)

  return (
    <div>
      <Nav />
      <p>Hola</p>
    </div>
  )
}

export default BeerDetail
