import React from "react";
import axios from "axios";

export default class RandomBeer extends React.Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => {
            const data = response.data
            this.setState({ beer: data })
            console.log('data: ', data)
        })
        .catch(err => console.log('Error: ', err))
    }


    render() {
        return (
            <div className="container">
                <div className="single-beer">
                    <img src={this.state.beer.image_url} alt={this.state.beer.name} className="beer-detail-img"></img>
                    <div className="single-beer-content">

                        <div className="row">
                            <h2>{this.state.beer.name}</h2>
                            <h4>{this.state.beer.attenuation_level}</h4>
                        </div>
                        <div className="row">
                            <h4>{this.state.beer.tagline}</h4>
                            <h5><strong>{this.state.beer.first_brewed}</strong></h5>
                        </div>

                        <h5>{this.state.beer.description}</h5>
                        <p>{this.state.beer.contributed_by}</p>

                    </div>
                </div>
                
            </div>
        )
    }
}
