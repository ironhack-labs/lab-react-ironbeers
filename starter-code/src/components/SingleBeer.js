import React, { Component } from 'react';
import HomeButton from './HomeButton';
import axios from "axios";
import { Link } from "react-router-dom";

const STATUS = {
  LOADING: "⚡️LOADING⚡️",
  LOADED: "LOADED",
  ERROR: "❌ERROR❌",
};


class SingleBeer extends Component {

  state = {
    beer: {},
    status: STATUS.LOADING,
  }
  
  componentDidMount() {
    let idOfBeer = this.props.match.params.id;
    console.log(idOfBeer)
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${idOfBeer}`)
      .then((response) => {
        console.log("data", response.data);
        this.setState({
          beer: response.data,
          status: STATUS.LOADED,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.name,
          status: STATUS.ERROR,
        });
      });
  }

  selectBeer = () => {
    const { beer } = this.state;
    if (beer !== undefined) {
      return(
        <div>
          <HomeButton />
          <div>
            <img src={ beer.image_url} alt="beer"/>
            <section>
              <div>
                <p>{ beer.name}</p>
                <p>{ beer.tagline }</p>
              </div>
              <div>
                  <p>{ beer.attenuation_level }</p>
                  <p><strong>{ beer.first_brewed }</strong></p>
              </div>
              <article>{ beer.description }</article>
              <span>{ beer.contributed_by }</span>
              
            </section>
            
            <p><strong>Contributed by:</strong>{ beer.contributed_by }</p>
          </div>
          <Link to="/beers">Back</Link>
        </div>
      ) 
    } 
  }

  render() {
    const { status } = this.state;

    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <div>{ status }</div>;
      case STATUS.LOADED:
        return <div>
          { this.selectBeer() }
        </div>
      case STATUS.ERROR:
        return <div>{ status }</div>;
    }
  }
}

export default SingleBeer;