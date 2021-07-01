import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: 'loading',
    };
  }

  componentDidMount = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('data from the API', response.data);
        this.setState({
          data: response.data,
          status: 'loaded',
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        {this.state.staus === 'loading' && <p>Loading...</p>}
        {this.state.status === 'loaded' &&
          this.state.data.map((item) => {
            return (
              <div className="py-6" key={item._id}>
                <img className="h-44" src={item.image_url} alt="beer__img" />

                <Link to={`/beers/${item._id}`}>
                  <h1 className="text-2xl font-black">{item.name}</h1>
                </Link>
                <p>{item.tagline}</p>
                <p> Created by: {item.contributed_by}</p>
              </div>
            );
          })}
      </div>
    ); //return
  } //render
} //class bracket

export default Beers;
