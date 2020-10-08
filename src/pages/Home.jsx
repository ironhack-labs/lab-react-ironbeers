import React from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';
import ironbeerApi from '../api/ironbeerApi';

class Home extends React.Component {
  state = { Beer: null };

  componentDidMount() {
    ironbeerApi
      .getRandomBeer()
      .then((apiResponse) => {
        console.log(this.props)
        console.log(apiResponse);
        this.setState({ Beer: apiResponse.data });
      })
      .catch((err) => console.log(err));
  }


  render() {
    return (
      <div className="Home">
        <div className="beers">
          <div className="imgBeer img1"></div>
          <h1>
            <Link to="/beers">All Beers</Link>
          </h1>
          <p></p>
        </div>
        <div className="beers">
          <div className="imgBeer img2"></div>
          {this.state.Beer && (
            <h1>
              <Link to={`/random-beer/${this.state.Beer._id}`}>
                Random Beer
              </Link>
            </h1>
          )}

          <p></p>
        </div>
        <div className="beers">
          <div className="imgBeer img3"></div>
          <h1>
            <Link to="new-beer">New Beer</Link>
          </h1>
          <p></p>
        </div>
      </div>
    );
  }
}

export default Home;
