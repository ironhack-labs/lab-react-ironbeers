 import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import 

/* import beerData from "./Beers" */
function BeersDetails({ beers }) {

const [beerDetails, setBeerDetails] = useState (null)

const { beerId } = useParams()

const foundBeer = async () => {
  const filteredBeer = await beers.filer ((beer) => {
    return beer._id === beerId 
  })
  setBeerDetails(filteredBeer[0])
}

useEffect(() => {
  foundBeer();
}, []);

  return (
    <div className="details">
        <h2> Beer details</h2>
        {beerDetails && (
            <>
                <h3>{beerDetails.name}</h3>
                 <p>{beerDetails.img_url}</p>
                 <p>{beerDetails.tagline}</p>
                 <p>{beerDetails.first_brewed}</p>
                 <p>{beerDetails.attenuation_level}</p>
                 <p>{beerDetails.description}</p>
                 <p>{beerDetails.contributed_by}</p>
            </>
        )}
 <Link to='/beers'>Back to beers</Link>
    </div> 
  )
}

export default BeersDetails 