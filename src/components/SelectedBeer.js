import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header' 

function SelectedBeer(props) {
     const [selectedBeer, setBeerState] = useState({})
     const beerInfo = props.match.params.beerId

     useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerInfo}`)
        .then(selectedBeer => {
            setBeerState(selectedBeer.data)
        })
        .catch((error)=> "Error while fetching the beer from API")
       })
     
    
    return (
        <div>
            <h1>Selected Beer</h1>
            <Header/>
                <div className="beer-card">
                <img src={selectedBeer.image_url} alt="beerimage" className="beer-image"/>
                   <div className="beer-card">{selectedBeer.name}</div>
                   <div className="beer-card">{selectedBeer.tagline}</div>
                   <div className="beer-card">{selectedBeer.first_brewed}</div>   
                   <div className="beer-card">{selectedBeer.attenuation_level}</div>
                   <div className="beer-card">{selectedBeer.description}</div>
                   <div className="beer-card">{selectedBeer.contributed_by}</div>
                   <br/>
                   <br/>                   
                </div>

            
            
        </div>
    )
}

export default SelectedBeer
