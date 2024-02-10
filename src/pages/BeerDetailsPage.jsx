import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getBeerDetail } from "../services/beerService";

const BeerDetailsPage = () => {
    const { _id } = useParams()
    const [beer, setBeer] = useState(null)

    useEffect (() => {
        getBeerDetail(_id)
        .then(beerApi => {
            setBeer(beerApi)
        })
        .catch(err => {
            console.error(err)
        })
    }, [_id])

    if (!beer) return 'Loading...'

    return (
        <div className="container">
  <center><img src={beer.image_url} className="img-card" alt={beer.name} /></center>
  <div key={beer._id} className="card-body">
    <h5 className="card-title">{beer.name}</h5>
    <p className="card-text">{beer.tagline}</p>
    <p className="card-text">{beer.first_brewed}</p>
    <p className="card-text">{beer.attenuation_level}</p>
    <p className="card-text">{beer.description}</p>
    <p className="card-text">{beer.contributed_by}</p>
  </div>
</div>
    )
}

export default BeerDetailsPage;
