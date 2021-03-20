import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./../components/Header"

class Beers extends React.Component {
    state = {
      beers: [],
    };
  
    componentDidMount() {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log(response.data)
          this.setState({ beers: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
   
    render() {
     
  
      return (
        <div>
            <Header/>
          <h1>Beers</h1>
         
          {this.state.beers.map((beer) => (
            <div key={beer._id}>
              <img src={beer.image_url} alt="" />
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
              
             
              <Link to={`/beers/${beer._id}`}>See more !</Link>
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default Beers;
  