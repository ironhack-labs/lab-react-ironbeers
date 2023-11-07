import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const beerAPI = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage() {
    const {beerId} = useParams()
    const [beer, setBeer] = useState([''])

    useEffect(()=>{
        axios.get(`${beerAPI}/${beerId}?_embed=tasks`).then((response)=>{
            setBeer(response.data)
            console.log(beer)
        })
    }, [])

    return (<div>
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <img src={beer.image_url} alt={beer.name} 
                    style={{width:"50px"}}/>
                <p>{beer.description}</p>
                <h2>Brewing Tips</h2>
                <p>{beer.brewers_tips}</p>
                <p><i>{beer.contributed_by}</i></p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
    </div>)
}

export default BeerDetailsPage;
