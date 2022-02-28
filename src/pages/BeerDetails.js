import React from 'react'
import { useParams } from 'react-router-dom'
import HomePage from './HomePage'

export default function BeerDetails(props) {
  const params = useParams()
  const beerId = params.id

  return <h1>beer details</h1>
}
