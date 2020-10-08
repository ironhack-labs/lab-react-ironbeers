import React from 'react';
import apiHandler from '../apiHandler';
import '../styles/SingleBeer.css';
import NavMain from '../components/NavMain';

class SingleBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    apiHandler
      .getOne(this.props.match.params.id)
      .then((apiResponse) => {
        this.setState({ beer: apiResponse.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <NavMain />
        <h1>One Beer</h1>
        {this.state.beer && (
          <>
            <img src={this.state.beer.image_url} alt={this.state.beer.name} />
            <p>
              {this.state.beer.name} {this.state.beer.attenuation_level}
            </p>
            <p>
              {this.state.beer.tagline} {this.state.beer.first_brewed}
            </p>
            <p>{this.state.beer.description}</p>
            <p>Created by:{this.state.beer.contributed_by}</p>
          </>
        )}
      </div>
    );
  }
}

export default SingleBeer;
