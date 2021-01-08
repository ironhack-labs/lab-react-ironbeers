import React, { Component } from 'react';
import axios from "axios";


export default class onebeer extends Component {
    state = {
        beer : null,
    }


    componentDidMount() {
 console.log("id", this.props.match.params.id);
        const beerId = this.props.match.params.id;

        axios.get("https://ih-beers-api2.herokuapp.com/beers/"+ beerId).then((responseFromApi) => {
          console.log("id",responseFromApi);
          this.setState({
            beer: responseFromApi.data,
          });
        });
      }

    render() {
        if (!this.state.beer) {
            return <div>Loading.....</div>;
          }
        return (
            <div>
                <h1>Hello</h1>
               <img src={this.state.beer.image_url} alt=""/>
               <h1>{this.state.beer.name}</h1> 
               <h1>{this.state.beer.attenuation_level}</h1>
               <h2>{this.state.beer.tagline}</h2>
               <strong>{this.state.beer.first_brewed}</strong>
               <p>{this.state.beer.description}</p>
               <h3>{this.state.beer.contributed_by}</h3>
            </div>
        );
    }
}

