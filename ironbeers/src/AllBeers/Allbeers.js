import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import AddNewBeer from "../AddNewBeer/AddNewBeer";
import HomeBtn from "../HomeBtn/HomeBtn";

class Allbeers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [], filterQuery: "" };
  }

  getAllBeers = () => {
    Axios.get(`http://localhost:5000/all`).then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data
      });
    });
  };

  searchOneBeer(e) {
    const filter = e.target.value;

    this.setState({
      filterQuery: filter
    });
    Axios.get(`http://localhost:5000/search?q=${filter}`).then(
      responseFromApi => {
        this.setState({
          listOfBeers: responseFromApi.data
        });
      }
    );
  }

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        <div className="fix">
          <HomeBtn />
          <input
            className="search"
            type="search"
            name="searchBox"
            placeholder="Search Beer"
            onChange={e => this.searchOneBeer(e)}
            value={this.state.filterQuery}
          />
        </div>
        {/* <AddNewBeer getData={() => this.getAllBeers()} /> */}
        <div className="allBeers">
          {this.state.listOfBeers.map(beer => {
            return (
              <div className="each" key={beer._id}>
                <Link to={`/detail/${beer._id}`}>
                  <h3 className="link">{beer.name}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Allbeers;
