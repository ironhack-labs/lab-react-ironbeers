import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";

class AllBeers extends Component {
    state = {
      beers: [],
    };
  
    componentDidMount() {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
         
          this.setState({
            beers: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      return (
        <div>
          <h1>Beers</h1>  
          <ul>
              {this.state.beers.map((oneElement) => {
                return (
                  <li>
                    <Link to={`/beers/${oneElement._id}`}>
                      {oneElement.name}
                    </Link>
                    <img src={oneElement.image_url} />
                    <p>name : {oneElement.name}</p>
                    <p>tagline : {oneElement.tagline}</p>
                    <p>contributed by : {oneElement.contributed_by}</p>
                  </li>
                );
              })}
           
          </ul>
        </div>
      );
    }
  }
  
  export default AllBeers;