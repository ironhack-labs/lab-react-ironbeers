import React, { Component } from 'react';
import NavBar from './navbar';
import Beer from './beer';
import axios from 'axios';
import './all-beers.css'

class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response.data);
        
        this.setState({ beers: response.data })
      })
  }

  render() {
    return (
      <div className="Beers container">
        <NavBar />
        <div className="mt-5">
          {this.state.beers.map((item) => <Beer image={item.image_url} name={item.name} tagline={item.tagline} contributed_by={item.contributed_by}/>)}
        </div>
      </div>
    )
  }
}




export default AllBeers;