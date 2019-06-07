import React from 'react'
import Header from '../components/header'
import CardDetails from '../components/card-detail'

import { Link } from 'react-router-dom'
import queryString from 'query-string'




const BeerDetails = (props) => {

  const beer_id = props.match.params.beer_id
  const qString = queryString.parse(props.location.search)

  return (

    <div>

      <Header />

      <CardDetails
        image={qString.image}
        name={qString.name}
        tagline={qString.tagline}
        first_brewed={qString.first_brewed}
        attenuation_level={qString.attenuation_level}
        description={qString.description}
        contributed_by={qString.contributed_by} />

    </div>


  )
}

export default BeerDetails