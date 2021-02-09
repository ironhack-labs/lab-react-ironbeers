import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      beers: [],
    };
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then(
      (result) => {
        this.setState({
          isLoaded: true,
          beers: result.data,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const { error, isLoaded, beers } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {beers.map((beers) => (     
            <Link to={`/${beers._id}`} key={beers._id}>
            <img alt={beers._id} src={beers.image_url} style={{maxHeight: '50px', margin: '2%'}}></img>
              <p><strong>{beers.name}</strong> - {beers.tagline}</p>
            </Link> 
          ))}
        </ul>
      );
    }
  }
}