import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function SingleBeer(props) {
    const { id } = useParams();

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL)
            .then((res) => {
                setBeers(res.data);
            })
            .catch((err) => {
                console.log("error getting beers from API", err);
            })
    }, [])

    const singleBeer = beers.find((beerDetails) => {
        return beerDetails._id == id;
    })

    console.log(singleBeer);

    const renderInfo = (beer) => {
        return (
            <div className="singleBeerCard">
                <img src={beer?.image_url} alt="" />
                <div className="beerText">
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <h3>{beer.attenuation_level}</h3>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.description}</p>
                    <p><strong>Created by: </strong>{beer.contributed_by}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header />
            {!singleBeer
                ? <h1>Loading...</h1>
                : renderInfo(singleBeer)
           }
        </div>
    )
}

export default SingleBeer;