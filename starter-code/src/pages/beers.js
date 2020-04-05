import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import Header from "../components/Header";

import './beers.css';
// import { Link, Route } from 'react-router-dom';

class beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios.get('https://ih-beers-api.herokuapp.com/beers').then(response => {
      this.setState({ beers: response.data });
      console.log(response.data)
    });
  }

  render() {
    return (
      <div className="beers">
        <Header />
        <p>Check out all of these beers</p>

        <div className="all-beers">
          {this.state.beers.map(beer => (
            <div className="beer-card">
              <div className="beer-image">
                <img src={beer.image_url} alt="beer" />
              </div>
              <div className="beer-text">
                <h1>{beer.name}</h1>
                <h5>{beer.tagline}</h5>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default beers;





// class Beers extends Component {
//   constructor() {
//     super();
//     this.state = {
//       beers: [],
//     };
//   }

//   componentDidMount() {
//     axios.get('https://ih-beers-api.herokuapp.com/beers').then(response => {
//       this.setState({ countries: response.data });
//     });
//   }

//   render() {
//     return (
//       <div className="Beers">
//         <Header />
//         <p>Check out all of these beers</p>

//         <div className="All-beers">
//           {this.state.beers.map(beer => (
//             <h1>{beer.name}</h1>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Beers;