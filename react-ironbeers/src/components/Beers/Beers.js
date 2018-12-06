import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Beer.css'
export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfBeers: null };
  }

  getAllBeers = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(resBeersFromApi => {
        console.log(resBeersFromApi.data);
        this.setState({ ...this.state, listOfBeers: resBeersFromApi.data });
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    if (this.state.listOfBeers) {
     
      return (
        <div>
          <header>
            <Link to="/">HOME</Link>
          </header>
          <h1>All Beers</h1>
          <div>
            {this.state.listOfBeers.map((beer, index) => {
              return (<div key={beer._id} className='beer-box'>
                        <div>
                        <img style={{maxWidth: '60px'}} src={beer.image_url} alt=""/>
                        </div>
                        <div>
                        <h2 style={{fontSize: '2rem'}}>{beer.name}</h2>
                        <h3 style={{maxWidth: '50px'}} >{beer.tagline} </h3>
                        <h4>Created by: {beer.name}</h4>
                        <Link to={`/beer/${beer._id}`}>Beer Detail</Link>
                        </div>
                      </div> )
            })}
          </div>
        </div>
      );
    } else {
      return <p>Loading List of Beers...</p>;
    }
  }
}
