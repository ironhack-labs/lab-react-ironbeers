import React from 'react'
import NavBar from '../Navbar/NavBar';

export default function RandomBeer(props) {
    // console.log(props.randomBeer)
    return (
        <div>
            <NavBar />
            <div>
                <img style={{height: "200px"}} src={props.randomBeer.image_url} alt=""></img>
                <p>{props.randomBeer.name}</p>
                <p>{props.randomBeer.tagline}</p>
                <p>{props.randomBeer.first_brewed}</p>
                <p>{props.randomBeer.attenuation_level}</p>
                <p>{props.randomBeer.description}</p>
                <p>Created by: {props.randomBeer.contributed_by}</p>
            </div>
        </div>
    )
}
