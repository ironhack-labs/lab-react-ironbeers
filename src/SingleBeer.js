import React, { Component } from 'react';
import axios from 'axios';

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
    );
  };
  render() {
    return <div>{this.showSingleBeer()}</div>;
  }
}

export default SingleBeer;
