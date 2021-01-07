import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class BeersPage extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseFromApi) => {
        console.log(responseFromApi);
        this.setState({
          beers: responseFromApi.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Beers</h1>
        <div>
          {this.state.beers.map((beer) => {
            return (
              <div key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                  <img
                    style={{
                      width: 100,
                      height: 200,
                    }}
                    src={beer.image_url}
                    alt={beer.name}
                  />
                </Link>
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>created by {beer.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BeersPage;
