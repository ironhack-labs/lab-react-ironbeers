import React, { Component } from 'react';
import axios from "axios";
import Header from "./Header";


export default class Singlebeer extends Component {

    state = {
        beer : [],
        APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers"
    };
    componentDidMount() {
        axios
        .get(`${this.state.APIEndpoint}/${this.props.match.params.Id}`)
        .then(apiRes =>  this.setState({ beer : apiRes.data }))
        .catch(apiErr => console.error(apiErr));
        
    }

    render() {
        // const { beer } = this.state.beer;
        console.log("this name is annoying", this.state.beer.name);
        // YOU CAN PERFOM THE DEBUG LOGS HERE OR IN THE REACT DEVTOOLS CONSOLE


        return (
            <div>
                <Header />
                <h1>Details</h1>
                <img src={this.state.beer.image_url} alt="beer-image"/>
                <p>{this.state.beer.name}</p>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
            </div>
        )
    }}

//         return beer ? (
//             <div>
//                 <h1 className="title">Beer details</h1>
//                 <p>{beer}</p>
//             </div>
//             ) : (
//                 <p>no, beers, yet...</p>
//             );
// 