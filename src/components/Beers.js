//import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Beers extends React.Component {
  state = {
    beers: [],
  };
  
  
  async componentDidMount() {
    const response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    console.log(response.data);
    this.setState({
      beers: response.data,
    });
  }
  
  render() {
    const { beers } = this.state;
    return (
      <>
        {beers.map((beer) => {
          return (
            <div className="beers-list">
              <div className="beers-list-img">
                <img src={beer.image_url} alt="beer imgs" />
              </div>
              <div className="beers-list-text">
                <Link
                  activeStyle={{ color: 'red' }}
                  to={`/${beer._id}`}
                >
                  {beer.name}
                </Link>
                <h3>{beer.tagline}</h3>
                <p>
                  <strong>Created by: </strong>
                  {beer.contributed_by}
                </p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}


export default Beers;