import React, { Component } from 'react';
//import AllBeers from '../components/AllBeers'
import axios from 'axios';

class BeerDetails extends Component{
  state = {
    thebeer: ''
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/single/:id")
    .then(res => {
      //this.setState({thebeer: response.data})
      this.setState({thebeer: res.data})
      console.log(this.state.thebeer)
    })
  }


  
  render() {
  return(
    <div className="BeerDetails container">
    {this.state.thebeer}
       {/* <div className="card md-col-4">
           <img className="card-img-top" src={this.state.thebeer.image_url} alt="Beer" />
           <div className="card-body">
            <h5 className="card-title">{this.state.thebeer.name}</h5>
             <p className="card-text">{this.state.thebeer.tagline}</p>
             <p className="card-text">Created By: {this.state.thebeer.contributed_by}</p>
           </div>
         </div> */}
      </div>
  )
  }
}    

export default BeerDetails;