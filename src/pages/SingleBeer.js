import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function SingleBeer() {

    const { beerID } = useParams()
    const [singleBeer, setSingleBeer] = useState({})

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then((res) => {
            console.log(res.data)
            
            setSingleBeer(res.data.find((beer) => {
                return beer._id === beerID
            }))

        }).catch((err) => {
            console.log(err)
        })
    }, [beerID])


  return (
    <div>
        <img src={singleBeer.image_url} alt={singleBeer.name} />
        <h2>{singleBeer.name}</h2>
        <p>{singleBeer.tagline}</p>
        <p>{singleBeer.first_brewed}</p>
        <p>{singleBeer.attenuation_level}</p>
        <p>{singleBeer.description}</p>
        <p>{singleBeer.contributed_by}</p>
    </div>
  )
}

export default SingleBeer