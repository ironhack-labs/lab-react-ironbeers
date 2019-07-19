import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Beers extends Component {
  constructor(){
      super();
      this.state = { listOfBeers: [] };
  }

  getAllBeers = () =>{
    axios.get(`http://localhost:5000/all`)
   
    .then(responseFromApi => {
      
      this.setState({
        listOfBeers: responseFromApi.data
      })
      
    })
  }

  componentDidMount() {
    this.getAllBeers();
  }

  render(){
    return(
      <div>
        
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfBeers.map( project => {
            return (
              <div key={project._id}>
                <Link to={`/BeerDetail/${project._id}`}>
                  <h3>{project.name}</h3>
                  </Link>
                  <img className="imgBeers" src={project.image_url} />
                  <h3>{project.tagline}</h3>
              </div>
            )})
          }
        </div>
      </div>
      
    )
  }
}

export default Beers;