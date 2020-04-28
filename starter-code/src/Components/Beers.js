import React, { Component } from "react";
import UserContext, { UserProvider } from "./UserContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class Beers extends Component {
  static contextType = UserContext;

  state = {
    allBeers: [],
  };

  componentDidMount() {
    const { setLoad } = this.context;
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      setLoad(true);
      this.setState({
        allBeers: res.data,
      });
      setLoad(false);
    });
  }

  render() {
    const { loadStatus, setLoad } = this.context;
    let content;
    console.log("Render", loadStatus);
    if (loadStatus === true) {
      content = (
        <div className="Loading">
          <img alt="loading" src="./images/load.gif" />
          Loading
        </div>
      );
    } else {
      content = (
        <div>
          {this.state.allBeers.map((item, index) => {
            return (
              <div key={index} className="beer-container">
                <div className="beer-detail">
                  <img alt={item.name} src={item.image_url}></img>
                  <Link to={`/beers/detail/${item._id}`}>{item.name}</Link>
                  <br />
                  {item.tagline}
                  <br />
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return <div>{content}</div>;
  }
}

export default Beers;
