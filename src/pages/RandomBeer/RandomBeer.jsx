import { useEffect, useState } from "react"
import beersService from "../../services/beers.service"
import { Button } from 'react-bootstrap'
import './RandomBeer.css'

function RandomBeer() {

    const [randomBeer, setrandomBeer] = useState([])

    const loadBeer = () => {
        beersService
            .getRandomBeer()
            .then(({ data }) => {
                setrandomBeer(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeer()
    }, [])

    return (
        < >
            <h1>A Random Beer</h1>
            {randomBeer &&
                <div className="RandomBeer">
                    <img className='my-3' src={randomBeer.image_url} alt="beer image" />
                    <h1>{randomBeer.name}</h1>
                    <p><span className='fw-bold'>Description:</span> {randomBeer.description}</p>
                    <hr />
                </div>
            }
            <Button className='btn btn-dark mb-3' onClick={loadBeer} variant="dark" >Give me another one</Button>
        </>
    )
}

export default RandomBeer