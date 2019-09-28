import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

export default class SingleBeer extends Component {

state={
    singleBeer:[]
}

  singleBeer = () => {
    axios
      .get(
        `https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.beerId}`
      )
      .then(response => {
        console.log(response.data.name);
        this.setState({
            singleBeer: response.data
        })
      });
  };

componentDidMount(){
    this.singleBeer()
}


  render() {
    
    return (
      <React.Fragment>
        <Header />
        <div>
        <img height="400px" src={this.state.singleBeer.image_url} alt=""/>
        <div>

        <h2>
        {this.state.singleBeer.name}
        </h2>
        <h2>{this.state.singleBeer.attenuation_level}</h2>
        </div>
<div>
    <h3>
        {this.state.singleBeer.tagline}
    </h3>
    <h3>{this.state.singleBeer.first_brewed}</h3>
</div>
<p>{this.state.singleBeer.description}</p>
<h6>{this.state.singleBeer.contributed_by}</h6>
        </div>
      </React.Fragment>
    );
  }
}
