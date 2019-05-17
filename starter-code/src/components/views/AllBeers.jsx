import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AllBeers extends React.Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
      //   console.log(response.data);
      this.setState({
        beers: response.data
      });
    });
  }

  displayBeers() {
    return this.state.beers.map(allBeers => {
      return (
        <div style={{ border: "1px solid black" }}>
          <Link to={`/beers/${allBeers._id}`}>
            <img style={{ height: "100px" }} src={allBeers.image_url} />

            <div>
              <h3>{allBeers.name}</h3>
              <h5>{allBeers.tagline}</h5>
              <p>Created by: {allBeers.contributed_by}</p>
            </div>
          </Link>
        </div>
      );
    });
  }

  handleSearch(e) {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/search?q=${e.target.value}`)
      .then(foundBeers => {
        this.setState({
          beers: foundBeers.data
        });
      });
  }
  render() {
    return (
      <div>
        <div>
          <input
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "rgba(0,0,0,0.1)",
              height: "25px"
            }}
            type="text"
            placeholder="Search for a beer"
            onChange={e => {
              this.handleSearch(e);
            }}
          />
        </div>
        {this.displayBeers()}
      </div>
    );
  }
}

export default AllBeers;
