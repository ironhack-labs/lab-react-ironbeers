import React from 'react'
import {useParams,Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import BeerService from '../services/beerServices'
import {Container,Button,Row} from "react-bootstrap"


 function BeerDetails() {
     const [BeerDetails,setBeerDetails]=useState([])
     const {BeerId}= useParams()
     console.log(BeerId)
     useEffect(()=>{
         BeerService
             .getOneBeer()
             .then(({ data }) => setBeerDetails(data))
             .catch((err)=>console.log(err))
     },[])
     
  return (
      <>   
          <header className='header'>
              <Link to="/">
                  <img src="/assets/images.png" />
              </Link>
          </header>
      <Container>
          <Row className='Birra'>
<              img src={BeerDetails.image_url} alt="beer imagen"/>
              <h3>{BeerDetails.name}</h3>
              <h4>{BeerDetails.tagline}</h4>
              <hr></hr>
              <h4>{BeerDetails.abv}</h4>
              <hr></hr>
              <p>{BeerDetails.description}</p>
              <Link to="/BeerList"> <Button variant="warning">Back</Button></Link>
          </Row>
      </Container>
      </> 
  )
}
export default BeerDetails