import React from 'react';
import { Template } from '../../templates';
import apiService from '../../api/service';
import Beer from '../../components/beer/Beer'

class Beers extends React.Component {
    state = {
        beers: []
    }

    render() {
        return (
            <Template>
                {this.fillBeers()}
            </Template>
        );
    }

    fillBeers = () => {
        return this.state.beers.map((beer, index) => {
            return <Beer key={index} beer={beer} />
        });
    }

    async componentDidMount() {
        const beers = await apiService.listBeers();
        this.setState({ beers });
    }

}

export default Beers;