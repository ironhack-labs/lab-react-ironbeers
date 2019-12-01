import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Search extends Component {

    handleChange = event =>{
        this.props.setQuery(event.target.value)
    }

    render(){
        return (
          <div>
            <input
              className="form-control"
              placeholder="Search Beer"
              type="text"
              name="query"
              value={this.props.query}
              onChange={this.handleChange}
            />
          </div>
        );
    }
}

export default class AllBeers extends Component {
  state = {
    beers: [],
    query: ""
  };

  setQuery = query => {
      this.setState({
        query: query
      })
    }          
      

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        console.log(response);
        this.setState({
          beers: response.data
        });
        console.log("this.state.beeers", this.state.beers);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
      let beers;
      if (this.state.query === ""){
        beers = this.state.beers
      }
      else {
          beers = this.state.beers.filter(el => el.name.toLowerCase().includes(this.state.query.toLowerCase()) )
      }
    return (
      <div>
          <Search setQuery={this.setQuery} query={this.state.query}/>
        {beers.map(beer => {
          return (
            <Link key={beer._id} to={`/beers/${beer._id}`}>
              <div className="BeerListing">
                <img
                  style={{ height: "20vh" }}
                  src={beer.image_url}
                  alt="beerpic"
                />
                <div>
                  <h3>{beer.name}</h3>
                  <p style={{ color: "gray" }}>{beer.tagline}</p>
                  <p>Created by {beer.contributed_by}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
