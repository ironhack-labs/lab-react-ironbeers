import React from "react"
import { Link } from 'react-router-dom'

const BeerCard = ({name, image, tagline, contributedBy}) => {
  return(
    <p>{name}</p>
  )
}

export default BeerCard