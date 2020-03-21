import React, { useState, useEffect } from 'react';
import { getBeer } from '../service';
import { useParams } from "react-router-dom";

export const BeerDetails = () => {
    const [beer, setBeer] = useState();
    const { beerId } = useParams();

    useEffect(() => {
        getBeer(beerId).then(res => setBeer(res));
    }, []);

    return (
        <>
            {
                beer && <article className="beer-details">
                    <div className="beer-details__img-wrapper">
                        <img src={beer.image_url} width="110" alt="" />
                    </div>
                    <div className="beer-details__content">
                        <header className="beer-details__header">
                            <h1 className="beer-details__header__name">{beer.name}</h1>
                            <div className="beer-details__header__attenuation_level">{beer.attenuation_level}</div>
                            <div className="beer-details__header__tagline">{beer.tagline}</div>
                            <div className="beer-details__header__first-brewed">{beer.first_brewed}</div>
                        </header>
                        <div className="beer-details__body">
                            <p>{beer.description}</p>
                        </div>
                        <footer className="beer-details__footer">
                            <small>{beer.contributed_by}</small>
                        </footer>
                    </div>
                </article>
            }
        </>
    )
}



// { beer.image_url }
// { beer.name }
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by