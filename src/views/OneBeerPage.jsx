import React from 'react';
import axios from 'axios';
import Header from '../components/Header';

class OneBeerPage extends React.Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const beerId = this.props.match.params.id;

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
      .then((apiResponse) => {
        this.setState({
          beer: apiResponse.data,
        });
      });
  }

  render() {
    // if (!this.state.beer) {
    //   return <div>Loading.....</div>;
    // }
    return (
      <div>
        <h2>Welcome to the beer page</h2>
        <Header />
        <h1>Random Beer</h1>
        <div>
          <img src={this.state.beer.image_url} alt="" />
          <h2>{this.state.beer.name}</h2>
          <p>{this.state.beer.tagline}</p>
          <p>{this.state.beer.first_brewed}</p>
          <p>{this.state.beer.attenuation_level}</p>
          <p>{this.state.beer.description}</p>
          <p>{this.state.beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default OneBeerPage;
