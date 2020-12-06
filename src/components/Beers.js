import React, { Component } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Beers.css';

export default class Beers extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        // console.log("response data", response.data);
        this.setState({
          beers: response.data
        })
      })
  }


  //console.log("props" ,props);

  render() {
    return (
      <>
      <Col style={{padding: "0px"}}>
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id} className="parentDiv">
              <div className="imageDiv">
                <img className="allBeers" src={beer.image_url} alt="{beer.name}" />
              </div>
              <div className="description">
                <Link key={beer.name} 
                to={`/beers/${beer._id}`}>
                  <h3>{beer.name}</h3>
                </Link>  
                  <h4>{beer.tagline}</h4>
                  <p><strong>Created by: </strong>{beer.contributed_by}</p>
              </div>
            </div>
          );
        })}
      </Col>
      </>
    );
  }
}