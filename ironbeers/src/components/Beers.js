import React, { Component } from "react";
import Header from "./Header.js";
import axios from "axios";
import styled from '@emotion/styled'

const ImgBeer = styled.img`
    width: 40px;
    height: 100px;
    padding-top: 50px;
`


export default class Beers extends Component {
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
            {this.state.beers.map((e, index) => (
                <div>
                    <ImgBeer src={e.image_url}/>
                    <h1>{e.name}</h1>
                    <p>{e.tagline}</p>
                    <p><b>Created by:</b> {e.contributed_by}</p>
                </div>
            ))}
          </div>
        </div>
      );
    }
  }