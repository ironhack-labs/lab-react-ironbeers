import React, { Component } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";

class AllBeers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: []};

  }

  getAllBeers = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((responseFromApi) => {
        this.setState({
          listOfBeers: responseFromApi.data,
        });
        
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  searchFilter = (search) => {
    const urlStart = 'https://ih-beers-api2.herokuapp.com/beers/search?q=' + search.target.value.toLowerCase();
    console.log(search)
    axios
    .get(urlStart)
    .then((responseFromApi) => {
      console.log(responseFromApi.data)
      this.setState({
        listOfBeers: responseFromApi.data,
      });
      
    });
};

  render() {
    return (
      <div>
        <NavBar />
        <input
            type="text"
            placeholder="search"
            name="name"
            value={this.state.name}
            onChange={this.searchFilter}/>

            
        <div className="allBeers">
          {this.state.listOfBeers.map((eachBeers) => {
            return (
              <div key={eachBeers._id} className="oneBeers">
              
                <Link to={`/AllBeers/${eachBeers._id}`}>
                <img src={eachBeers.image_url} alt="foto" />
                {eachBeers.name}
              </Link>
                <p>{eachBeers.tagline}</p>
                <p>{eachBeers.contributed_by}</p>
                </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllBeers;
