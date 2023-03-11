import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function SingleBeer() {
    const [beers, setBeers] = useState([])
    let { beerId }  = useParams();
    
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((result)=>{
            setBeers(result.data)
            console.log(beerId)
        })
        .catch(err=>console.log('Something wrong in one beer'))
    },[beerId])

    return(
        <div>
            <div key={beers._id}>
                <img src={beers.image_url} alt="one beer" />
                <h3>{beers.name}</h3>
                <p>{beers.tagline}</p>
                <p>First brewed: {beers.first_brewed}</p>
                <p>{beers.attenuation_level}</p>
                <p>{beers.description}</p>
                <span>Created by: {beers.contributed_by}</span>


            </div>
            
  
  
        </div>
    )
}

export default SingleBeer;