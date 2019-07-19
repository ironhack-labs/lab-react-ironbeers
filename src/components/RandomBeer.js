import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RandomBeer extends Component {
  constructor(){
      super();
      this.state = {};
  }

  componentDidMount(){
      this.getSingleProject();
  }

  getSingleProject = () => {
      // const { params } = this.props.match;
      axios.get(`http://localhost:5000/random`)
      .then( responseFromApi =>{
          const theProject = responseFromApi.data;
          this.setState(theProject);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <img  src={this.state.image_url} />

        <p>{this.state.tagline}</p>
        <Link to={'/beers'}>Back to beers</Link>
      </div>
    )
  }
}

export default RandomBeer;