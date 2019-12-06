import React, {Component} from 'react';
import axios from 'axios';
import DetailComponent from '../BeerDetail/DetailComponent'

const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers/random';

class RandomBeer extends Component {
    state = {
        beer: {}
    };
    async componentDidMount(){
        const { data } = await axios.get(`${ENDPOINT}`)
        console.log(data)
        this.setState({
            beer: data
        })
    }

    render(){
        return(
            <div className="random">
            <h1 style={{
                marginTop: "90px",
                textAlign: "center"
            }}>
               RandomBeer
            </h1>
            <DetailComponent
                image = {this.state.beer.image_url}
                name = {this.state.beer.name}
                tagline={this.state.beer.tagline}
                brewed = {this.state.beer.first_brewed}
                level = {this.state.beer.attenuation_level}
                description = {this.state.beer.description}
                contributor = {this.state.beer.contributed_by}
                />

            </div>
        );
    }

}
export default RandomBeer;
