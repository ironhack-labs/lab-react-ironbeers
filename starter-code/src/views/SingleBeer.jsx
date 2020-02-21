
import axios from "axios"; 
import Header from "./../components/header"

// import React from 'react'

// export default function SingleBeer(props) {

//     console.log(props.match.params.id);

//     componentDidMount() {
//         axios
//           .get(this.state.APIEndpoint)
//           .then(apiRes => this.setState({ beers: apiRes.data }))
//           .catch(apiErr => console.error(apiErr));
//       }


//     return (

//         <div>
//             <Header/>
//         </div>
//     )
// }


import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class SingleBeer extends Component  {


    state = {
        beerId: this.props.match.params.id,
        beer: null,
        APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers"
      };

      componentDidMount() {
        axios
          .get(this.state.APIEndpoint + "/" + this.state.beerId)
          .then(apiRes => this.setState({ beer: apiRes.data }))
          .catch(apiErr => console.error(apiErr));
      }

    render() {
        return this.state.beer ? (
            <div>
                <Header/> <br/>
                <NavLink to="./../all-beers">Return to all the beers</NavLink><br/>
                <img src={this.state.beer.image_url} alt="beer image"/> <br/>
                <h1>{this.state.beer.name}</h1>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
            </div>
        ) : (
    <p>no beer </p>)
    }
}
