import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";

class BeerDetails extends Component {
    state = {
      beer: null,
    };
  
    componentDidMount() {
        const id = this.props.match.params.id;
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
        .then((response) => {
         
          this.setState({
            beer: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    componentDidUpdate(prevProps, prevState) {
        const id = this.props.match.params.id;
    
        if (this.props.match.params.id !== prevProps.match.params.id) {
          axios
            .get("https://ih-beers-api2.herokuapp.com/beers" + id)
            .then((response) => {
              console.log(response);
              this.setState({
                beer : response.data,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    
      render() {
        if (this.state.beer === null) {
          return <div>Loading ...</div>;
        }
    
        return (
          <div>
            <img src={this.state.beer.image_url} />
                    <p>name : {this.state.beer.name}</p>
                    <p>tagline : {this.state.beer.tagline}</p>
                    <p>contributed by : {this.state.beer.first_brewed}</p>
                    <p>contributed by : {this.state.beer.description}</p>
                    <p>contributed by : {this.state.beer.contributed_by}</p>
          </div>
        );
      }
    }
  
   
  export default BeerDetails;