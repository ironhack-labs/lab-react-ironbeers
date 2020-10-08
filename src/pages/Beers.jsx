import React from 'react';
import apiHandler from '../apiHandler';
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
      <div>
        <h1>All the Beers</h1>
        {this.state.beers.map((beer, i) => (
          <Link key={i} to={`/Beers/${beer.id}`}>
            <img src={beer.image_url} alt={beer.name} />
            <h3 className="beer-title">{beer.name}</h3>
            <h5 className="beer-tagline">{beer.tagline}</h5>
            <p className="contributed">{beer.contributed_by}</p>
          </Link>
        ))}
      </div>
    );
  }
}

export default Beers;
