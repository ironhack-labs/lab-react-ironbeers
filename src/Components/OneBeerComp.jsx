import React from 'react';
import {withRouter} from 'react-router-dom';

const OneBeerComp = (props) => {

    const handleClick = () => {
        props.history.push('/beers'); 
    }

    const {beer} = props;

    return (
        <div className="one-beer">
            <div className="img-container">
                <img src={beer.image_url} alt=""/>
            </div>
            <div className="beer-title-container">
                <div>
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                </div>
                <div>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.first_brewed}</p>
                </div>
            </div>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
            <button onClick={handleClick}>All beers</button>
        </div>
    )
}

export default withRouter(OneBeerComp);
