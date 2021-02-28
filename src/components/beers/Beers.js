import React, { Component } from 'react';
import Header from './../Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends Component {
  state = {
    listOfBeers: [],
    name: '',
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((allBeers) => {
        this.setState({ listOfBeers: allBeers.data });
        console.log(this.state.listOfBeers);
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.name}`
      )
      .then((data) => {
        this.setState({listOfBeers:data.data});           
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />

        <form>
          <input
            placeholder="search for a beer"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>

        {this.state.listOfBeers.map((el) => {
          return (
            <div key={el._id}>
              <Link to={`/beers/${el._id}`} className="beer-preview">
                <img className="beer-img" src={el.image_url} alt="beer-img" />
                <div>
                  <h2>{el.name}</h2>
                  <p>{el.tagline}</p>
                  <p className="creator">Created by: {el.contributed_by}</p>
                </div>
              </Link>
            </div>
          );
        })}
        <button className="back-btn" onClick={this.props.history.goBack}>Go Back</button>
      </div>
    );
  }
}

export default Beers;
