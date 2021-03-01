import React, {useEffect, useState} from 'react'

import axios from 'axios'

export default function RandomBeer() {
    

    const [beerDetails, setBeerDetails] = useState([])

    const getBeerDetails = async() => {
  
        let resServer = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')       
       
        setBeerDetails(resServer.data)
        console.log(resServer)
    }


    useEffect(() => {
        getBeerDetails()
    },[])


    return (
        <div>
            <img height='150px' src='{beerDetails.image_url}' alt={beerDetails.name}/>
           <p>{beerDetails.name}</p>
           <p>{beerDetails.tagline}</p>
           <p>{beerDetails.first_brewed}</p>
           <p>{beerDetails.attenuation_level}</p>
           <p>{beerDetails.description}</p>
           <p>{beerDetails.contributed_by}</p>
        </div>
    )
}
