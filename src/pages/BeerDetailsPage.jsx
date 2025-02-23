import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function BeerDetailsPage() {

    const [beer, setBeer] = useState(null)

    const { beerId } = useParams()

    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((oneBeer) => {
            setBeer(oneBeer.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [beerId])

    return (
        <div className='beer-details'>
            {beer && (
                    <div key={beer._id}>
                        <img src={beer.image_url} alt={beer.name} height='250' />
                        <div>
                            <h2>{beer.name}</h2>
                            <h4>{beer.tagline}</h4>
                        </div>
                        <div>
                            <h2>{beer.attenuation_level}</h2>
                            <h4>{beer.first_brewed}</h4>
                        </div>
                        <p>{beer.description}</p>
                        <h6>{beer.contributed_by}</h6>
                    </div>
                )
            }
        </div>
    )
}

export default BeerDetailsPage;
