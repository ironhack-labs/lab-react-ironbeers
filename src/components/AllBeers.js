import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({ beers: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    console.log(this.state.beers);
    return (
      <div>
        <ul className="list-group">
          {this.state.beers.map((element) => (
            <Link to={`/beers/${element._id}`} key={element._id}>
              <li className="list-group-item">
                <div className="d-flex align-items-center">
                  <div className="d-inline p-30">
                    <img
                      height="200"
                      width="auto"
                      src={element.image_url}
                      alt={element.name}
                    />
                  </div>
                  <div className="text-dark">
                    <h3>{element.name}</h3>
                    <h4 className="text-muted">{element.tagline}</h4>
                    <p>
                      <strong>Created by: </strong>
                      {element.contributed_by}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllBeers;
