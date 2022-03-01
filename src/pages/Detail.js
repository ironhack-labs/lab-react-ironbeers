import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
// import { get } from 'express/lib/response';

export default function Detail(props) {
const [beer, setBeer] = useState(null);

//call Hook
const params = useParams()
// saves the :id from the URL in beerId
const beerId = params.id
console.log(beerId)

useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                console.log('response.data', response.data)
                setBeer(response.data)
            })
            .catch((error) => console.log(error))
    }, [])

    // const detailsBeer = getBeer.find(beer => beer._id === beerId)

    return (
    <>
    <header><a href="/">Home</a></header>
    <div>
        {beer && (
            <div key={beer._id}>
            <img src={beer.image_url} alt="Bierflasche" />
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <h3>{beer.first_brewed}</h3>
            <h3>{beer.attenuation_level}</h3>
            <p>{beer.description}</p>
            <h4>Created by: {beer.contributed_by}</h4>
            </div>
        )}
    </div>
    </>
  )
}
