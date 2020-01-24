import React, { Component } from 'react';
import axios from "axios";

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
            { this.state.listOfBeers.map( beer => {
                return (
                    <div class="card" style={{ width: 400 }}>
                    <img src={beer.image_url} class="card-img-top" />
                    <div class="card-body">
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </p>
                    </div>
                    </div>
                )})
              }
              </div>
          );
    }
}
 
export default AllBeers;