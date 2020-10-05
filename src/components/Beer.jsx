import React from 'react';
import { getBeer, getRandomBeer } from '../services/api-client';
import Paragraph from './layaout/Paragraph';
import Spiner from './layaout/Spiner';

class Beers extends React.Component {
  state = {
    beer: {},
    details: false,
  };

  fetchBeer = (id) => {
    getBeer(id).then((response) => {
      this.setState({
        beer: response.data,
      });
    });
  };

  componentDidMount() {
    this.props.match.params.id !== 'random'
      ? this.fetchBeer(this.props.match.params.id)
      : getRandomBeer().then((response) => {
          this.setState({
            beer: response.data,
          });
        });
  }

  componentDidUpdate(oldBeer) {
    this.props.match.params.id !== oldBeer.match.params.id &&
      this.fetchBeer(this.props.match.params.id);
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
                {description && (
                  <Paragraph title="Description: " content={description} />
                )}
                {first_brewed && (
                  <Paragraph title="First brewed: " content={first_brewed} />
                )}
                {attenuation_level && (
                  <Paragraph
                    title="Attenuation level: "
                    content={attenuation_level}
                  />
                )}
                {contributed_by && (
                  <Paragraph
                    title="Contributed by: "
                    content={contributed_by}
                  />
                )}
                {food_pairing?.length && (
                  <div>
                    <hr />
                    <h3>Combine it with:</h3>
                    <ul>
                      {food_pairing.map((food, index) => (
                        <li key={`${index}-${food}`}>{food}</li>
                      ))}
                    </ul>
                  </div>
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
