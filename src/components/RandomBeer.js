import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class RandomBeer extends Component {
    state = {
        randomBeer: null
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((randomBeer) => {
            this.setState({
                randomBeer: randomBeer.data
            });
            // console.log(randomBeer.data);
        });
    }

    render() {
        return (
            <div className="container-md vh-100">
                <div className="w-100 h-20 d-flex justify-content-center align-items-center" style={{backgroundColor: "blue", height: "5%"}}>
                    <Link to={'/'} className="w-100" style={{color: "white", height: "100%", width: "100%"}}>
                        <i class="fas fa-home"></i>
                    </Link>
                </div>
                {this.state.randomBeer ?
                <div className="card h-90 d-flex-column justify-content-center align-items-center">
                    <img src={this.state.randomBeer.image_url} className="card-img-top" alt={this.state.randomBeer.name} style={{width: "150px", height: "300px"}} />
                    <div className="card-body">
                        <h3 className="card-title text-left">{this.state.randomBeer.name}</h3>
                        <p className="card-text text-justify">{this.state.randomBeer.tagline}</p>
                        <span className="card-text text-justify">
                            <strong>First brewed: </strong>
                            {this.state.randomBeer.first_brewed}
                        </span>
                        <span className="card-text text-justify">
                            <strong>Attenuation level: </strong>
                            {this.state.randomBeer.attenuation_level}
                        </span>
                        <p className="card-text text-justify">
                            <strong>Description: </strong>
                            {this.state.randomBeer.description}
                        </p>
                        <span className="card-text text-justify">
                            <strong>Contributed by: </strong>
                            {this.state.randomBeer.contributed_by}
                        </span>
                    </div>
                </div>
                : 'Loading'}
            </div>
        )
    }
}