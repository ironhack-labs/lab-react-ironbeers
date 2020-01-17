import React, { Component } from 'react';
import axios from "axios";

export class AllBeers extends Component {
    constructor(props){
    super(props)
    this.state={
      // beers=[]
    }
  }
  componentDidMount(){
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response =>{
      this.setState({beers:response.data})
    })
  }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AllBeers;
