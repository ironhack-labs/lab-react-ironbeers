import Axios from 'axios';
import React from 'react';

class ShowBeer extends React.Component {
  state = {
    beer: null,
  };

  getBeerFromPath(endPoint) {
    Axios.get(`https://ih-beers-api2.herokuapp.com/beers/${endPoint}`).then(
      (response) => {
        const {
          name,
          description,
          image_url,
          tagline,
          contributed_by,
          attenuation_level,
          first_brewed,
        } = response.data;
        this.setState({
          beer: {
            name,
            description,
            image_url,
            tagline,
            contributed_by,
            attenuation_level,
            first_brewed,
          },
        });
      }
    );
  }

  componentDidMount() {
    if (this.props.location.pathname === '/random') {
      this.getBeerFromPath('random');
    } else {
      this.getBeerFromPath(this.props.match.params.id);
    }
  }
  render() {
    if (this.state.beer) {
      return (
        <div className="card justify-content-center">
          <img
            src={this.state.beer.image_url}
            className="card-img-top align-self-center"
            alt={this.state.beer.name}
            style={{ maxWidth: '3.2rem' }}
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <string>{this.state.beer.name}</string>
              <string className="text-muted">
                {this.state.beer.attenuation_level}
              </string>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-muted">
                <small>{this.state.beer.tagline}</small>
              </p>
              <strong>
                <small>{this.state.beer.first_brewed}</small>
              </strong>
            </div>
            <div className="d-flex justify-content-start">
              <p className="text-left">{this.state.beer.description}</p>
            </div>
            <div>
              <p className="text-muted text-left">
                <small>{this.state.beer.contributed_by}</small>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Brewing...</div>;
    }
  }
}

export default ShowBeer;
