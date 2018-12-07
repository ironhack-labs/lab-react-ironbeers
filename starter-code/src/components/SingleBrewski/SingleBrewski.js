import React, { Component } from 'react';
import Axios from "axios"
import ViewsFromTheSix from "../ViewsFromTheSix/ViewsFromTheSix"


 export default class SingleBrewski extends Component {
    constructor(props){
        super(props);
        this.state={
            beers:"",
        }
        Axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
        .then(data => {
          this.setState({
            beers: data.data
          });
        })
        .catch(err => console.log(err));
    }
    render() {
        let {beers} = this.state
        console.log(beers)
        console.log(this.state)
    return (
        <div>
            <ViewsFromTheSix {...beers}/>
            <p>{beers.description}</p>
            <a href="/Beers">Go back</a>
        </div>
    )
  }
} 