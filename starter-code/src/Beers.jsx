import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const data = "https://ih-beers-api2.herokuapp.com/beers";

export default class Beers extends React.Component {
  componentDidMount = () => {
    axios.get(data).then(allb => {
      allb.data.map(each => console.log(each.name));
    });
  };
  render = () => {
    return (
      <div>
        <Link to="/">
          <button className="btn btn-warning">Home</button>
        </Link>
      </div>
    );
  };
}
