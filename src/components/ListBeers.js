import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class ListBeers extends React.Component {
  render() {
    const beers = this.props.allbeers.map((beer, index) => {
      return (
        <div className="Beer-card" key={index}>
          <Link to={`/beers/${beer._id}`}>
            <div className="display">
                <img src={beer.image_url} alt={beer.name} className="Beer-img" />
                <div>
                    <h5>{beer.name}</h5>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div className="ListBeers">
        <Navbar />
        {beers}
      </div>
    );
  }
}

export default ListBeers;
