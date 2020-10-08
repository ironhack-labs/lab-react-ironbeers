import React from 'react';
import apiHandler from '../apiHandler';
import '../styles/Beers.css';
import NavMain from '../components/NavMain';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    console.log('I have mounted!');
    console.log('!!!!!!!!!!!!!!!!');
    apiHandler
      .get()
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({ beers: apiResponse.data });
      })
      .catch((error) => console.log(error));
  }
  componentDidUpdate() {
    console.log('I have updated!');
  }
  componentWillUnmount() {
    console.log('I have unmounted!');
  }
  render() {
    console.log('I have rendered!');
    return (
      <div className="Beers">
        <NavMain />
        <h1>All the Beers</h1>
        {this.state.beers.map((beer) => (
          <div key={beer._id} className="beer-container">
            <Link key={beer._id} to={`/${beer._id}`}>
              <div className="image">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="text">
                <h3 className="beer-title">{beer.name}</h3>
                <h5 className="beer-tagline">{beer.tagline}</h5>
                <p className="contributed">
                  <strong>Created by:</strong>
                  {beer.contributed_by}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Beers;
