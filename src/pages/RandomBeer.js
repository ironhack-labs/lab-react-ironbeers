import React from "react";
import { getData } from "../lib/getData.js";
import {BeerDetail} from '../components/BeerDetail'
import {Loader} from '../components/Loader'
import {Header} from '../components/Header'

export default class RandomBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    console.log("Component did mount");
    getData(`random`).then(data => {
      console.log(data[0])
      this.setState({ data:data[0] });
    });
    
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <React.Fragment>
      <Header />
      <div className="section">
        <div className="container">
          {this.state.data ? (
            <BeerDetail beer={this.state.data}/>
          ) : (
            <Loader />
          )}
        </div>
      </div>
      </React.Fragment>
    );
  }
}