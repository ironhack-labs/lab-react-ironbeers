import React from 'react';
import NavBar from './NavBar';

class SingleBeer extends React.Component {
  render() {
    const selectedBeer = this.props.match.params.beerId;
    const filteredBeer = this.props.beers.filter((beer) => {
      return beer._id === selectedBeer;
    })[0];
    return (
      <div className="App">
        {this.props.beers.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <div className="Beers-card">
            <NavBar />
            <h1> Beers details</h1>
            <img
              src={filteredBeer.image_url}
              alt={filteredBeer.name}
              className="Beers-img"
            />
            <h4>{filteredBeer.name}</h4>
            <p>{filteredBeer.tagline}</p>
            <p>{filteredBeer.first_brewed}</p>
            <p>{filteredBeer.attenuation_level}</p>
            <p>{filteredBeer.description}</p>
            <p>{filteredBeer.contributed_by}</p>
          </div>
        )}
      </div>
    );
  }
}
export default SingleBeer;
