import React, { useEffect, useState } from 'react';
import axios from 'axios';

    const RandomBeer = () => {
        let [ randomBeer, setRandomBeer ] = useState({});

        useEffect(() => {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((resApi) => {
                setRandomBeer(resApi.data);
                });
            },
        []);

        return (
            <div className="random-beer">
                <div>
                    <img src={randomBeer.image_url} />
                </div>
                    <div>
                        <h2>{randomBeer.name}</h2>
                    </div>
                <div>
                    <p>{randomBeer.description}</p>
                </div>
                   
            </div>
        );
};

export default RandomBeer;