import React from 'react'
import './BeerCard.css';
import Header from './Header';

function BeerCard(props) {
        return (
                <div>
                        <Header />
                        <div className='beer-card'>
                                <img src={props.image_url} />
                                <div className='beer-item__content'>
                                        <div>
                                                <h1>{props.name}</h1>
                                                <h1>{props.attenuation_level}</h1>
                                        </div>

                                        <div>
                                                <h3>{props.tagline}</h3><strong>{props.first_brewed}</strong>
                                        </div>

                                        <p>{props.description}</p>
                                        <p>{props.contributed_by}</p>
                                </div>

                        </div>
                </div>
        )
}

export default BeerCard
