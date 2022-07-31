import { Header } from "./Header"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { fetchWrapper } from "../function/fetchWrapper";

export const BeerDetails = ({beerData}) => {

    const { beerId } = useParams();

    const [ beer, setBeer ] = useState(beerData);

    useEffect(() => {
        if(!beerData){
            fetchWrapper(process.env.REACT_APP_API_BASE_URL + "/beers/" + beerId)
            .then((data) => setBeer(data))
        }
    }, [beerId, beerData])
 
    const renderBeer = () => {
            return (
                    <div className="SingleBeer">
                        <img src={beer.image_url} alt={beer.name}/>
                        <div className="beer-info">
                            <h1>{beer.name}</h1>
                            <p className="tagline">{beer.tagline}</p>
                            <p>{beer.first_brewed}</p>
                            <p>{beer.attenuation_level}</p>
                            <p>{beer.description}</p>
                            <p>{beer.contributed_by}</p>
                        </div>

                    </div>
            )
    }

    return (
        <>
        <Header/>

        {!beer
        ? <p>loading...</p>
        : renderBeer()
        }
        </>
    )
}