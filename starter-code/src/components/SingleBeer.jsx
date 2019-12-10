import React, { Component } from 'react';
import axios from 'axios';

export class SingleBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SingleBeer: []
        }
    }

    componentDidMount() {
        const idToFind = this.props.match.params.id
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + idToFind)
            .then(response => {
                this.setState({ SingleBeer: response.data });
            });
            
    }

    render() {
        const oneBeer = this.state.SingleBeer
        return (
            <div>
                <img className='beer-image' src={oneBeer.image_url} alt='oneBeer' />
                <h4>{oneBeer.name}</h4>
                <p>{oneBeer.tagline}</p>
                <p>{oneBeer.first_brewed}</p>
                <p>{oneBeer.attenuation_level}</p>
                <p>{oneBeer.description}</p>
                <p>Contributed by:{oneBeer.contributed_by}</p>
                )
            )}
            </div>

        )
    }
}

export default SingleBeer;
