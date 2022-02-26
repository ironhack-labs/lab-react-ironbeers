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
            .get(`https://ih-beers-api2.herokuapp.com/`, {beerId})
            .then((response) => {
                response.findById(beerId)
                .then((beerById) => {
                    console.log(beer)
                })
                console.log('response.data', response.data)
                const oneBeer = response.data
                setBeer(oneBeer)
            })
            .catch((error) => console.log(error))
    })

    // const detailsBeer = getBeer.find(beer => beer._id === beerId)

    return (
    <>
    <header><a href="/">Home</a></header>
    <div>
        {beer && (
            <div key={beer._id}>
            <img src={beer.image_url} alt="Bierflasche" />
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
            <h4>Created by: {beer.contributed_by}</h4>
            </div>
        )}
    </div>
    </>
  )
}
