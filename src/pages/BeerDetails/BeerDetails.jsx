import { useEffect, useState } from "react"
import beersService from "../../services/beers.service"
import { Link, useParams } from "react-router-dom"
import './BeerDetails.css'

function BeerDetails() {

    const [beerDetails, setBeerDetails] = useState()

    const { beer_id } = useParams()

    const loadBeer = () => {
        beersService
            .getOneBeer(beer_id)
            .then(({ data }) => {
                setBeerDetails(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeer()
    }, [beer_id])

    return (
        < >
            <h1>Beer Details</h1>
            {beerDetails &&
                <div >
                    <img className='my-3' src={beerDetails.image_url} alt="beer image" />
                    <h1>{beerDetails.name}</h1>
                    <p><span className='fw-bold'>Description:</span> {beerDetails.description}</p>
                    <hr />
                </div>
            }
            <Link className='btn btn-dark mb-3' to="/beers">Back to Beers List</Link>
        </>
    )
}

export default BeerDetails