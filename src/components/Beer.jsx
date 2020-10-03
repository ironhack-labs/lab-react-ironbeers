import React from 'react';
import { getBeer, getRandomBeer } from '../services/api-client';
import Spiner from './layaout/Spiner';

class Beers extends React.Component {
  state = {
    beer: {},
    details: false,
  };

  componentDidMount() {
    this.props.match.params.id
      ? getBeer(this.props.match.params.id).then((response) => {
          this.setState({
            beer: response.data,
          });
        })
      : getRandomBeer().then((response) => {
          this.setState({
            beer: response.data,
          });
        });
  }

  handleClickDetails = () => {
    this.setState((oldState) => {
      return {
        details: !oldState.details,
      };
    });
  };

  render() {
    const {
      name,
      tagline,
      image_url,
      description,
      first_brewed,
      attenuation_level,
      contributed_by,
      food_pairing,
    } = this.state.beer;

    return (
      <div className="container">
        {this.state.beer.length !== 0 ? (
          <div>
            <h1 className="my-3">{name}</h1>
            <p className="lead text-center">{tagline}</p>
            <img
              src={image_url}
              className="img-fluid mx-auto d-block"
              alt={name}
            />
            <div className="d-flex justify-content-between my-3">
              <h4 className="mr-3 my-auto">Details</h4>
              <button
                type="button"
                onClick={this.handleClickDetails}
                className="btn btn-outline-secondary"
              >
                {this.state.details ? 'Hide' : 'Show'}
              </button>
            </div>
            {this.state.details && (
              <div>
                <p>
                  <b>Description:</b>
                  <br />
                  {description}
                  <br />
                  <b>First brewed:</b>
                  <br />
                  {first_brewed}
                  <br />
                  <b>Attenuation level:</b>
                  <br />
                  {attenuation_level}
                  <br />
                  <b>Contributed by:</b>
                  <br />
                  {contributed_by}
                </p>
                <hr />
                <h3>Combine it with:</h3>
                {food_pairing?.length && (
                  <ul>
                    {food_pairing.map((food, index) => (
                      <li key={`${index}-${food}`}>{food}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ) : (
          <Spiner />
        )}
      </div>
    );
  }
}

export default Beers;
