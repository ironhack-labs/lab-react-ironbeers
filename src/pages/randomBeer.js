import React, { Component } from "react";
import { Header } from "../components/Header";
import { getBeer } from "../lib/getBeer";
import { Link } from 'react-router-dom';
import { SingleBeer } from "../components/SingleBeer";

class RandomBeer extends Component {
  constructor(){
    super();
    this.state = {
        data: null,
    }
};

componentDidMount() {
  getBeer("random").then(data => {
    this.setState({ data: data[0] });
  });
}

render(){
return (
  <div>
    <Header />
    <div>
    {this.state.data ? (<SingleBeer beer={this.state.data} />) : (
              <p>...</p>
            )}
    </div>
  </div>
)
    }  
};

export default RandomBeer;