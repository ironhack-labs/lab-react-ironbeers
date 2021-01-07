import React from "react";
import axios from "axios";

class OneBeerPage extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
   
    const beerId = this.props.match.params.id;

    axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId).then((apiResponse) => {
      setTimeout(() => {
        this.setState({
          beer: apiResponse.data,
        });
      }, 1000);
    });
  }

  render() {
    if (!this.state.beer) {
      return <div>Loading.....</div>;
    }

    return (
      <div>
        <h2>Welcome to the beer page</h2>
        <div>
          
          <img src={this.state.beer.image_url} />
          <h2>{this.state.beer.name}</h2>
          <p>{this.state.beer.tagline}</p>
          <p>{this.state.beer.first_brewed}</p>
          <p>{this.state.beer.attenuation_level}</p>
          <p>{this.state.beer.description}</p>
          <p>Contributed by: {this.state.beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default OneBeerPage;
