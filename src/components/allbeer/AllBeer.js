import React from 'react';
import Header from '../header/Header';
import { getAllBeer } from '../../services/BeerServices';
import './AllBeer.css';
import { Link } from 'react-router-dom';

class AllBeer extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    try {
      const beers = await getAllBeer();
      this.setState({ beers }, () => console.log(`STATE`, this.state.beers));
    } catch (error) {
      console.log(`Error while getting all beers `, error);
    }
  };

  render() {
    // console.log(this.state.beers.data);
    return (
      <div>
        <Header />
        <div className="list">
          {this.state.beers.map((beer) => (
            <div key={beer._id} className="beer-container">
              <div className="beer-image">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div>
                <Link to={`/beers/${beer._id}`}>
                  <h3>{beer.name}</h3>
                </Link>

                <h5>{beer.tagline}</h5>
                <p>
                  Created by:
                  {beer.contributed_by}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllBeer;
