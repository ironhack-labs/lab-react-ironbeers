import React from 'react';
import { getBeer } from '../services/api-client';
import Spiner from './layaout/Spiner';
import TrIngredients from './layaout/TrIngredients';

class Beers extends React.Component {
  state = {
    beer: {},
    details: false,
  };

  componentDidMount() {
    getBeer(this.props.match.params.id).then((response) => {
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
    const beer = this.state.beer;

    return (
      <div className="container">
        {beer.length !== 0 ? (
          <div>
            <h1 className="my-3">{beer.name}</h1>
            <p className="lead text-center">{beer.tagline}</p>
            <img src={beer.image_url} className="img-fluid" alt={beer.name} />
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
                  {beer.description}
                </p>
                {beer.ingredients && (
                  <div>
                    <p>
                      <b>Ingedients:</b>
                    </p>
                    <table className="table table-striped table-dark">
                      <thead>
                        <tr>
                          <th scope="col">Type</th>
                          <th scope="col">Name</th>
                          <th scope="col">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(beer.ingredients)?.map((key, index) => (
                          <TrIngredients
                            key={`${key}-${index}`}
                            ingredient={beer.ingredients[key]}
                          />
                        ))}
                      </tbody>
                    </table>
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
