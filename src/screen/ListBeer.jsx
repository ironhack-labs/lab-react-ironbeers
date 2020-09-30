import React from 'react';
import NavBar from '../components/Navbar';
import '../stylesheets/ListBeer.css'
import { allBeer } from '../services/api-client';

export default class ListBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    allBeer().then((res) =>
      this.setState({
        beers: res,
      })
    );
  }

  render() {
    console.log(this.state.beers);
    return (
      <div>
        <NavBar />
        <div className="container">
          <ul class="list-group mb-5">
            {this.state.beers.map((beer) => {
              return (
                <li className="list-group-item beer-item">
                  <img
                    src={beer.image_url}
                    alt={beer.name}
                    className="float-left img-description"
                  />
                  <div className="beer-description">
                    <h3> {beer.name} </h3>
                    <h6 className="text-secondary"> {beer.tagline} </h6>
                    <div>
                      <b> Created by: </b> {beer.name}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
