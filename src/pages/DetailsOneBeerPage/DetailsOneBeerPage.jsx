import './DetailsOneBeerPage.css'
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';


const DetailsOneBeerPage = () => {

    const [beers, setBeers] = useState([])
    useEffect(() => {
        fetch(' https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(beersData => setBeers(beersData))

    }, [])

    const { id } = useParams()
    const foundBeer = beers?.find(elm => elm._id === id)


    return (

        <section className="details">
            <img src={foundBeer?.image_url} alt='' />
            <h1> {foundBeer?.name}</h1>
            <p>{foundBeer?.tagline}</p>
            <p>Date:{foundBeer?.first_brewed}</p>
            <p>Nivel:{foundBeer?.attenuation_level}</p>
            <p>{foundBeer?.description}</p>
            <p>Create by:{foundBeer?.contributed_by}</p>
            <hr />
            <Link to={`/beers`}>
                <div className="d-grid">
                    <Button variant="dark" size="sm">Volver al Listado</Button>
                </div>
            </Link>
        </section>
    )
}

export default DetailsOneBeerPage