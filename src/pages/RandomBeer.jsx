import React from 'react';
import beersAPI from '../api/beersAPI';
import Header from '../components/Header';

class RandomBeer extends React.Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    beersAPI
      .getRandom(this.props.match.params.id)
      .then((apiResponse) => {
        this.setState({
          beer: apiResponse.data,
        });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Random Beer</h1>

        <img src={this.state.beer.image_url} alt="beer pic" />
        <div>
          <h2>{this.state.beer.name}</h2>
          <p>{this.state.beer.tagline}</p>
          <p>{this.state.beer.first_brewed}</p>
          <p>{this.state.beer.attenuation_level}</p>
          <p>{this.state.beer.description}</p>
          <p>
            <strong>Created by: </strong>
            {this.state.beer.contributed_by}
          </p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
