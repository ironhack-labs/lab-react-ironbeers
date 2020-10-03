import React from 'react';
import axios from 'axios';
import '../styles/Beers.css';
import { Link } from 'react-router-dom';
import Header from './Header';

class Beers extends React.Component {
  state = {
    beers: [],
    search: '',
    
  };

  handleChange = (event) => {
    let query = event.target.value;
    this.setState({
      [event.target.name]: query,
    });
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => {
        this.setState({
          beers: response.data,
          search: query,
        });
      });
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    if (!this.state.beers.length) return (<img className="center" src="https://i.gifer.com/4V0b.gif" alt="aaa"></img>)
   
    return (
      <div className="col">
        <Header />
        <label className="mr-2 mt-2">Search: </label>
        
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.search}
        />
       
        {this.state.beers.map((el) => (
          <div className="card" key={el._id}>
            <Link to={`/beers/${el._id}`}>
              <img
                className="card-img-top mx-auto beers"
                src={el.image_url}
                alt={el.name}
              ></img>
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">{el.tagline}</p>
              <p>
                <small>
                  <strong>Created by:</strong> {el.contributed_by}
                </small>
              </p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Beers;
