import React from 'react';
import axios from 'axios';
import '../App.css';

class BeerDetails extends React.Component {

    state = {
        randomBeer: null,
        allBeers: []
    }

    getRandom = () => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/")
            .then(res => {
                this.setState({
                    allBeers: res.data
                })
            const randomNo = Math.floor(Math.random() * Math.floor(this.state.allBeers.length))
            const randomBeer = this.state.allBeers[randomNo]
            this.setState({
                randomBeer: randomBeer
            })
        })
    }
    
    componentDidMount() {
        this.getRandom()
    }

    render() {
        if (!this.state.randomBeer) return <></>;
        return (
            <div className="container">
                <div className="thumbnail">
                    <img className="img-fluid" id="thumb-img" src={ this.state.randomBeer.image_url } alt="..." />
                    <div className="caption">
                        <h3>{ this.state.randomBeer.name}</h3>
                        <p>{ this.state.randomBeer.tagline }</p>
                        <p>{ this.state.randomBeer.first_brewed }</p>
                        <p>{ this.state.randomBeer.attenuation_level }</p>
                        <p>{ this.state.randomBeer.description }</p>
                        <p>{ this.state.randomBeer.contributed_by }</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default BeerDetails;