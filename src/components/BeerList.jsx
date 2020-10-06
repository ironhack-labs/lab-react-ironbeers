import Axios from 'axios';
import React from 'react';
import BeerCard from './BeerCard';
import '../stylesheets/BeerList.css';

class BeerList extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => this.setState({ beers: [...response.data] }))
      .catch((e) => console.error(e));
  }

  render() {
    if (!this.state.beers.length) {
      return <h1 className="Loading">Loading...</h1>
    }

    return (
      <div>
        <ul className="BeerList">
          {this.state.beers.map(b => <BeerCard key={b._id} beer={b}/>)}
        </ul>
      </div>
    );
  }
}

export default BeerList;
