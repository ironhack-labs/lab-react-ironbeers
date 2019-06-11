import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      search: ""
    };
  }

  componentDidMount() {
    this.fetchBeers();
  }

  fetchBeers() {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        this.setState({
          beers: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchBeer(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredDatas = this.state.beers.filter(data => {
      return (
        data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div className="beers">
        <div className="searchBar">
          <input
            type="text"
            onChange={this.searchBeer.bind(this)}
            placeholder=" Search Beer... "
          />
        </div>

        {filteredDatas.map(beer => {
          return (
            <Link to={`/Beers/${beer._id}`} key={beer._id} className="beer">
              <div>
                <div className="beer">
                  <div>
                    <img
                      className="beer-img"
                      src={beer.image_url}
                      alt={beer.name}
                    />
                  </div>
                  <div>
                    <h4>{beer.name}</h4>
                    <br />
                    <p>{beer.tagline}</p>
                    <br />
                    <p>
                      <small>Created by : {beer.contributed_by}</small>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beers;
