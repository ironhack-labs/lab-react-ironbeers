import React, { Component } from 'react';
const apiEndpoint = "https://ironbeer-api.herokuapp.com/beers";

class BeerDetails extends Component {
  state = {};

  getDetails = () => {
    const { params } = this.props.match;
    if (params.id !== undefined) {
      fetch(`${apiEndpoint}/single/${params.id}`)
        .then(res => {
          res.json()
            .then(obj => {
              this.setState({ ...obj });
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
    else {
      fetch(`${apiEndpoint}/random`)
      .then(res => {
        res.json()
          .then(obj => {
            this.setState({ ...obj[0] }); //!!!!!!
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    }
  }

  componentDidMount() {
    this.getDetails();
  }

  render() {
    return (
      <div className="beer-details">
        <img src={this.state.image_url} alt={this.state.name}/>
        <h1>{this.state.name}</h1>
        <em>{this.state.tagline}</em>
        <p>{this.state.description}</p>
        <small>First brewed: {this.state.first_brewed}</small> <br/>
        <small>Attenuation level: {this.state.attenuation_level}</small> <br/>
        <small>Created by: {this.state.contributed_by}</small>
      </div>
    );
  }
}

export default BeerDetails;