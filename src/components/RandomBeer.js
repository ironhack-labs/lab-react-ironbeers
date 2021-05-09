import React from 'react';
import axios from 'axios';
import Beer from './Beer';
import Header from './Header';

export default class RandomBeer extends React.Component {
    state = {
        randomBeer: null
    }

    getRandomBeer = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    randomBeer: response.data
                })
            })
            .catch(err => console.log(err));
    }

    componentDidMount = () => {
        this.getRandomBeer();
    }



    render() {
        const randomBeer = this.state.randomBeer
        console.log(randomBeer)
        if (!randomBeer) return <h1>Loading...</h1>
        return (

            <div>
                <Header />
                <Beer beer={randomBeer} />
            </div>
        )
    }
}
