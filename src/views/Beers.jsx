import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Beers extends React.Component {
    state = {
      beers: [],
    };
  
    componentDidMount() {
      axios.get("https://ih-beers-api2.herokuapp.com/beers").then((responseFromApi) => {
        console.log(responseFromApi);
        this.setState({
          beers: responseFromApi.data,
        });
      });
    }
  
    render() {
      return (
        <div>
          <h2>Beers page</h2>
          
          {this.state.beers.map((beer) => {
            return (
              <div key={beer._id}>
                <img
                  style={{
                    width: 80,
                    height: 100,
                  }}
                  src={beer.image_url}
                  alt={beer.name}
                />
                <Link to={`/beers/${beer._id}`}>
                  <h3>{beer.name}</h3>
                </Link>
                <h3>{beer.tagline}</h3>
                <h3> Created by {beer.contributed_by}</h3>
              </div>
            );
          })}
        </div>
      );
    }
  }
  
  export default Beers;
  