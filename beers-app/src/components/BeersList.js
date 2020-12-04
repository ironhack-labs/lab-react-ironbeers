import Header from "./Header";
import React, { Component } from "react";
import SingleBeer from "./SingleBeer";
import ApiHandler from './api-handler'

class BeersList extends Component {
  
    constructor() {
    
        super();
        this.state = {
            listOfbeers: []
        };
       
  }

  componentDidMount() {

    this.setState({listOfbeers: new ApiHandler})
}
 

  render() {
      
    return (
      <>
        <Header />
        <ul>
            <li>
                {this.state.listOfbeers.map(elm => <SingleBeer key={elm._id} image={elm.image_url} name={elm.name} tagline={elm.tagline} contributed_by={elm.contributed_by} /> )}
            </li>
        </ul>
        
      </>
    );
  }
}

export default BeersList;
