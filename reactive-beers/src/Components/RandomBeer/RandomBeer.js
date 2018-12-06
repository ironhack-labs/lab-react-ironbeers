import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from "./Components/Header/Header.js"

class RandomBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomBeer: null
        }
    }
    getBeerInfo = () => {
        axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
            .then(responseFromApi => {
                console.log(responseFromApi.data[0])
                this.setState({
                    randomBeer: responseFromApi.data[0]
                })
            })
    }
    componentWillMount() {
        this.getBeerInfo();
    }
    render() {
        // <Header></Header> 
        if (this.state.randomBeer) {
            return (<div>
                <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                    <div style={{ width: '33%' }}>
                        <img src={this.state.randomBeer.image_url} style={{ width: '20%', height: '40%' }} />
                        <h1>{this.state.randomBeer.name}</h1>
                        <h2>{this.state.randomBeer.tagline}</h2>
                        <p>
                            <p>First brewed: {this.state.randomBeer.first_brewed}</p>
                            <p>Attenuation level: {this.state.randomBeer.attenuation_level}</p>{this.state.randomBeer.description}</p>
                        <p>{this.state.randomBeer.contributed_by}</p>
                    </div>
                </div>
            </div>)
        } else {
            return <p>The IronBeers are on their way</p>
        }

    }
}

export default RandomBeer;