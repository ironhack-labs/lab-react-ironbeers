import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import beerService from '../services/beerService';
import SingleBeerView from '../components/SingleBeerView/SingleBeerView';


export default class SingleBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
        this.beerService = new beerService();
        this.getSingleBeer();
    }

    getSingleBeer = () => {
        this.beerService.getSingleBeer(this.props.match.params.id)
            .then(beerData => {
                this.setState({ ...this.state, beer: beerData })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="container">
                < NavBar />
                <SingleBeerView {...this.state.beer} />
            </div>
        )
    }
}
