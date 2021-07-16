import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class RandomBeer extends React.Component {
    state = {
        image: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: '',
        description: '',
        contributed_by: '',
    }


    async componentDidMount() {
        
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        console.log('checking', response.data)

        this.setState({
            image: response.data.image_url,
            name: response.data.name,
            tagline: response.data.tagline,
            first_brewed: response.data.first_brewed,
            attenuation_level: response.data.attenuation_level,
            description: response.data.description,
            contributed_by: response.data.contributed_by,

        })
    }

    

    render() {
        const { image, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state;
        return (
            <div>
                <img src={image} alt="beer" />
                <h3>{name}</h3>
                <p>{tagline}</p>
                <p>{first_brewed}</p>
                <p>{attenuation_level}</p>
                <p>{description}</p>
                <p>{contributed_by}</p>
            </div>
        )
    }
}

export default RandomBeer;