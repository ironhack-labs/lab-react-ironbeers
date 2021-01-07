import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

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
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              {/* <img
                style={{
                  width: 100,
                  height: 200,
                }}
                src={beer.image_url}
                alt={beer.name}
              /> */}
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
              <div>
                <h4>{beer.name}</h4>
                <p>{beer.tagline}</p>
                <p>Created by{beer.name}</p>
              </div>{' '}
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default BeersPage;
