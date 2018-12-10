import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: null,
    }
  }

  getAllBeers = () =>{
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
    .then(responseFromApi => {
      this.setState({
        beers: responseFromApi.data,
      })
    })
    .catch(err => {
      console.log("Something went wrong", err);
    });
  }

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    const {beers} = this.state;
    if (this.state.beers){
      return (
        <div>
        {beers.map(beer => {
          return (
            <div>
              <img src={beer.image_url} />
              <Link to={`/beers/${beer._id}`}>
                <h2>{beer.name}</h2>
              </Link>
              <p>{beer.tagline}</p>
              <p>{beer.first_brewed}</p>
              <p>{beer.contributed_by}</p>
              <hr/>
            </div>
          );
        })}
      </div>
      )
    } else {
      return <h1>Loading</h1>;
    }
    
  }
}
export default Beers;