import React from 'react';
import axios from 'axios';
const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers';
const apiSearch = 'https://ih-beers-api2.herokuapp.com/beers/search?q={query}'

export default class AllBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        this.setState({
          beers: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })

      let query = this.state.search

      axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then(res => {
          this.setState({
            beers: res.data
          }
          )
      })
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            className="form-control"
            id="search"
            aria-describedby="search"
            placeholder="Enter beer search"
            name="search"
            onChange={(e) => this.handleChange(e)}
            value={this.state.search}
          />
        </div>

        {this.state.beers.map((beer, _id) => (
          <a href={`beers/${beer._id}`} key={_id}>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </a>
        ))}
      </div>
    );
  }
}
