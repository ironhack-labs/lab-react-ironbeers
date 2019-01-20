import React, { Component } from "react";
import Header from "./Header.jsx";
import axios from "axios";
import Card from "./Card.jsx"

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  allBeers = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`).then(e => {
      this.setState({
        beers: e.data
      });
      console.log(this.state.beers);
    });
  };

  componentDidMount() {
    this.allBeers();
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <div>
            {this.state.beers.map((e,index)=>
                <Card data={e} key={index}/>
                )}
        </div>
      </div>
    );
  }
}

export default Beers;
