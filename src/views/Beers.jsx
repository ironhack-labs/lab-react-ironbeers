import React, { Component } from 'react';
import NavMain from '../components/NavMain';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class beers extends Component {
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

  handleSearch = (event) => {
    //console.log(event.target.value);

    axios
      .get(
        'https://ih-beers-api2.herokuapp.com/beers/search?q=' +
          event.target.value
      )
      .then((responseFromApi) => {
        console.log(responseFromApi);
        this.setState({
          beers: responseFromApi.data,
        });
      });
  };

  render() {
    return (
      <div>
        <NavMain />

        <h1 className="text-center m-4">Beers pages</h1>
        <SearchBar onSearch={this.handleSearch} />
        <div className="row">
          {this.state.beers.map((beer) => {
            return (
              <div key={beer._id} className="col-sm-6">
                <div className="card m-2">
                  <div className="card text-center">
                    <div className="card-body ">
                      <img
                        style={{
                          height: 80,
                        }}
                        src={beer.image_url}
                        alt={beer.name}
                      />
                      <h2 className="card-title">{beer.name}</h2>
                      <p className="card-text">{beer.tagline}</p>
                      <Link to={`/beers/${beer._id}`}>
                        <h3 className="btn btn-primary">detail</h3>
                      </Link>
                      <h4 className="card-text">
                        contributed by : {beer.contributed_by}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default beers;
