import { useParams } from "react-router-dom";
import Header from "../components/Header";

function BeerDetail ({beers}) {
    const {beerId} = useParams(); 

    const foundBeer = beers.find((oneBeer) => {
        return oneBeer._id === beerId
    })
    return (
        <div>
            <Header/>
            <div className="card-detail">
                <img src={foundBeer.image_url} width="200px" alt=""/>
                <h3>{foundBeer.name}</h3> 
                <h4>{foundBeer.tagline}</h4> 
                <p>{foundBeer.first_brewed}</p>
                <p>{foundBeer.attenuation_level}</p>
                <p>{foundBeer.description}</p>
                <p>Created by: {foundBeer.contributed_by}</p> 
            </div>
        </div>
    )
}

export default BeerDetail;