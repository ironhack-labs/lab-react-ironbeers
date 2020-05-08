import React from "react";
import Header from "./Header";
import axios from "axios";

class BeerDetails extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then((apiResponse) => {
        this.setState({ beer: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    if (!this.state.beer) {
      return (
        <div className='loading'>
          Loading...{" "}
          <span role='img' aria-label='zzz'>
            😴
          </span>
        </div>
      );
    }
    return (
      <div className='single-page'>
        <Header />
        <div className='beer-details'>
          <img src={this.state.beer.image_url} alt='Beer icon' />
          <div className='beer-details__text'>
            <div className='beer-details__topinfo'>
              <h2>{this.state.beer.name}</h2>
              <p className='attenuation'>{this.state.beer.attenuation_level}</p>
              <p className='tagline grey'>{this.state.beer.tagline}</p>
              <p className='brew-date'>{this.state.beer.first_brewed}</p>
            </div>
            <p className='beer-details__description'>
              {this.state.beer.description}
            </p>
            <p className='contributor grey'>{this.state.beer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
