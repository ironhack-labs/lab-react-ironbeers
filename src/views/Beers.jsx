import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseFromApi) => {
        // console.log(responseFromApi);
        this.setState({
          beers: responseFromApi.data,
        });
      });
  }

  render() {
    return (
      <div>
        <header>
          <Link exact to="/">
            Home
          </Link>
        </header>
        <h1>All Beers</h1>
        {this.state.beers.map((beer) => {
          return (
            <Link
              to={`/beers/${beer._id}`}
              className="all-beers-div"
              key={beer._id}
            >
              <img
                style={{
                  width: 30,
                }}
                src={beer.image_url}
                alt=""
              />
              <div className="all-beers-details">
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beers;
