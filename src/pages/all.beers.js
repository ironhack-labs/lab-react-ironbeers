import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class allBeers extends Component {
  state = {
    all: [],
    query: ""
  };

  getAllBeers = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        const data = response.data;
        this.setState({ all: data });
        console.log(data)

      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getAllBeers();
  }

  handleSearchInput = (event) => {
    let query = event.target.value
    // this.setState(() => ({query:query}))
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.query}`)
    .then((found) => {
        this.setState(() => ({all: found.data}));
      }
    )

     
}

  render() {
    return (
      <div key= {this.state.all.ebc} id="all-beers">

        <div>

        <form>
          <input
            placeholder="search"
            name="search"
            type="text"
            value={this.state.name}
            onChange={this.handleSearchInput}
          />
        </form>


          {this.state.all.map((beer) => (
           <div key= {beer._id} className="beer">
               <img src={beer.image_url} ></img> 
               <Link to={`/beers/${beer._id}` }> {beer.name}  </Link>
                <h4>{beer.tagline}</h4>
                <p>{beer.contributed_by}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default allBeers;