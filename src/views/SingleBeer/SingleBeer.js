import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { listSingleBeer, randomBeer } from '../../services/listBeersService';
import Navbar from './../../components/Navbar/Navbar';
import './SingleBeer.css';

const SingleBeer = () => {
    const {id} = useParams();
    const [beer, setBeer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(id){
            listSingleBeer(id)
                .then(beer => {
                    setIsLoading(false);
                    setBeer(beer);
                })
                .catch(e => console.error(e));
        } else {
            randomBeer()
                .then(beer => {
                    setIsLoading(false);
                    setBeer(beer);
                })
                .catch(e => console.error(e));
        }
    }, [id]);

    return (
        <>
            <Navbar />
            { isLoading ? 
                'Loading...'
                : (
                    <div className="beer-details-div">
                        <img src={beer.image_url} alt="" />
                        <div>
                            <div className="single-beer-info">
                                <h3>{beer.name}</h3>
                                <h4>{beer.tagline}</h4>
                            </div>
                            <div className="beer-details-number">
                                <h2>{beer.attenuation_level}</h2>
                                <h5>{beer.first_brewed}</h5>
                            </div>
                        </div>
                        <p>{beer.description}</p>
                        <h6>{beer.contributed_by}</h6>
                    </div>
                )
            }
        </>      
    );
};

export default SingleBeer;