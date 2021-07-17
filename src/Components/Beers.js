import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = {
    Beers: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    this.setState({
      Beers: response.data,
    });
  }

  render() {
    const { Beers } = this.state;
    return (
      <>
        <h1>Beers List</h1>
        {Beers.map((beer) => {
          return (
            <div
              key={beer._id}
              className="card mb-3" 
              style={{ }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={beer.image_url}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`/${beer._id}`}>{beer.name}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Beers;
