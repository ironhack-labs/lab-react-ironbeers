import React, { Component } from 'react';
import axios from 'axios';

class EachBeer extends Component {
  state = {
    oneBeer: '',
  };

  async componentDidMount() {
    //console.log(props) to see all the default props I passed from App.jss.
    //BrowserRouter allows me to pass props (history, location and match
    //---inside match there is params and inside there is an id)by default.
    //If I need extra props, I need to create them.
    console.log(this.props);
    let eachBeer = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
    );
    // console.log(eachBeer);
    this.setState({
      oneBeer: eachBeer.data,
    });
  }

  displayOneBeer = () => {
    return (
      <div>
        <img src={this.state.oneBeer.image_url} alt="one beer" />
        <h4>{this.state.oneBeer.name}</h4>
        <p>{this.state.oneBeer.tagline}</p>
        <p>{this.state.oneBeer.first_brewed}</p>
        <p>{this.state.oneBeer.attenuation_level}</p>
        <p>{this.state.oneBeer.description}</p>
        <p>{this.state.oneBeer.contributed_by}</p>
      </div>
    );
  };

  render() {
    return <div>{this.displayOneBeer()}</div>;
  }
}

export default EachBeer;
