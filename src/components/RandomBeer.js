import { useState, useEffect } from "react";
import axios from "axios";

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_APIURL}/random`)
            .then( response => {
                setRandomBeer(response.data);
            })
            .catch( e => {
                console.error('Error getting a random beer: ', e);
            })
    }, []);

    const renderBeer = () => {
        return(
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src={randomBeer.image_url} alt={randomBeer.name} style={{width:'100px', marginTop:'50px'}} />
                </div>
            </div>
            <div className="row">
                <div className="col-8 mt-5 text-white text-start">
                    <h2 className="fw-bolder">{randomBeer.name}</h2>
                    <p className="fw-bold fst-italic">{randomBeer.tagline}</p>
                </div>
                <div className="col-4 mt-5 text-end text-light">
                    <h2>{randomBeer.attenuation_level}</h2>
                    <p>{randomBeer.first_brewed}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-start text-light">
                    <p>{randomBeer.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-light">
                    <p>{randomBeer.contributed_by}</p>
                </div>
            </div>
        </div> 
        )
    }

    return (
        <>
            {randomBeer
            ? renderBeer()
            : <div className="spinner-border text-info mt-5"></div>
            }
        </>
    )

};

export default RandomBeer;