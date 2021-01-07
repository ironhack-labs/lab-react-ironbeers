import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((responseFromApi) => {
      
      this.setState({
        beers: responseFromApi.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Beers Page</h2>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img
                // style={{
                //   width: 200,
                //   height: auto,
                // }}
                src={beer.image_url}
                alt={beer.name}
              />
              <Link to={`/beers/${beer._id}`}>
                <h2>{beer.name}</h2>
                </Link>
                <h3>{beer.tagline}</h3>
                <p>Created by: {beer.contributed_by}</p>
              
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
