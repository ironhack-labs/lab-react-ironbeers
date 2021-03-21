import React, { Component } from 'react';
import axios from "axios";

class RandomBeer extends Component {

    state ={
        beer: null
    }
    
      componentDidMount() {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers`)
          .then((response) => {

              const randomId = response.data[Math.floor(Math.random() * response.data.length)]._id

              const foundBeer = response.data.find((beer) => beer._id === randomId)

              this.setState({ beer: foundBeer });

              console.log("RANDOM BEER", foundBeer)



            //response.data.find(response.data._id === randomId)

            //   this.setState({ beer: });
            
          })
          .catch((error) => {
            console.log(error);
          });
       }
    
      render() {
         if (this.state.beer === null) {
           return <div>Loading...</div>;
        }
    
         return (
          <div> 
            <img style={{height:"300px", paddingTop:"50px"}} src={this.state.beer.image_url} alt="" />
            <div style={{textAlign:"left", padding: "20px"}}>
            <h2 >
              {this.state.beer.name}
            </h2>
            <p>{this.state.beer.tagline}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
            </div>
          </div>
        );
      }
    }


export default RandomBeer;