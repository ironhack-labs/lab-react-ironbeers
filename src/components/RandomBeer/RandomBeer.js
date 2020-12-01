import React from 'react';
import NavBar from '../NavBar/NavBar';

function RandomBeer(props) {
    return (
        <div>
            <NavBar />
            <div>
                <img style={{height: '300px'}} src={RandomBeer.img_url} alt=""></img>
                <p>{props.randomBeer.name}</p>
                <p>{props.randomBeer.tagline}</p>
                <p>{props.randomBeer.description}</p>
            
            </div>
        </div>
    )
}

export default RandomBeer;
