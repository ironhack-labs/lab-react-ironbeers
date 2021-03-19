import React from 'react';
import axios from 'axios';
import OneBeerComp from './../Components/OneBeerComp';

class RandomBeer extends React.Component {
    state = {
        randomBeer:null
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(res => this.setState({randomBeer:res.data}))
        .catch(err => console.log(err));
    }

    render() {
        const {randomBeer} = this.state

        return (
            <div>
                {randomBeer && 
                    <OneBeerComp beer={randomBeer}/>
                }
            </div>
        )
    }
}

export default RandomBeer
