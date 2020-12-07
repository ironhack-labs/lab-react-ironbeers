import React from 'react';
import './AllBeersPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header/Header';

class AllBeersPage extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((allBeers) => {
      console.log('responseBack:', allBeers.data);
      this.setState({ beers: allBeers.data });
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div class="allBeers">
          {this.state.beers.map((el) => (
            <Link to={`/beers/${el._id}`}>
              <img src={el.image_url}></img>
              <h1>{el.name}</h1>
              <h3>{el.tagline}</h3>
              <h5>Contributed by: {el.contributed_by}</h5>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default AllBeersPage;
