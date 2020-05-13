import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";

class OneBeer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: null,
        }
    }
  
    componentDidMount() {
        console.log(this.props.match.params.id);
        const id = this.props.match.params.id;
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
            .then((apiResponse) => {
                console.log(apiResponse.data);
                this.setState({ beers: apiResponse.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }
  
  
  render(){
      if (!this.state.beers) return null
    
      return (
            <div>
            <NavBar />
            <pre>{JSON.stringify(this.props.match.params, null, 2)}</pre>
            <h1>{this.state.beers.name}</h1>
            <img src={this.state.beers.image_url} alt=""/>
            <h3>{this.state.beers.tagline}</h3>
            <ul>
                <li> First brewed {this.state.beers.first_brewed} </li>
                <li> Attenuation level {this.state.beers.attenuation_level} </li>
            </ul>
            <p>{this.state.beers.description}</p>
            <p>{this.state.beers.contributed_by}</p>
            </div>
        );
    }
};

export default OneBeer;

