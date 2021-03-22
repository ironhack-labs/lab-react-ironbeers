import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
          console.log(response.data)
        this.setState({ beers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }



export default Beers;