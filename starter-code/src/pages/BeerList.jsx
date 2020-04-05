import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import "../styling/BeerList.css"

export class BeerList extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api.herokuapp.com/beers")
      .then(response => {
        console.log("all beers response: ", response);
        this.setState({ beers: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
            {this.state.beers.map(beer => (

              <Link to={`/beers/${beer._id}`}>
              <div className="row beer-list">

                <div className="col-5">
                  <img src={beer.image_url} alt="Beer Bottle" />
                </div>
                <div className="col-7 beer-list_text">
                  <h2>{beer.name}</h2>
                  <h4>{beer.tagline}</h4>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
                </div>
              </Link>

            ))}
        </div>
      </div>
    );
  }
}

export default BeerList;
//

//   render() {
//     return (
//       <div className="App">
//       {this.state.countries.length === 0 && <h1>Loading ...</h1>}
//       {this.state.countries.map((country) => {
//           return <h1>{country.name.common}</h1>
//         })}
//       </div>
//     );
//   }
// }

// export default App;
