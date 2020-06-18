import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class BeerDetails extends Component {
    state = {
        beer: null
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then((singleBeer) => {
                // console.log(singleBeer.data);
                this.setState({beer: singleBeer.data});
            });
    }

    render() {
        return(
            <div className="container-md">
                <div className="w-100 h-20 d-flex justify-content-center align-items-center" style={{backgroundColor: "blue", height: "5%"}}>
                    <Link to={'/'} className="w-100" style={{color: "white", height: "100%", width: "100%"}}>
                        <i class="fas fa-home"></i>
                    </Link>
                </div>
                {this.state.beer}
                <div className="card">
                    <img src={this.state.beer.image_url} className="card-img-top" alt={this.state.beer.name} style={{width: "75px", height: "150px"}} />
                    <div className="card-body">
                        <h3 className="card-title text-left">{this.state.beer.name}</h3>
                        <p className="card-text text-justify">{this.state.beer.tagline}</p>
                        <span className="card-text text-justify">
                            <strong>First Brewed: </strong>
                            {this.state.beer.first_brewed}
                        </span>
                        <span className="card-text text-justify">
                            <strong>Attenuation Level: </strong>
                            {this.state.beer.attenuation_level}
                        </span>
                        <p className="card-text text-justify">
                            <strong>Description: </strong>
                            {this.state.beer.description}
                        </p>
                        <span className="card-text text-justify">
                            <strong>Contributed by: </strong>
                            {this.state.beer.contributed_by}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}