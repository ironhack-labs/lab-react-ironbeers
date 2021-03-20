import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../App.css';

class ListBeers extends React.Component {
  state = {
    beers: [],
  };
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beers: response.data });
        console.log('this is my response', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.beers.map((beer) => (
          <div key={beer._id} className="beer">
            <div className="image">
              <img src={beer.image_url} alt="" style={{ height: '250px' }} />
              {/* <Link to={`/beers/${beer._id}`}>See more !</Link> */}
            </div>
            <div className="beerListItems" style={{ textAlign: 'center' }}>
              <h2 style={{ width: '200px' }}>
                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
              </h2>

              <h3 style={{ width: '200px' }}>{beer.tagline}</h3>

              <h5>Created By: {beer.contributed_by}</h5>
              <hr />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListBeers;
