import React, { Component } from 'react';
import HomeButton from './HomeButton';
import axios from "axios";
import { Link } from "react-router-dom";

const STATUS = {
  LOADING: "⚡️LOADING⚡️",
  LOADED: "LOADED",
  ERROR: "❌ERROR❌",
};


class Beers extends Component {

  state = {
    beersList: [],
    status: STATUS.LOADING,
  }
  
  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log("data", response.data);
        this.setState({
          beersList: response.data,
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

  listingBeers = () => {
    const { beersList} = this.state;
    return beersList.map((info, index) => 
    <div key={index}>
      <Link className="beers-image" to={`/beers/${beersList._id}`}><img src={ info.image_url } alt="beers"/></Link>
      <div className="beers-info-box">
        <Link className="beers-name" to={`/beers/${beersList._id}`}>{ info.name }</Link>
        <p>{ info.tagline }</p>
        <p><strong>Contributed by:</strong>{ info.contributed_by }</p>
      </div>
    </div>
  )
  }

  render() {
    const { status } = this.state;

    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <div>{ status }</div>;
      case STATUS.LOADED:
        return <div>
                <HomeButton />
                { this.listingBeers() }
              </div>;
      case STATUS.ERROR:
        return <div>{ status }</div>;
    }
  }
}

export default Beers;