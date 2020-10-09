import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import beersAPI from '../api/beersAPI';

class Beers extends React.Component {
  state = {
    beers: [],
    selectedBeer: null,
  };

  componentDidMount() {
    beersAPI
      .getBeers()
      .then((apiResponse) => {
        this.setState({
          beers: apiResponse.data,
        });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  handleClick = (index) => {
    this.setState({ selectedBeer: index });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="render-all">
          <h1>All Beers</h1>
          {this.state.beers.map((beer) => (
            <div className="row-beer">
              <img src={beer.image_url} alt="beer pic" />
              <div className="beer-card">
                <Link
                  to={`/beers/${beer._id}`}
                  style={{ textDecoration: 'none', color: 'black' }} className="text-beer">
                  <h2>{beer.name}</h2>

                  <p key={beer.tagline} className="tagline">{beer.tagline}</p>
                  <p key={beer.contributed_by}>
                    <strong>Created by: </strong>
                    {beer.contributed_by}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Beers;
