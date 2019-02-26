import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
    constructor() {
        super()
        this.state = { beers: [] }
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
            .then(response => {
                const randomBeerChosen = response.data[Math.floor(Math.random() * response.data.length)]
                this.setState({ beers: randomBeerChosen })
            })
    }


    render() {

        return (
            <div className="">
                <h3 className='all-beers-title'>Random beer</h3>
                <img className='img-random-beer' src={this.state.beers.image_url} />
                <div className='row'>
                    <div className='col-3'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item beer-title">{this.state.beers.name}</li>
                        </ul>
                    </div>
                    <div className='col-3'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{this.state.beers.tagline}</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item desc">{this.state.beers.description}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default RandomBeer;
