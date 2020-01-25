import React, { Component } from 'react';
import axios from "axios";
import Navbar from './Navbar'
import '../App.css';

class AllBeers extends Component {
    constructor(props) {
        super(props);
        this.state = { listOfBeers:[] }
        this.getAllBeers = this.getAllBeers.bind(this);

    }


    getAllBeers() {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers`)
          .then(responseFromApi => {
            console.log(responseFromApi);
            this.setState({
              listOfBeers: responseFromApi.data
            });
          });
      }
    
      componentDidMount() {
        this.getAllBeers();
      }


    render() { 
        return (
          
            <div>
               <Navbar />
               <div className='vini'>
            { this.state.listOfBeers.map( beer => {
                return (
                    <div class="card" style={{ width: 400 }}>
                    <img src={beer.image_url} class="card-img-top" />
                    <div class="card-body">
                      <h3 class="card-title">{beer.name}</h3>
                      <p class="card-text">
                      {beer.description}
                      </p>
                    </div>
                    </div>
                )})
              }
              </div>
              </div>
          );
    }
}
 
export default AllBeers;