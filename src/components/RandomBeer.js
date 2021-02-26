import React from 'react';

class RandomBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
      loaded: false,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    const json = await response.json();
    this.setState(() => ({ beer: json, loaded: true }));
  }

  render() {
    return (
      <div className="beer-detail mx-3">
        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        <div className="d-flex justify-content-between">
          <h3>{this.state.beer.name}</h3>
          <h3 className="text-muted">{this.state.beer.attenuation_level}</h3>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="m-0 text-muted font-weight-normal pb-1">
            {this.state.beer.tagline}
          </h5>
          <p><b>{this.state.beer.first_brewed}</b></p>
        </div>
        <div>
            <p className="text-left description">{this.state.beer.description}</p>
            <p className="text-left"><b className="text-muted">{this.state.beer.contributed_by}</b></p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
