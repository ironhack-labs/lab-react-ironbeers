import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

class AllBeers extends React.Component {
  state = {
    beers: [],
    beersCopy: [],
    input: '',
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({
        beers: [...response.data],
        beersCopy: [...response.data],
      });
    } catch (err) {
      console.error(err);
    }
  };

  filterBeer = (input) => {
    const filtered = this.state.beers.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ beersCopy: filtered });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.input !== prevState.input) {
      this.filterBeer(this.state.input);
    }
  }

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({
      input: value,
    });
  };

  render() {
    console.log(this.state.beers);
    return (
      <div>
      <Navbar />
        <div className="form-group d-flex justify-content-center mt-3 container">
          <input
            type="text"
            className="input form-control"
            onChange={this.handleSearch}
            placeholder="Search"
            value={this.state.input}
            style={{ width: 600 }}
          />
        </div>
        <ul className="list-group">
          {this.state.beersCopy.map((element) => (
            <Link to={`/beers/${element._id}`} key={element._id}>
              <li className="list-group-item">
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex justify-content-center"
                    style={{ width: 250 }}
                  >
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
