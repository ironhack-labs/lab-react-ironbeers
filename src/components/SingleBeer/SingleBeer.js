import React, { Component } from 'react';
import NavBar from '../Navbar/NavBar';
import { getSingleBeer } from '../../services/BeersService';
import './SingleBeer.css';

export default class SingleBeer extends Component {
  state = {
    beer: [],
  };

  componentDidMount = () => {
    const id = this.props.match.params.beerId;
    getSingleBeer(id).then((beer) => this.setState({ beer }));
  };
  render() {
    return (
      <div>
        <NavBar />
        <div calssName="single-beer-card">
          <div className="single-image-container">
            <img src={this.state.beer.image_url} alt={this.state.beer.name} />
          </div>
          <div className="single-beer-details">
            <h4>{this.state.beer.name}</h4>
            <p>{this.state.beer.attenuation_level}</p>

            <h5>{this.state.beer.tagline}</h5>
            <p>{this.state.beer.first_brewed}</p>
            <h6>{this.state.beer.description}</h6>
            <p>
              <span>Created by: </span>
              {this.state.beer.contributed_by}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// export default function SingleBeer(props) {
//
//   return (
//     <div>
//       <NavBar />
//       <div key={beer.id}>
//         <h1>hello</h1>
//         <p>{beer.name}</p>
//       </div>
//     </div>
//   );
// }
