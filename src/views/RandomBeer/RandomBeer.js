import { useState, useEffect } from "react";
import axios from 'axios';



const RandomBeer = () => {
    const [random, setRandom] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((randomResult) => {
                setRandom(randomResult.data);
            });
    }, []);

    return (
        <div className="container">
            {random ?
                (
                    <>
                        <img className="card-img-top w-25 h-75 d-inline-block mt-4" src={random.image_url} alt={random.name} />
                        <div className="bodyBeer">
                            <div className="d-flex justify-content-between">
                                <h1 className="text-start fs-3">{random.name}</h1>
                                <p className='fs-3 text-muted'>{random.attenuation_level}</p>

                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="text-muted me-4">{random.tagline}</p>
                                <p className='fs-8'><strong> {random.first_brewed} </strong></p>
                            </div>
                            <p className='text-start'>{random.description}</p>
                            <p className="text-start text-muted">{random.contributed_by}</p>
                        </div>

                    </>
                ) :
                loading}
        </div>
    );
};

export default RandomBeer;