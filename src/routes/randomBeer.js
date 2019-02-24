import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import beerService from '../services/beerService';
import SingleBeerView from '../components/SingleBeerView/SingleBeerView';


export default class RandomBeer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
        this.beerService = new beerService();
        this.getRandomBeer();
    }

    getRandomBeer = () => {
        this.beerService.getRandomBeer()
            .then(beerData => {
                this.setState({ ...this.state, beer: beerData[0] })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="container">
                < NavBar />
                <SingleBeerView {...this.state.beer}/>
            </div>
        )
    }
}
