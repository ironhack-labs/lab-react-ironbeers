import React from 'react';

export default class BeerDetail extends React.Component {
    render() {
        let { name, tagline, first_brewed, attenuation_level, description, contributed_by, image_url } = this.props.beer;
        return(
            <div>
                <img src={image_url} alt={name}></img>
                <h1>{name}</h1>
                <h2>{tagline}</h2>
                <span>{first_brewed}</span>
                <br></br>
                <span>{attenuation_level}</span>
                <p>{description}</p>
                <p>Contributed by: {contributed_by}</p>
            </div>
        )
    }
}