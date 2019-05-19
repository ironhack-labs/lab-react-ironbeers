import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class BeerDetails extends Component {   
    state = {
        myBeer: {}
    }



    componentDidMount() {
        console.log('hi')
      axios
        .get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.beerId}`)
        .then(response => {
            console.log("the beer detail info ----------- ", response.data)
            this.setState({myBeer: response.data})
            console.log("the state after getting the beer >>>>>>>>>>  ", this.state);
        //   this.setState({ allBeers: response.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  




    render() { 
        console.log("this is the beers details page ---____---", this.props.match.params);
        // console.log("this is the beers details page ---____---", this.props);
        return ( 
            <div className="Beer">
            Details
            {this.props.match.params.id}

            <h1>{this.state.myBeer.name}</h1>
            <h2>{this.state.myBeer.tagline}</h2>
            <img width="25px" src={this.state.myBeer.image_url} alt=""/>

            </div>
         );
    }
}
 
export default BeerDetails;


