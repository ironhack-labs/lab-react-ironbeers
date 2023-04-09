import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function RandomBeer(){
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect( () => {
        axios
            .get(process.env.REACT_APP_BASE_URL + "/random")
            .then( response => {
                setRandomBeer(response.data)
                console.log(response.data);
            })
            .catch( err => console.log("error getting random beer from API", err))
    }, [])

    const renderDetails = () => {

        return(
            <div className="card mb-3">
                <div className="img-container">
                    <img src={randomBeer.image_url} className="details-img" alt="..." />
                </div>
                <div className="card-body">
                    <div className="beer-detail">
                        <h5 className="card-title">{randomBeer.name}</h5>
                        <p className="grey">{randomBeer.attenuation_level}</p>
                    </div>
                    <div className="beer-detail">
                        <p className="grey">{randomBeer.tagline}</p>
                        <p>{randomBeer.first_brewed}</p>
                    </div>
                    <article>{randomBeer.description}</article>
                    <p className="card-text grey">{randomBeer.contributed_by}</p>
                </div>
            </div>
        )     
    }

    const resetRandom = () => {
        setRandomBeer(null)
    }

    return(
        <>
            <Header />
            <div className="container">
                {randomBeer ? 
                renderDetails() :
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden" >Loading...</span>
                </div>
                }
                <Link to="/" onClick={resetRandom}>back to Home</Link>
            </div>
        </>
    )
}

export default RandomBeer;