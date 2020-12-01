import React, {useState, useEffect} from 'react'
import Header from './header'
import axios from 'axios'


function Randombeer() {
    const [randomBeerInfo, setRandomBeerState] = useState({})
    
    useEffect(() => {
       axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
       .then(randomBeerInfo => {
           console.log(randomBeerInfo);
           setRandomBeerState(randomBeerInfo.data)
       })
       .catch((error)=> "Error while fetching the beer from API")
      })
    
   
   return (
       <div>
           <h1>Selected Beer</h1>
           <Header/>
               <div className="beer-card">
               <img src={randomBeerInfo.image_url} alt="beerimage" className="beer-image"/>
                  <div className="beer-card">{randomBeerInfo.name}</div>
                  <div className="beer-card">{randomBeerInfo.tagline}</div>
                  <div className="beer-card">{randomBeerInfo.first_brewed}</div>   
                  <div className="beer-card">{randomBeerInfo.attenuation_level}</div>
                  <div className="beer-card">{randomBeerInfo.description}</div>
                  <div className="beer-card">{randomBeerInfo.contributed_by}</div>
                  <br/>
                  <br/>                   
               </div>

           
           
       </div>
   )
}

export default Randombeer
