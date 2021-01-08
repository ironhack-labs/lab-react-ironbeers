import React, { Component } from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom";


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
<div className="home screenl"><NavLink exact to="/" className="link"><i class="fas fa-home" ></i></NavLink></div>
<div className="randombeer">
               <img src={this.state.beer.image_url} alt=""/>
               <div className="randomcontent">
               <div className="flex">
               <h3>{this.state.beer.name}</h3> 
               <h3>{this.state.beer.attenuation_level}</h3>
               </div>
               <div className="flex">
               <h5>{this.state.beer.tagline}</h5>
               <h5>{this.state.beer.first_brewed}</h5>
               </div>
               <p>{this.state.beer.description}</p>
               <h6>{this.state.beer.contributed_by}</h6>
               </div>
            </div>
            </div>
        );
    }
}

