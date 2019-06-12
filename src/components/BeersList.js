import React from 'react';
import BeersServices from '../services/BeersServices'
import ItemListBeers from './ItemListBeers';
import { Link } from 'react-router-dom';
import Header from './misc/Header';
import BeersData from '../data/data.json'

class BeersList extends React.Component {

  

  state= {
    beers: BeersData,
  }

  componentWillMount() {

    BeersServices.getBeers().then(
      beers => {
        const antiTrollsBeers = [...beers.data.filter(beer=> beer.id !== undefined || beer.contributed_by === "Fran")]
        this.setState({beers: antiTrollsBeers})},
      error => console.error(error)
    )
  }

  render() {
    return (
      <div className="listBeers">
      <Header/>
        <div className="container">
          {this.state.beers.map((beer, i) => (<Link to={`/beers/${beer._id}`} key={i} className="link-item-beers"><ItemListBeers beer={beer} /></Link>))}
        </div>
      </div>
    );
  }
}

export default BeersList;
