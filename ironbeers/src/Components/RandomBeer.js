import React, { Component } from 'react';
import Axios from "axios"
import View from "./View"


export default class RandomBeer extends Component {
    constructor(props){
        super(props);
        this.state={
            beers:"",
        }
        Axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
        .then(data => {
          this.setState({
            beers: data.data[0]
          });
        })
        .catch(err => console.log(err));
    }
    render() {
        let {beers} = this.state
        console.log(beers)
    return (
        <div>
            <View {...beers}/>
            <p>{beers.description}</p>
            <a href="/Beers">Go back</a>
        </div>
    )
  }
}