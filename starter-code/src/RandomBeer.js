import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class RandomBeer extends Component {
  state = { myBeer: {} }

  componentDidMount() {
      axios.get(`https://ih-beer-api.herokuapp.com/beers/random`)
          .then(myBeer => {
              this.setState({
                  myBeer: myBeer.data
              })
      })
  }
  render() {
      return (
          <div className="Beer">
              Details
              {this.props.match.params.id}

              <h1>{this.state.myBeer.name}</h1>
              <h2>{this.state.myBeer.tagline}</h2>
              <img width="25px" src={this.state.myBeer.image_url} alt=""/>

          </div>
    )
  }
}

export default RandomBeer;