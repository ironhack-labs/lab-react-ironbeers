import { useEffect, useState, } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

function BeerDetails(){
    const [beer, setBeer] = useState(null);

    const { beerId } = useParams();
    console.log(beerId);
    
    useEffect( () => {
        axios
            .get(process.env.REACT_APP_BASE_URL + "/" + beerId)
            .then( response => {
                console.log(response);
                setBeer(response.data);
            })
            .catch( err => console.log("error getting specific beer", err))
    }, [])

    const renderDetails = () => {
        return(
            <div className="card mb-3">
            <img src={beer.image_url} class="details-img" alt="..." />
            <div className="card-body">
                <div className="beer-detail">
                    <h5 className="card-title">{beer.name}</h5>
                    <p className="grey">{beer.attenuation_level}</p>
                </div>
                <div className="beer-detail">
                    <p className="grey">{beer.tagline}</p>
                    <article>{beer.first_brewed}</article>
                </div>
                <article>{beer.description}</article>
                <p className="card-text grey">{beer.contributed_by}</p>
            </div>
        </div>
        )     
    

  
    }

    return(
        <>
            <Header />
                <div className="container">

                    {beer ?
                    renderDetails() :
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden" >Loading...</span>
                    </div>
                    }
                    <Link to="/beers">back to the beers list</Link>
                </div>
        </>



    )
}

export default BeerDetails;