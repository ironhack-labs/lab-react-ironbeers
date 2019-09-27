import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AllBeers extends React.Component {
  state = {
    beers: []
  };

  componentDidMount = () => {
    console.log("AllBeers Component Mounted");
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
      console.log("Response from API", response.data);
      this.setState({
        beers: response.data.slice(0, 3)
      });
    });
  };

  //   getBeerData = () => {
  //     const allBeers = this.props.beers;
  //   };

  render() {
    return (
      <div>
        {this.state.beers.map(beer => {
          return (
            <Link to={`beer/${beer._id}`} key={beer._id}>
              <div>
                <div className='img'>
                  <img src={beer.image_url} style={{ height: "50px" }} />
                </div>
                <h3>{beer.name}</h3>
                <h5>{beer.tagline}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

// const Beers = props => {
//   const allBeers = props.beers;
//   console.log("All Stuff", allBeers);
//   return (

//   );
// };

export default AllBeers;

/*
_id
name:
tagline
image_url
*/
