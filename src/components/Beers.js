import React from 'react';
import Nav from './Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = {
    beers: [],
  };

  async componentDidMount() {
    try {
      let response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({ beers: [...response.data] });
      console.log(this.state.beers);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <table className="table">
          <tbody>
            {this.state.beers.map((element, index) => {
              return (
                <Link to={`/beers/${element._id}`}>
                <tr key={index}>
                  <td>
                    <img
                      src={element.image_url}
                      alt="beer photo"
                      style={{ height: '250px' }}
                      className=""
                    />
                  </td>
                  <td>
                    <div>
                      <h1>{element.name}</h1>
                      <h2>{element.tagline}</h2>
                      <p>
                        <strong>Created by: </strong>
                        {element.contributed_by}
                      </p>
                    </div>
                  </td>
                </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Beers;
