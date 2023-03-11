import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function SingleBeer() {
    const [beers, setBeers] = useState([])
    let { id }  = useParams();
    
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((result)=>{
            setBeers(result.data)
            console.log(id)
        })
        .catch(err=>console.log('Something wrong in one beer'))
    },[id])

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