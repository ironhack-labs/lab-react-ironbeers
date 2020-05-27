import React from 'react';
import apiService from '../../api/service';
import { Template } from '../../templates';

class BeerDetail extends React.Component {
    state = {
        beer: {}
    }

    render() {
        const { beer } = this.state
        return (
            <Template>
                <img src={beer.image_url} alt={beer.name} />
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </Template>
        );
    }

    async componentDidMount() {
        let beer;
        if (this.props.isRandom) {
            beer = await apiService.getRandomBeer();
        } else {
            beer = await apiService.getBeer(this.props.match.params.id);
        }
        this.setState({ beer });
    }
}

export default BeerDetail;
