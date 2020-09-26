import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';

class ListBeers extends Component {
  state = {
    beers: []
  }

  getAllBeers() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      this.setState({beers: response.data});
    })
    .catch(error=>console.log(error));
  }

  componentDidMount(){
    this.getAllBeers();
  }

  render() {
    if(!this.state.beers) return (<div>Filling the barrels...</div>);
    return (
      <Fragment>
        <Nav />
        <section className="page">
          {this.state.beers.map(beer=>{
            return (
              <div key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                  <figure>
                    <img src={beer.image_url} alt={beer.name}/>
                  </figure>
                  <article>
                    <h2>{beer.name}</h2>
                    <blockquote>{beer.tagline}</blockquote>
                    <p>Created by: {beer.contributed_by}</p>
                  </article>
                </Link>
                <hr/>
              </div>
            )
          })}
        </section>
      </Fragment>
    );
  }
}

export default ListBeers;