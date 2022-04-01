import react, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { beerDetail, randomBeer } from "../../services/BeersService";

import './BeerDetail.css'

const BeerDetail = () => {
    const { id } = useParams()
    const [beer, setBeer] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            beerDetail(id)
                .then(beerFound =>  {
                    setBeer(beerFound)
                    setLoading(false)   
                })
        } else {
            randomBeer()
                .then(beerFound => {
                    setBeer(beerFound)
                    setLoading(false)
            })
        }
    }, [])


    return (
        <div>
            {loading ? <p className="loading">Loading...</p> : 
                <div key={beer.id} className="beer-div">
                    <img src={beer.image_url} alt={beer.name} className="detail-img" />
                
                    <div className="beer-info">
                        <h3 className="detail-name">{beer.name}</h3>
                        <h4 className="detail-tagline">{beer.tagline}</h4>
                        <p className="detail-description">{beer.description}</p>
                        <p><strong>Created by: </strong>{beer.contributed_by}</p>
                    </div>
                </div>
            
            }
        </div>
    )
}

export default BeerDetail