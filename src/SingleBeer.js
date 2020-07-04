import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      singleBeer: []
    };
  }
  async componentDidMount() {
    let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    // console.log(res);
    this.setState({
      beers: res.data
    });
  }
  showSingleBeer = () => {
    let beer = this.state.beers.find(eachBeer => {
      //console.log(eachBeer._id);
      return eachBeer._id === this.props.match.params.beerId;
    });
    console.log({ ...beer });
    return (
      <div>
        <Link to="/">
          <img
            className="house"
            width="170vw"
            height="150vh"
            src="https://www.pinclipart.com/picdir/big/405-4059078_png-file-svg-transparent-white-home-button-clipart.png"
            alt="home-button"
          />
        </Link>
        <div className="wholePage">
          <img src={{ ...beer }.image_url} alt="single beer" />
          <div className="nameHead">
            <h1>{{ ...beer }.name}</h1>
            <p>{{ ...beer }.attenuation_level}</p>
          </div>
          <div className="date">
            <h2>{{ ...beer }.tagline}</h2>
            <p>{{ ...beer }.first_brewed}</p>
          </div>
          <p className="descript">{{ ...beer }.description}</p>
          <p className="closer">{{ ...beer }.contributed_by}</p>
        </div>
      </div>
    );
  };
  render() {
    return <div>{this.showSingleBeer()}</div>;
  }
}

export default SingleBeer;
