import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from '../Header/Header'

const Beer = (props) => {
    const [beers, setBeers] = useState({})

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
        .then((beersResults) => {
            console.log(beersResults)
            setBeers(beersResults.data)
        })
        .catch((err) => {console.error(err)})
    },[])
   
    return(
       <div>
       <Header />
        <img src={beers.image_url} alt="beer" />
        <h1>{beers.name}</h1>
        <p>{beers.tagline}</p>
        <p>{beers.description}</p>
       </div>
    )
}

export default Beer;