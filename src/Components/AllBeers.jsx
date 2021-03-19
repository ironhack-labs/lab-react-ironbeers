import React from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import {Link} from 'react-router-dom'


class AllBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>List of beers</h1>
        {/* {console.log(this.state.beers)} */}
        <ul>
          {this.state.beers.map((beer) => (
            <div key={beer._id}>
              <li><img src={beer.image_url} alt=""></img></li>
              <li className="beer-name"><Link to={`/beers/${beer._id}`}>{beer.name}</Link></li>
              <li className="tagline">"{beer.tagline}"</li>
              <li>{beer.contributed_by}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllBeers;
